import LoginUI from "./Login.presenter";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
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
      /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
});

export default function LoginPage() {
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const passwordInputRef = useRef();
  const [openEye, setOpenEye] = useState(false);
  useEffect(() => {
    register("email", { required: true });
    register("password");
  }, []);
  const onSubmitLogin = (data) => {
    console.log(data);
  };
  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };
  const onClickShowPassword = () => {
    passwordInputRef.current.type = "text";
    setOpenEye(true);
    setTimeout(() => {
      passwordInputRef.current.type = "password";
      setOpenEye(false);
    }, 1000);
  };
  const onClickGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        router.push({
          pathname: `/signup/detail`,
          query: { email: user.email, emailVerified: user.emailVerified },
        });
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onClickLoginKakao = () => {
    Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["kakao_account.email", "kakao_account.gender"],
          },
          success: function (response) {
            console.log(response);
            router.push({
              pathname: `/signup/detail`,
              query: {
                email2: response.kakao_account.email,
                has_email: response.kakao_account.has_email,
              },
            });
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <LoginUI
      onClickGoogleLogin={onClickGoogleLogin}
      onClickLoginKakao={onClickLoginKakao}
      handleSubmit={handleSubmit}
      onSubmitLogin={onSubmitLogin}
      setValue={setValue}
      formState={formState}
      openEye={openEye}
      onClickMoveToSignUp={onClickMoveToSignUp}
      passwordInputRef={passwordInputRef}
      onClickShowPassword={onClickShowPassword}
    />
  );
}
