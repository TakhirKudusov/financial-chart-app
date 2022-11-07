import styled from "styled-components";
import {memo, ReactNode} from "react";

type Props = {
    children: ReactNode,
    className?: string
}

const BlockContainer: React.FC<Props> = ({children, className}) => {
    return <Wrapper className={className}>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px 12px 25px;
  background-color: #1c1c23;
  margin: 20px 20px auto 20px;
  border-radius: 20px;
  @media screen and (max-width: 991px) {
    padding: 7px 20px 10px 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 7px 15px 7px 15px;
    margin: 20px 15px auto 15px;
  }
  @media screen and (max-width: 575px) {
    padding: 5px 10px 5px 10px;
    margin: 15px 10px auto 10px;
  }
`



export default memo(BlockContainer)