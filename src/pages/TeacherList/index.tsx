import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import { PageTeacherList, SearchTeachers, InputBlock, Main } from "./styles";

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

      <Main>
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title='Entusiasta das melhores tecnologias de quimica avançada.'
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value='80.00'
        />
      </Main>
    </PageTeacherList>
  );
};

export default TeacherList;
