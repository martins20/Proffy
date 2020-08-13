import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/images/logo.svg";
import BackIcon from "../../assets/images/icons/back.svg";

import { Header, Topbarcontainer, HeaderContent } from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Header>
      <Topbarcontainer>
        <Link to="/">
          <img src={BackIcon} alt="Voltar" />
        </Link>

        <img src={LogoImg} alt="Proffy" />
      </Topbarcontainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
