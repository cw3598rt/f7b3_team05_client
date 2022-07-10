import { Modal } from "antd";
import Link from "next/link";
import { Fragment } from "react";
import PhoneNumberEdit from "../../../units/mypage/phonenumberedit";
import * as S from "./LayoutSidebar.styleds";

const NAVIGATION_MENUS = [
  { name: "테마 찜목록", page: "/mypage/mypick" },
  { name: "최근 예약내역", page: "/mypage/history" },
  { name: "최근 적립내역", page: "/mypage/reward" },
  // { name: "내가 쓴 후기", page: "/mypage" },
  // { name: "내가 쓴 게시물", page: "/mypage" },
  { name: "회원정보 수정", page: "/mypage/useredit" },
  { name: "비밀번호 변경", page: "/mypage/pwedit" },
];

export default function LayoutSideBarUI(props) {
  return (
    <S.Container>
      <S.UserInfoBox>
        <S.UserNameBox>
          <S.UserData>홍길동님</S.UserData>
          <span>안녕하세요!</span>
        </S.UserNameBox>

        <S.MenuBox>
          {NAVIGATION_MENUS.map((el) => (
            <Fragment key={el.page}>
              <Link href={el.page}>
                <S.MenuItem
                  id={el.page}
                  onClick={props.onClickMenu}
                  isActive={el.page === props.activedMenu}
                >
                  {el.name}
                </S.MenuItem>
              </Link>
            </Fragment>
          ))}
          <S.LogoutBox>
            <S.LogoutIcon />
            <S.Logout onClick={props.onClickReset}>로그아웃</S.Logout>
          </S.LogoutBox>
        </S.MenuBox>
      </S.UserInfoBox>
    </S.Container>
  );
}
