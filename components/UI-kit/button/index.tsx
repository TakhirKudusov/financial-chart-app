import { memo, ReactNode } from "react";
import styled from "styled-components";
import { ButtonType, FontWeight } from "./enums";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  buttonType?: ButtonType;
  fontWeight?: FontWeight;
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  buttonType = ButtonType.MEDIUM,
  fontWeight = FontWeight.THIN,
}) => {
  return (
    <Component
      fontWeight={fontWeight}
      buttonType={buttonType}
      onClick={onClick}
      className={className}
    >
      {children}
    </Component>
  );
};

const Component = styled.button<{
  buttonType: ButtonType;
  fontWeight: FontWeight;
}>`
  background-color: #00a6fa;
  border-radius: 10em;
  color: black;
  font-weight: ${({ fontWeight }) =>
    fontWeight === FontWeight.THIN ? "600" : ""};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  height: ${({ buttonType }) =>
    buttonType === ButtonType.MEDIUM ? "45px" : ""};
  width: ${({ buttonType }) =>
    buttonType === ButtonType.MEDIUM ? "175px" : ""};
  transition: 0.3s all;
  &:hover {
    background-color: #59c5ff;
    box-shadow: 0 0.5em 15px -7px #005172;
  }
  @media screen and (max-width: 991px) {
    font-size: 1rem;
    height: ${({ buttonType }) =>
      buttonType === ButtonType.MEDIUM ? "40px" : ""};
    width: ${({ buttonType }) =>
      buttonType === ButtonType.MEDIUM ? "150px" : ""};
  }
  @media screen and (max-width: 767px) {
    font-size: 0.85rem;
    height: ${({ buttonType }) =>
      buttonType === ButtonType.MEDIUM ? "25px" : ""};
    width: ${({ buttonType }) =>
      buttonType === ButtonType.MEDIUM ? "115px" : ""};
  }
  @media screen and (max-width: 575px) {
    font-size: 0.8rem;
    height: ${({ buttonType }) =>
      buttonType === ButtonType.MEDIUM ? "20px" : ""};
    width: ${({ buttonType }) =>
      buttonType === ButtonType.MEDIUM ? "110px" : ""};
  }
`;

export default memo(Button);
