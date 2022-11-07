import { useEffect } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Pages, paths } from "../routes/constants";
import styled from "styled-components";
import { BlockContainer, Button } from "../components/UI-kit";

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "Financial App | Page not found";
  }, []);

  const handleRedirHomeClick = () => {
    router.push(paths[Pages.HOME]).catch((error) => console.error(error));
  };

  return (
    <BlockContainer>
      <Title>Ошибка 404 | Страница не найдена!</Title>
      <StyledBtn onClick={handleRedirHomeClick}>
        На главную
        <HomeIcon />
      </StyledBtn>
    </BlockContainer>
  );
};

const HomeIcon = styled(HomeOutlined)`
  margin-left: 7px;
  @media screen and (max-width: 991px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 3px;
  }
  @media screen and (max-width: 575px) {
    margin-left: 2px;
  }
`;

const StyledBtn = styled(Button)`
  margin-top: 5px;
`;

const Title = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 991px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 575px) {
    font-size: 1rem;
  }
`;

export default NotFound;
