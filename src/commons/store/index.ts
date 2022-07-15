import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const ReservationInfoState = atom({
  key: "ReservationInfoState",
  default: {
    themeId: "",
    cafeId: "",
    reservation_date: "",
    memo: "",
    people_number: 0,
    totalPrice: 0,
    usePoint: 0,
    themeMenuId: "",
  },
});
