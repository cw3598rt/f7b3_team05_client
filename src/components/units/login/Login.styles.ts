import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.section`
  margin-top: 4em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const Title = styled.h1`
  font-size: 2.8em;
  margin-bottom: 1em;
  cursor: default;
`;
export const Form = styled.form`
  width: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;
export const Input = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 1.3em;
`;
export const IDdBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Error = styled.div`
  font-size: 1.2em;
  color: red;
  margin-bottom: 2em;
`;
export const PasswordBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const EyeBox = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
`;
export const LoginBtn = styled.button`
  width: 100%;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #4a00e0;
  cursor: pointer;
`;
export const SignUpBox = styled.div`
  width: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;
export const SignUpdetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

export const SignupLabel = styled.span`
  font-size: 1.2em;
  margin-right: 1em;
  cursor: default;
`;
export const SignUpbtn = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 1.4em;
  font-weight: 600;
  cursor: pointer;
`;
export const FindIdPasswordBtn = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 1.2em;
  cursor: pointer;
`;
export const Divider = styled.div`
  width: 50%;
  height: 1px;
  background-color: black;
  margin-bottom: 2em;
`;

export const SocialLoginBtns = styled.div`
  width: 52%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;
  @media ${breakPoints.mobile} {
    width: 52%;
  }
`;

export const SocialLoginBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-bottom: 0.5em;
`;
export const SocialLoginLogo = styled.img`
  width: 35%;
  cursor: pointer;
`;
