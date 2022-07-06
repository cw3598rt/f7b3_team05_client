import styled from "@emotion/styled";

const Input = styled.input`
  width: 18em;
  height: 3em;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  color: black;
  border: 2px solid #4a00e0;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

export default function Input03(props) {
  return <Input type="text" />;
}