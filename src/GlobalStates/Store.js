import { atom } from "recoil";

export const $Users = atom({
  key: "$Users",
  default: [
    { email: "sohila@gmail.com", password: 1234 },
    { email: "Muhamed@gmail.com", password: 1234 },
    { email: "Ahmed@gmail.com", password: 1234 },
  ],
});

export const $JoinType = atom({
  key: "$JoinType",
  default: "",
});
