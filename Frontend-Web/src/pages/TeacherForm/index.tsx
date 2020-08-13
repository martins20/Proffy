import React, { useState } from "react";

import { PageTeacherForm, Main, ScheduleItem } from "./styles";

import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/TextArea";
import Input from "../../components/Input";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

interface SheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm = () => {
  const [scheduleItems, setSheduleItems] = useState<SheduleItem[]>([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  const handleAddNewSheduleItem = () => {
    setSheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  };

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <Main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="whatsapp" name="whatsapp" />
          <Textarea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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
          <Input label="Custo da sua hora aula" name="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis{" "}
            <button type="button" onClick={handleAddNewSheduleItem}>
              + Novo horario
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => (
            <ScheduleItem key={scheduleItem.week_day}>
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

              <Input label="Das" name="from" type="time" />
              <Input label="Até" name="to" type="time" />
            </ScheduleItem>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante ! <br />
            preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </Main>
    </PageTeacherForm>
  );
};

export default TeacherForm;
