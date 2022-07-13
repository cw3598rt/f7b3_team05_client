import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  margin: auto;
`;
export const Title = styled.h1`
  font-size: 2.5em;
`;

export const TabBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2em;
`;
export const TabFirst = styled.button`
  width: 45%;
  height: 3.5em;
  color: white;
  background-color: ${(props) =>
    props.isClickedfirst ? "#4a00e0e7" : "#6D737D99"};
  border-radius: 10px 10px 0px 0px;
  border: none;
  cursor: pointer;
`;
export const TabSecond = styled.button`
  width: 45%;
  height: 3.5em;
  color: white;
  background-color: ${(props) =>
    props.isClickedsecond ? "#4a00e0e7" : "#6D737D99"};
  border-radius: 10px 10px 0px 0px;
  border: none;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;
export const NameBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const Name = styled.div`
  font-size: 1.2em;
`;
export const NameInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 1.3em;
`;

export const PhoneNoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const PhoneNo = styled.div`
  font-size: 1.2em;
`;
export const PhoneNoInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 1.3em;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1em;
`;
export const ImportantInfos = styled.span`
  margin-left: 0.3em;
  font-size: 1.4em;
  color: red;
`;
