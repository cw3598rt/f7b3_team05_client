import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./CommunityCommentWrite.styles";
import { ICommunityCommentWriteUIProps } from "./CommunityCommentWrite.types";

export default function CommunityCommentWriteUI(
  props: ICommunityCommentWriteUIProps
) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickComment)}>
        <S.CommentWriteBox>
          <S.Name>{props.userInfo?.name}</S.Name>
          <S.CommentInput
            placeholder="댓글을 입력하세요"
            {...props.register("content")}
          />
          <WebSmallPurpleButton title="등록하기"></WebSmallPurpleButton>
        </S.CommentWriteBox>
      </form>
    </S.Wrapper>
  );
}
