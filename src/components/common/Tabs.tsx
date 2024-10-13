import React, { useState } from "react";
import styled from "@emotion/styled";
import CheckIcon from "../../../public/assets/icons/Check.svg";
import CloseIcon from "../../../public/assets/icons/Close.svg";
import Spacing from "./Spacing";
import { Task } from "../../hooks/useTaskManager";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabContainer = styled.ul`
  display: flex;
  align-self: center;
`;

const TabButton = styled.button<{ active: boolean }>`
  color: ${({ active }) => (active ? "#2182F3" : "#000000")};
  background-color: ${({ active }) => (active ? "#EBF4FF" : "transparent")};
  width: 108px;
  height: auto;
  min-height: 40px;
  padding: 8px 32px 8px 32px;
  gap: 8px;
  border-radius: 12px;
  font-weight: 600;
`;

const Counter = styled.p`
  width: 100%;
  height: auto;
  min-height: 60px;
  font-size: 20px;
  line-height: 28px;
  padding: 16px;
  gap: 4px;
`;

const TabPanelContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TabPanelRow = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: auto;
  min-height: 96px;
  padding: 32px 16px 32px 16px;
`;

const TabPanelCheckBtn = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#2182F3" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-radius: 100%;
  border-color: #e5e5e5;
`;

const TabPanelCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #ffffff;
`;

const TabPanelText = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? "#868686" : "#000000")};
  font-size: 20px;
  line-height: 28px;
  flex-grow: 1;
`;

const TabPanelCloseBtn = styled.button`
  width: 24px;
  height: 24px;
  color: #b9b9b9;
`;

interface TabsProps {
  tabs: { title: string; content: Task[] }[];
  initIndex: number;
  onTabDelete: (id: string) => void;
  onTabCheck: (id: string) => void;
}

export const Tabs = ({
  tabs,
  initIndex,
  onTabDelete,
  onTabCheck,
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(initIndex || 0);

  return (
    <Container>
      <TabContainer>
        {tabs.map((tab, index) => (
          <li key={tab.title}>
            <TabButton
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </TabButton>
          </li>
        ))}
      </TabContainer>

      <Spacing size={32} />

      <Counter>총 {tabs[activeIndex].content.length}개</Counter>

      <TabPanelContainer>
        {tabs[activeIndex].content.map((content, index) => (
          <TabPanelRow key={index}>
            <TabPanelCheckBtn
              onClick={() => onTabCheck(content.id)}
              active={content.status === "Done"}
            >
              {content.status === "Done" && (
                <TabPanelCheckWrapper>
                  <CheckIcon />
                </TabPanelCheckWrapper>
              )}
            </TabPanelCheckBtn>
            <TabPanelText active={content.status === "Done"}>
              {content.content}
            </TabPanelText>
            <TabPanelCloseBtn
              onClick={() => onTabDelete(content.id)}
              aria-label="delete"
            >
              <CloseIcon />
            </TabPanelCloseBtn>
          </TabPanelRow>
        ))}
      </TabPanelContainer>
    </Container>
  );
};
