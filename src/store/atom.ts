import { IUser } from "@src/common/types";
import { atom } from "recoil";

const userState = atom<IUser | null>({
  key: "userState",
  default: null,
});
