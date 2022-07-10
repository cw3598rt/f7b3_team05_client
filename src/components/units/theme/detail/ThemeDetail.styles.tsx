import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  padding: 30px 0px;

  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ThemeInfoWrapper = styled.section`
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;
export const ThemeLeftBox = styled.div``;

export const ThemeImg = styled.img`
  width: 370px;
  height: 560px;
`;
export const ThemeRightBox = styled.div`
  min-width: 600px;
  max-width: 650px;
  max-height: 560px;
  padding: 5px 20px;
  float: right;
  @media ${breakPoints.mobile} {
    min-width: fit-content;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 100%;
  }
`;

export const GenreTag = styled.div`
  width: 140px;
  height: 45px;
  border-radius: 8px;
  background-color: #492396b0;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ThemeTitle = styled.h2`
  color: #26282c;
  font-size: 28px;
`;

export const ThemeContents = styled.h5`
  padding: 10px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  font-size: 22px;
  /* white-space: pre-wrap; */
`;

export const RankTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 5px;
  }
`;

export const ThemeRank = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;
export const ThemeTime = styled.div``;
export const ChargeBox = styled.div``;
export const ThemeCharge = styled.div`
  @media ${breakPoints.mobile} {
    padding: 10px 0px;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ReservationButton = styled.button`
  width: 370px;
  height: 56px;
  border-radius: 8px;
  font-weight: 700;
  border: transparent;
  background-color: #4a00e0;
  color: white;

  :hover {
    cursor: pointer;
    background: linear-gradient(90deg, #7c21e1 0%, #4a00e0 100%);
  }
  @media ${breakPoints.mobile} {
  }
`;
