import { useState, useEffect } from "react";
import * as S from "./ThemeList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IFetchGenres, IFetchThemes, IThemeListProps } from "./ThemeList.types";
import MobileCarousel from "./MobileCarousel";
import { v4 as uuidv4 } from "uuid";

const NAVIGATION_MENUS = [
  { name: "전체" },
  { name: "추리" },
  { name: "스릴러" },
  { name: "공포" },
  { name: "로맨스" },
  { name: "범죄" },
  { name: "코미디" },
  { name: "모험" },
  { name: "감성" },
  { name: "기타" },
];
export default function ThemeListUI(props: IThemeListProps) {
  const [windowSize, setWindowSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <S.Wrapper>
      <S.SearchBox>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "30px", color: "#DAD6E1" }}
        />
        <S.SearchInput placeholder="테마명을 입력하세요." />
      </S.SearchBox>
      <S.GenreList>
        <S.Genre onClick={props.onClickAllGenre} isPicked={props.selectAll}>
          전체
        </S.Genre>
        {props.fetchGenres?.fetchGenres.map((el: IFetchGenres, i: number) => (
          <S.Genre
            onClick={props.onClickGenre(el.id, i)}
            isPicked={props.myIndex[i]}
            key={el.id}
          >
            {el.name}
          </S.Genre>
        ))}
      </S.GenreList>
      {windowSize && (
        <div>
          <MobileCarousel data={props.data} />
          <MobileCarousel data={props.data} />
        </div>
      )}

      {!windowSize && (
        <div>
          <S.ThemeList>
            {props.data?.fetchThemes.map((el: IFetchThemes) => (
              <div key={uuidv4()} onClick={props.onClickTheme(el)}>
                <S.Flip>
                  <S.Card>
                    <S.Theme src={el.mainImg}>
                      <S.ImgGradient />
                      <S.Rank>
                        난이도
                        <S.Star disabled defaultValue={el.rank} />
                      </S.Rank>
                      <S.GenreTag>#{el?.genre.name}</S.GenreTag>
                    </S.Theme>
                    <S.ThemeBack src="/img/theme/card-back.png">
                      <S.ThemeTitle>{el.title}</S.ThemeTitle>
                      <S.ThemeInfo>
                        정원 1~2인
                        <br />
                        나이제한 {el.agelimit}
                        <br />
                        요금 20,000원
                      </S.ThemeInfo>
                    </S.ThemeBack>
                  </S.Card>
                </S.Flip>
              </div>
            ))}
          </S.ThemeList>
          <S.ButtonBox>
            <S.ShowMoreButton onClick={props.onClickMoreButton}>
              더보기
            </S.ShowMoreButton>
          </S.ButtonBox>
        </div>
      )}
    </S.Wrapper>
  );
}
