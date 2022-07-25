import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // userInfoのstateの定義：初期値null
  const [userInfo, setUserInfo] = useState(null);

  // const contextName = "じゃけえ";
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
