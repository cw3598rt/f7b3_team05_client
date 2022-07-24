import { gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import Swal from "sweetalert2";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";
const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      email
      phone
      name
      point
    }
  }
`;
const FETCH_SOCIAL_USER_LOGGED_IN = gql`
  query fetchSocialUserLoggedIn {
    fetchSocialUserLoggedIn {
      id
      email
      phone
    }
  }
`;
export default function useAuth() {
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const client = useApolloClient();
  useEffect(() => {
    if (!accessToken) {
      Auth.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          Swal.fire({
            title: "로그인을 먼저 해주세요.",
            icon: "warning",
            confirmButtonText: "확인",
            confirmButtonColor: "#4a00e0e7",
          });
          router.push("/login");
        }
        client
          .query({
            query: FETCH_USER_LOGGEDIN,
            context: {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            },
          })
          .catch(() => {
            client
              .query({
                query: FETCH_SOCIAL_USER_LOGGED_IN,
                context: {
                  headers: {
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                },
              })
              .catch(() => {
                Swal.fire({
                  title: "로그인을 먼저 해주세요.",
                  icon: "warning",
                  confirmButtonText: "확인",
                  confirmButtonColor: "#4a00e0e7",
                });
                router.push("/login");
              });
          });
      });
    }
  }, []);
}
