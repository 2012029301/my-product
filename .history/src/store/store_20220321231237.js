import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
export const nameState = atom({
  key: "nameState",
  default: "栗鼠怪",
});
