import { useState } from "react";
import { Tab } from "../components/pages/TodoUserListPage";

export const useAddTask = (TabData: Tab[]) => {
  const [tabData, setTabData] = useState<Tab[]>(TabData);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTabData((prevTabData) => {
        const updatedTabData = [...prevTabData];

        updatedTabData[0] = {
          ...updatedTabData[0],
          content: [...updatedTabData[0].content, inputValue],
        };

        updatedTabData[1] = {
          ...updatedTabData[1],
          content: [...updatedTabData[1].content, inputValue],
        };

        return updatedTabData;
      });
      setInputValue("");
    }
  };

  return {
    tabData,
    inputValue,
    setInputValue,
    addTask,
  };
};
