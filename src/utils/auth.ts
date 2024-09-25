import { Cookies } from "react-cookie";

export const cookie = new Cookies();

export const saveToken = (accessToken: string, refreshToken: string) => {
  cookie.set("access_token", accessToken);
};
