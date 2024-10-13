"use client";

import React from "react";
import styled from "@emotion/styled";
import { TitleH1 } from "../common/Title";
import { Input } from "../common/Input";
import { Tabs } from "../common/Tabs";
import Spacing from "../common/Spacing";
import { Task, useTaskManager } from "../../hooks/useTaskManager";

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

const initTasks: Task[] = [];

const TodoUserListPage = () => {
  const { tasks, inputValue, setInputValue, addTask, deleteTask, doneTask } =
    useTaskManager(initTasks);

  const allTasks = tasks;
  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <Container>
      <Spacing size={128} />

      <TitleH1>To Do List</TitleH1>

      <Spacing size={64} />

      <Input
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
          tabs={[
            { title: "All", content: allTasks },
            { title: "To Do", content: todoTasks },
            { title: "Done", content: doneTasks },
          ]}
          initIndex={0}
          onTabDelete={deleteTask}
          onTabCheck={doneTask}
        />
      </Section>
    </Container>
  );
};

export default TodoUserListPage;
