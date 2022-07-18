import Link from "next/link";
import * as S from "./MyPageInfo.styles";
import { IMyPageInfoUIProps } from "./MyPageInfo.types";

export default function MyPageInfoUI(props: IMyPageInfoUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ThemeBoxs>
          <Link href={"/mypage/mypick"}>
            <S.ThemeBox>
              <S.ThemeTitle>테마 찜</S.ThemeTitle>{" "}
              <S.ThemeSubTitle>
                하고 싶은 테마들을 미리 담아두고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="/img/mypage/heart.webp/" />
            </S.ThemeBox>
          </Link>
          <Link href={"/mypage/history"}>
            <S.ThemeBox>
              <S.ThemeTitle>내 탈출</S.ThemeTitle>
              <S.ThemeSubTitle>
                탈출한 테마 내역을 확인하고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="/img/mypage/escape.webp/" />
            </S.ThemeBox>
          </Link>
          <Link href={"/mypage"}>
            <S.ThemeBox>
              <S.ThemeTitle>내 후기</S.ThemeTitle>
              <S.ThemeSubTitle>
                탈출 후 내 후기를 적어 추억하고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="/img/mypage/board.webp/" />
            </S.ThemeBox>
          </Link>
        </S.ThemeBoxs>

        <S.RowBox>
          <>
            <S.InfoBox>
              <S.InfoTitleBox>
                <S.Label>최근 결제 내역</S.Label>
                <S.addButton>
                  <Link href={"/mypage/history"}>
                    <S.Contents>더보기</S.Contents>
                  </Link>
                </S.addButton>
              </S.InfoTitleBox>

              <S.TableWrapper>
                <S.TableTop />
                <S.TitleRow>
                  <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>적립 내역</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>전체 적립금</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
                </S.TitleRow>
                {props?.reservations?.map((el) => (
                  <S.Row key={el._id}>
                    <S.ColumnBasic>
                      {String(el._id).slice(-4).toUpperCase()}
                    </S.ColumnBasic>
                    <S.ColumnBasic id={el._id}>{el.title}</S.ColumnBasic>
                    <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                    <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
                  </S.Row>
                ))}
                <S.TableBottom />
              </S.TableWrapper>
            </S.InfoBox>
          </>
          <>
            <S.InfoBox>
              <S.InfoTitleBox>
                <S.Label>최근 적립 내역</S.Label>
                <S.addButton>
                  <Link href={"/mypage/reward"}>
                    <S.Contents>더보기</S.Contents>
                  </Link>
                </S.addButton>
              </S.InfoTitleBox>

              <S.TableTop />
              <S.TitleRow>
                <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>적립 내역</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>전체 적립금</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
              </S.TitleRow>
              {props?.payments?.map((el) => (
                <S.Row key={el._id}>
                  <S.ColumnBasic>
                    {String(el._id).slice(-4).toUpperCase()}
                  </S.ColumnBasic>
                  <S.ColumnBasic id={el._id}>{el.title}</S.ColumnBasic>
                  <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                  <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
                </S.Row>
              ))}
              <S.TableBottom />
            </S.InfoBox>
          </>
        </S.RowBox>
      </S.Wrapper>
    </S.Container>
  );
}
