import { useRef, useState } from "react";
import HomeUI from "./Home.presenter";

export default function Home() {
  const [value, setValue] = useState(4);
  const [isOpened1, setIsOpened1] = useState(false);
  const [isOpened2, setIsOpened2] = useState(false);
  const [isOpened3, setIsOpened3] = useState(false);

  const onClickOpenQuestion1 = () => {
    setIsOpened1((prev) => !prev);
  };
  const onClickOpenQuestion2 = () => {
    setIsOpened2((prev) => !prev);
  };
  const onClickOpenQuestion3 = () => {
    setIsOpened3((prev) => !prev);
  };
  const onClickCloseQuestion1 = () => {
    setIsOpened1((prev) => !prev);
  };
  const onClickCloseQuestion2 = () => {
    setIsOpened2((prev) => !prev);
  };
  const onClickCloseQuestion3 = () => {
    setIsOpened3((prev) => !prev);
  };
  return (
    <HomeUI
      value={value}
      setValue={setValue}
      isOpened1={isOpened1}
      isOpened2={isOpened2}
      isOpened3={isOpened3}
      onClickOpenQuestion1={onClickOpenQuestion1}
      onClickOpenQuestion2={onClickOpenQuestion2}
      onClickOpenQuestion3={onClickOpenQuestion3}
      onClickCloseQuestion1={onClickCloseQuestion1}
      onClickCloseQuestion2={onClickCloseQuestion2}
      onClickCloseQuestion3={onClickCloseQuestion3}
    />
  );
}
