import { createContext, useState } from "react";
import { RecoilRoot } from "recoil";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // userInfoのstateの定義：初期値null
  // この値を使っているコンポーネントがすべてレンダリングされてしまう。
  const [userInfo, setUserInfo] = useState(null);

  // const contextName = "じゃけえ";
  return (
    <RecoilRoot>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserContext.Provider>
    </RecoilRoot>
  );
};
