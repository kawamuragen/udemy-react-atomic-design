import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// BaseButtonに色以外の機能を集約した場合の書き方
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
