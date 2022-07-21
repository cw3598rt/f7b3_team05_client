import { useState } from "react";
import CommentAnswerEditUI from "./CommentAnswerEdit.presenter";
import { ICommentAnswerEditProps } from "./CommentAnswerEdit.types";

export default function CommentAnswerEdit(props: ICommentAnswerEditProps) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [answerEditId, setAnswerEditId] = useState("");

  const onClickEdit = (event: any) => {
    setIsAnswerEdit((prev) => !prev);
    setAnswerEditId(event.target.id);
  };

  return (
    <CommentAnswerEditUI
      answerEditId={answerEditId}
      el={props.el}
      answerData={props.answerData}
      isAnswerEdit={isAnswerEdit}
      refetch={props.refetch}
      setIsAnswerEdit={setIsAnswerEdit}
      setAnswerEditId={setAnswerEditId}
      onClickDelete={props.onClickDelete}
      onClickEdit={onClickEdit}
    />
  );
}
