import React from "react";

import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

import StudyIcon from "../../assets/images/icons/study.svg";
import GiveClassesIcon from "../../assets/images/icons/give-classes.svg";
import PurpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import {
  PageLanding,
  LogoContainer,
  PageLandingContent,
  HeroImage,
  ButtonsContainer,
  TotalConnections
} from "./styles";

const Landing = () => {
  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <HeroImage src={LandingImg} alt="Plataforma de estudos" />
        <ButtonsContainer>
          <a  href="#">
              <img src={StudyIcon} alt="estudar"/>
              Estudar
          </a>
          <a  href="#">
              <img src={GiveClassesIcon} alt="Dar aulas"/>
              Dar aulas
          </a>
        </ButtonsContainer>
        <TotalConnections>
            Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
