"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { TitleH1 } from "../common/Title";
import { InputBase } from "../common/Input";
import { Tabs } from "../common/Tabs";
import Spacing from "../common/Spacing";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

interface Props {}

const TodoUserListPage = ({}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabData, setTabData] = useState([
    {
      title: "All",
      content: ["1", "2", "3", "4"],
    },
    { title: "To Do", content: ["test2", "테스트 진행 중..."] },
    { title: "Done", content: ["test3"] },
  ]);

  return (
    <Container>
      <Spacing size={128} />
      <TitleH1>To Do List</TitleH1>
      <Spacing size={64} />
      <InputBase placeholder="할 일을 입력해 주세요" />
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
