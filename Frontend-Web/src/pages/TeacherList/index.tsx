import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Select from "../../components/Select";

import { PageTeacherList, SearchTeachers, Main } from "./styles";
import Input from "../../components/Input";

const TeacherList = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <Select
            label="Materia"
            name="subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação física", label: "Educação física" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "História", label: "História" },
            ]}
          />
          <Select
            label="Dia da Semana"
            name="week_day"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input type="time" label="Hora" name="time" />
        </SearchTeachers>
      </PageHeader>

      <Main>
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
        <TeacherItem
          image="https://avatars1.githubusercontent.com/u/55673235?s=460&u=57e11369ff8c2f3032f935d35db0aa88a2e61a78&v=4"
          name="Paulo César Martins"
          subject="Quimica"
          title="Entusiasta das melhores tecnologias de quimica avançada."
          description="Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200 000 pessoas já passaram por
          uma das minhas explosões."
          value="80.00"
        />
      </Main>
    </PageTeacherList>
  );
};

export default TeacherList;
