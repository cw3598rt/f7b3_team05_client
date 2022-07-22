import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Rate } from "antd";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import RunCircleOutlinedIcon from "@mui/icons-material/RunCircleOutlined";

export const ImageInfoBox = styled.main`
  width: 100%;
  display: flex;
  gap: 1em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ImageBox = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 27em;
  height: 35em;
  border-radius: 15px;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);

  @media ${breakPoints.tablet} {
    width: 18em;
  }

  @media ${breakPoints.mobile} {
    width: 13em;
    height: 17em;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border-bottom: 1px solid darkgray;
  width: 100%;
  height: 35em;
  gap: 1em;

  & h2 {
    font-style: oblique;

    @media ${breakPoints.mobile} {
      font-size: 0.9em;
    }
  }

  @media ${breakPoints.mobile} {
    height: 100%;
  }
`;

export const ThemeTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
  }

  & h1 {
    font-size: 2.5em;
    font-family: "GowunDodum-Regular";
    margin: 0;

    @media ${breakPoints.tablet} {
      font-size: 1.5em;
    }
    @media ${breakPoints.mobile} {
      font-size: 1.3em;
      width: auto;
    }
  }
`;

export const ThemeCafe = styled.span`
  color: darkgray;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const LimitBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
`;

export const ContentBox = styled.div`
  border: 1px solid gray;
  width: 10em;
  height: 7em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;

  & h3 {
    margin: 0;
  }

  @media ${breakPoints.tablet} {
    width: 8em;
  }

  @media ${breakPoints.mobile} {
    width: 6em;
    height: 7em;
  }
`;

export const RunIcon = styled(RunCircleOutlinedIcon)``;
export const TimeIcon = styled(WatchLaterOutlinedIcon)``;
export const PeopleIcon = styled(PeopleAltOutlinedIcon)``;

export const TimeBoxes = styled.div`
  display: flex;
  padding-top: 0.6em;
  width: 100%;

  & h3 {
    font-size: 1.5em;
  }

  @media ${breakPoints.mobile} {
    & h3 {
      font-size: 1.1em;
    }
    display: flex;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 87%;

  @media ${breakPoints.tablet} {
    width: 70%;
  }
`;
export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 6em;
`;

export const RateBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;

  & span {
    font-size: 1.3em;
    margin-right: 0.2em;
  }

  @media ${breakPoints.mobile} {
    & span {
      font-size: 1em;
      margin-right: 0.2em;
    }
  }
`;

export const Star = styled(Rate)``;
