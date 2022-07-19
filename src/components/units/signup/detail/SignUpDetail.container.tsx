import { useRouter } from "next/router";
import SignUpDetailUI from "./SignUpDetail.presenter";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USER,
  SEND_TOTKEN_TO_PHONE,
  CHECK_INPUT_TOKEN,
} from "./SignUpDetail.query";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,14}$/,
      "영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
  name: yup.string().required("필수 입력 사항입니다."),
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
});
const auth = getAuth();

export default function SignUpDetail() {
  const router = useRouter();
  const googleEmail = router.query.email;
  const kakaoEmail = router.query.email2;
  const googleLoggedIn = router.query.emailVerified;
  const kakaologgedIn = router.query.has_email;

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);
  const verificationBtn = useRef<HTMLButtonElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const [openEye1, setOpenEye1] = useState(false);
  const [openEye2, setOpenEye2] = useState(false);

  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [password, setPassword] = useState("");
  const [createUsergql] = useMutation(CREATE_USER);
  const [count, setCount] = useState(60);
  const [showCount, setShowCount] = useState("03:00");
  const [start, setStart] = useState(1);

  const [sendTokengql] = useMutation(SEND_TOTKEN_TO_PHONE);
  const [checkInputTokengql] = useMutation(CHECK_INPUT_TOKEN);
  const [phone, setPhone] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
    register("password2", { required: true });
    register("name", { required: true });
    register("phoneNumber", { required: true });
  }, []);
  useEffect(() => {
    let timer;
    if (start === 2) {
      let counts = count;
      timeRef.current.style.visibility = "visible";
      timer = setInterval(() => {
        counts = counts - 1;
        setCount(counts);
        console.log(counts);
        if (counts <= 0) {
          clearInterval(timer);
          setCount(60);
          setStart(1);
          verificationBtn.current.disabled = true;
          Swal.fire({
            title: "시간 초과",
            icon: "warning",
            confirmButtonText: "확인",
            confirmButtonColor: "#4a00e0e7",
          });
        }
        ShowCounts(counts);
      }, 1000);
    } else if (start === 3) {
      clearInterval(timer);
      // Swal.fire({
      //   title: "인증 완료",
      //   icon: "success",
      //   confirmButtonText: "확인",
      //   confirmButtonColor: "#4a00e0e7",
      // });
      setCount(60);
      setStart(1);
      timeRef.current.style.visibility = "hidden";
    }
    return () => {
      clearInterval(timer);
      setCount(60);
    };
  }, [start]);
  const onClickMoveToPasswordRef = () => {
    passwordInputRef.current.focus();
  };

  const onClickVerifyMySelfByNo = async () => {
    setStart(2);
    try {
      await sendTokengql({
        variables: {
          phone,
        },
      });
      Swal.fire({
        title: "인증번호 전송 완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "warning",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };
  const ShowCounts = (data) => {
    const min = Math.floor(data / 60);
    const sec = data % 60;
    const Showcount = `${String(min).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}`;
    setShowCount(Showcount);
  };
  const onClickCheckVerificationNo = async () => {
    console.log("ddd");
    setStart(3);
    try {
      await checkInputTokengql({
        variables: {
          phone,
          tokenInput,
        },
      });
      Swal.fire({
        title: "인증완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "warning",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };
  const onChangeTokenValue = (event) => {
    setTokenInput(event.target.value);
  };
  const onSubmitSignup = async (data) => {
    console.log(data);
    try {
      const result = await createUsergql({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
            phone: data.phoneNumber,
          },
        },
      });
      Swal.fire({
        title: `${result.data.createUser.name}`,
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });

      router.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickShowPassword = () => {
    passwordInputRef.current.type = "text";
    setOpenEye1(true);
    setTimeout(() => {
      passwordInputRef.current.type = "password";
      setOpenEye1(false);
    }, 1000);
  };
  const onClickShowPassword2 = () => {
    password2InputRef.current.type = "text";
    setOpenEye2(true);
    setTimeout(() => {
      password2InputRef.current.type = "password";
      setOpenEye2(false);
    }, 1000);
  };

  const onClickSocialIDLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/login");
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
          confirmButtonText: "확인",
          confirmButtonColor: "#4a00e0e7",
        });
      });
  };
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       router.push("/login");
  //     }
  //   });
  // }, [auth]);

  const onClickLogoutkakao = () => {
    // window.Kakao.Auth.logout();

    if (!Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());

      router.push("/login");
    });
  };

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init("675cd5356e97bab7c2fafe02e722f558");
      window.Kakao.isInitialized();
    };
  }, []);
  return (
    <>
      <Head></Head>
      <SignUpDetailUI
        googleEmail={googleEmail}
        kakaoEmail={kakaoEmail}
        googleLoggedIn={googleLoggedIn}
        kakaologgedIn={kakaologgedIn}
        onClickSocialIDLogout={onClickSocialIDLogout}
        onClickLogoutkakao={onClickLogoutkakao}
        handleSubmit={handleSubmit}
        setValue={setValue}
        formState={formState}
        trigger={trigger}
        onClickShowPassword={onClickShowPassword}
        onClickShowPassword2={onClickShowPassword2}
        passwordInputRef={passwordInputRef}
        password2InputRef={password2InputRef}
        openEye1={openEye1}
        openEye2={openEye2}
        onClickMoveToLogin={onClickMoveToLogin}
        onSubmitSignup={onSubmitSignup}
        onClickVerifyMySelfByNo={onClickVerifyMySelfByNo}
        onClickMoveToPasswordRef={onClickMoveToPasswordRef}
        showCount={showCount}
        verificationBtn={verificationBtn}
        onClickCheckVerificationNo={onClickCheckVerificationNo}
        password={password}
        setPassword={setPassword}
        timeRef={timeRef}
        setPhone={setPhone}
        onChangeTokenValue={onChangeTokenValue}
      />
    </>
  );
}
