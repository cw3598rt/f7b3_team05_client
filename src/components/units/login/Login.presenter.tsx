import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import * as S from "./Login.styles";

export default function LoginUI(props) {
  return (
    <S.Wrapper>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitLogin)}>
        <S.IDdBox>
          <S.Input
            type="text"
            name="email"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => props.setValue("email", e.target.value)}
          />
        </S.IDdBox>
        <S.Error>{props.formState.errors.email?.message}</S.Error>
        <S.PasswordBox>
          <S.Input
            onChange={(e) => props.setValue("password", e.target.value)}
            name="password"
            ref={props.passwordInputRef}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {props.openEye && (
            <S.EyeBox>
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </S.EyeBox>
          )}
          {!props.openEye && (
            <S.EyeBox>
              <FontAwesomeIcon
                onClick={props.onClickShowPassword}
                icon={faEyeSlash}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </S.EyeBox>
          )}
        </S.PasswordBox>
        <S.Error>{props.formState.errors.password?.message}</S.Error>
        <S.LoginBtn>로그인</S.LoginBtn>
      </S.Form>
      <S.SignUpBox>
        <S.SignUpdetailBox>
          <S.SignupLabel>아직 계정이 없으신가요?</S.SignupLabel>
          <S.SignUpbtn onClick={props.onClickMoveToSignUp}>
            회원가입
          </S.SignUpbtn>
        </S.SignUpdetailBox>
        <S.FindIdPasswordBtn onClick={props.onClickMoveToFindIdPassword}>
          아이디 찾기 / 비밀번호 재설정
        </S.FindIdPasswordBtn>
      </S.SignUpBox>
      <S.Divider></S.Divider>
      <S.SocialLoginBtns>
        <S.KakaoBtn onClick={props.onClickLoginKakao}>
          <S.KakaoSymbol src="/img/login/kakaoSymbol.png" alt="kakaoSymbol" />
          <S.KakaoLabel>카카오 로그인</S.KakaoLabel>
        </S.KakaoBtn>
        <S.GoogleBtn onClick={props.onClickGoogleLogin}>
          <S.GoogleSymbol
            src="/img/login/googleSymbol.png"
            alt="googleSymbol"
          />
          <S.GoogleLabel>구글 로그인</S.GoogleLabel>
        </S.GoogleBtn>
      </S.SocialLoginBtns>
    </S.Wrapper>
  );
}
