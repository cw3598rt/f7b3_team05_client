import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CommunityCommentWriteUI from "./CommunityCommentWrite.presenter";
import {
  CREATE_BOARD_REVIEW,
  FETCH_BOARD_REVIEW,
} from "./CommunityCommentWrite.queries";
import Swal from "sweetalert2";

export default function CommunityCommentWrite() {
  const router = useRouter();

  const [createBoardreview] = useMutation(CREATE_BOARD_REVIEW);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onClickComment = async (data) => {
    // console.log(data);
    try {
      const result = await createBoardreview({
        variables: {
          createBoardreviewInput: {
            content: data.content,
            board: router.query.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_REVIEW,
            variables: { id: router.query.id },
          },
        ],
      });
      reset();
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "등록이 완료되었습니다!",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommunityCommentWriteUI
      onClickComment={onClickComment}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}