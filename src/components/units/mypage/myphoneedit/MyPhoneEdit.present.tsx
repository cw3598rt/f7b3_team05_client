import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";

import * as S from "./MyPhoneEdit.styles";

export default function MyPhoneEditUI(props) {
  return (
    <S.Container>
      <S.Title>회원정보 수정</S.Title>

      <S.Wrapper>
        <S.UserInfoBox>
          <S.UserDataLabel>이름</S.UserDataLabel>
          <S.UserData>홍길동</S.UserData>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel> 이메일 </S.UserDataLabel>
          <S.UserData> bcd@gamil.com </S.UserData>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel>비밀번호</S.UserDataLabel>
          <Link href={"/mypage/pwedit"}>
            <S.Edit>변경하기 </S.Edit>
          </Link>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel>내 전화번호</S.UserDataLabel>
          <S.UserData> 010-1234-5678 </S.UserData>
          <S.Edit onClick={props.onClickEdit}>변경하기</S.Edit>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel>회원 탈퇴</S.UserDataLabel>
          <S.Edit onClick={props.onClickMoveToDelete}>탈퇴하기</S.Edit>
        </S.UserInfoBox>
        {props.isEdit && (
          <>
            <h3 style={{ padding: "1em" }}> 전화번호 수정</h3>

            <S.Form onSubmit={props.handleSubmit(props.onClickPhonNumberEdit)}>
              <>
                <S.PhoneNewInputBox>
                  <S.PhoneBox>
                    <S.PhoneNewInput
                      type="text"
                      name="phoneNumber"
                      placeholder="-을 제외한 숫자만 입력하세요 "
                      onChange={(e) => {
                        props.setValue("phoneNumber", e.target.value);
                        props.trigger("phoneNumber");
                      }}
                    />
                  </S.PhoneBox>

                  <S.ConfirmBtn
                    onClick={props.onClickVerifyMySelfByNo}
                    type="button"
                  >
                    인증
                  </S.ConfirmBtn>
                </S.PhoneNewInputBox>
                <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
                <S.VerificationInputBox>
                  <S.VerificationNoBox>
                    <S.VerificationNoInput
                      type="text"
                      placeholder="인증번호를 입력하세요."
                    />
                    <S.TimeOut ref={props.timeRef}>{props.showCount}</S.TimeOut>
                  </S.VerificationNoBox>

                  <S.ConfirmBtn
                    type="button"
                    ref={props.verificationBtn}
                    onClick={props.onClickCheckVerificationNo}
                  >
                    확인
                  </S.ConfirmBtn>
                </S.VerificationInputBox>
              </>
              <S.ButtonWrapper>
                <WebBlackButton title="취소하기" type="reset"></WebBlackButton>
                <WebPurpleButton
                  onClick={props.onClickPhonNumberEdit}
                  title="변경하기"
                ></WebPurpleButton>
              </S.ButtonWrapper>
            </S.Form>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
