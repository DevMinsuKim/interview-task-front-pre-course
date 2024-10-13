import { render, screen, fireEvent } from "@testing-library/react";
import TodoUserListPage from "./TodoUserListPage";

describe("TodoUserListPage", () => {
  it("To Do List 제목을 렌더링한다", () => {
    render(<TodoUserListPage />);
    expect(screen.getByText("To Do List")).toBeInTheDocument();
  });

  it("사용자가 할 일을 추가할 수 있다", async () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("빈 할 일을 추가하지 못하게 한다", () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
  });

  it("사용자가 할 일을 완료할 수 있다", () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const taskCheckButton = screen
      .getByText("Test Task")
      .closest("li")
      ?.querySelector("button");
    if (taskCheckButton) {
      fireEvent.click(taskCheckButton);
    }

    expect(screen.getByText("Test Task")).toHaveStyle("color: #868686");
  });

  it("사용자가 할 일을 삭제할 수 있다", () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const deleteButton = screen
      .getByText("Test Task")
      .closest("li")
      ?.querySelector('button[aria-label="delete"]');
    if (deleteButton) {
      fireEvent.click(deleteButton);
    }

    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
  });

  it("탭 간 전환이 올바르게 동작한다", () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const taskCheckButton = screen
      .getByText("Task 1")
      .closest("li")
      ?.querySelector("button");
    if (taskCheckButton) {
      fireEvent.click(taskCheckButton);
    }

    const todoTab = screen.getByText("To Do");
    fireEvent.click(todoTab);

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();

    expect(screen.getByText("Task 2")).toBeInTheDocument();

    const doneTab = screen.getByText("Done");
    fireEvent.click(doneTab);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });
});
