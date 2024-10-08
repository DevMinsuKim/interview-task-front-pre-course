"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { TitleH1 } from "../common/Title";
import { InputBase } from "../common/Input";
import { Tabs } from "../common/Tabs";
import Spacing from "../common/Spacing";
import { useAddTask } from "../../hooks/useAddTask";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f6f6f6;
`;

const Section = styled.section`
  width: 737px;
  height: auto;
  padding: 32px;
  border-radius: 24px;
  gap: 32px;
  background-color: #ffffff;
  box-shadow:
    0px 16px 32px 0px var(--blackAlpha100),
    0px 0px 6px 0px var(--blackAlpha50);
`;

export interface Tab {
  title: string;
  content: string[];
}

const initTabData: Tab[] = [
  { title: "All", content: [] },
  { title: "To Do", content: [] },
  { title: "Done", content: [] },
];

const TodoUserListPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { tabData, inputValue, setInputValue, addTask } =
    useAddTask(initTabData);

  return (
    <Container>
      <Spacing size={128} />

      <TitleH1>To Do List</TitleH1>

      <Spacing size={64} />

      <InputBase
        placeholder="할 일을 입력해 주세요"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={addTask}
      />

      <Spacing size={32} />

      <Section>
        <Tabs
          tabs={tabData}
          activeIndex={activeIndex}
          onTabClick={setActiveIndex}
        />
      </Section>
    </Container>
  );
};

export default TodoUserListPage;
