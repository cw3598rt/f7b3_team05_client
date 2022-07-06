import styled from "@emotion/styled";

const Input = styled.input`
  width: 18em;
  height: 3em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

export default function Input04(props) {
  return <Input type="text" placeholder="홍길동" />;
}