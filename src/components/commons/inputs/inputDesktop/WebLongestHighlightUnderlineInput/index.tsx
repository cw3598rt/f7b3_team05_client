import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

const Input = styled.input`
  width: 41em;
  height: 3.5em;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  color: black;
  border: none;
  border-bottom: 2px solid lightgray;
  :focus {
    border-bottom: 2px solid black;
  }
  transition: all 250ms ease-in-out;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

interface IProps {
  register: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number | readonly string[];
  defaultValue: string | number | readonly string[];
  placeholder: any;
  type: string;
}
export default function WebLongestHighlightUnderlineInput(props: IProps) {
  return (
    <Input
      type={props?.type}
      {...props?.register}
      onChange={props?.onChange}
      value={props?.value}
      defaultValue={props?.defaultValue}
      placeholder={
        props.placeholder ? props.placeholder : "인풋플레이스홀더 부탁해요~"
      }
    />
  );
}
