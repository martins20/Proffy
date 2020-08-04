import React from "react";

import { PageTeacherList, SearchTeachers, InputBlock } from "./styles";
import PageHeader from "../../components/PageHeader";

const TeacherList = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </InputBlock>
        </SearchTeachers>
      </PageHeader>
    </PageTeacherList>
  );
};

export default TeacherList;
