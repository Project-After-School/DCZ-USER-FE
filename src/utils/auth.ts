import { Cookies } from "react-cookie";

export const cookie = new Cookies();

export const saveToken = (accessToken: string) => {
  cookie.set("access_token", accessToken);
};
