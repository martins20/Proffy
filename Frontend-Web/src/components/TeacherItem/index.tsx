import React from "react";
import WhatsappIcon from "../../assets/images/icons/whatsapp.svg";

import { TeacherItemContainer } from "./styles";

interface TeachetItemProps {
  image: string;
  name: string;
  subject: string;
  title: string;
  description: string;
  value: string;
}

const TeacherItem: React.FC<TeachetItemProps> = ({
  image,
  name,
  subject,
  title,
  description,
  value,
}) => {
  return (
    <TeacherItemContainer>
      <header>
        <img src={image} alt="Martins20" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{title}<br/><br/>{description}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {value}</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </TeacherItemContainer>
  );
};

export default TeacherItem;
