import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "../../../public/assets/icons/Close.svg";
import Spacing from "./Spacing";

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

const TabPanelButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-radius: 100%;
  border-color: #e5e5e5;
`;

const TabPanelText = styled.p`
  font-size: 20px;
  line-height: 28px;
  flex-grow: 1;
`;

const TabPanelImage = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  color: #b9b9b9;
  cursor: pointer;
`;

interface TabsProps {
  tabs: { title: string; content: string[] }[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export const Tabs = ({ tabs, activeIndex, onTabClick }: TabsProps) => {
  return (
    <Container>
      <TabContainer>
        {tabs.map((tab, index) => (
          <li key={tab.title}>
            <TabButton
              active={index === activeIndex}
              onClick={() => onTabClick(index)}
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
            <TabPanelButton />
            <TabPanelText>{content}</TabPanelText>
            <TabPanelImage />
          </TabPanelRow>
        ))}
      </TabPanelContainer>
    </Container>
  );
};
