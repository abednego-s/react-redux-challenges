import { describe, expect, test } from "vitest";
import { Provider } from "react-redux";
import { fireEvent, screen, render, within } from "@testing-library/react";
import App from "./App";
import { store } from "./store";

describe("todo app", () => {
  test("add new todo", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const textInput = screen.getByRole("textbox", {
      name: /add new todo:/i,
    });
    const addTodoBtn = screen.getByRole("button", {
      name: /add todo/i,
    });
    const todoList = screen.getByRole("list");
    fireEvent.change(textInput, { target: { value: "meeting" } });
    fireEvent.click(addTodoBtn);
    const withinTodoList = within(todoList);
    expect(withinTodoList.queryByText("meeting")).not.toBeNull();
  });

  test("toggle todo", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const firstTodoCheckbox = screen.getAllByRole(
      "checkbox"
    )[0] as HTMLInputElement;

    fireEvent.click(firstTodoCheckbox);
    expect(firstTodoCheckbox.checked).toEqual(true);
    fireEvent.click(firstTodoCheckbox);
    expect(firstTodoCheckbox.checked).toEqual(false);
  });

  test("remove todo", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const firstTodoDeleteBtn = screen.getAllByRole("button", {
      name: /delete/i,
    })[0];

    const todoList = screen.getByRole("list");
    fireEvent.click(firstTodoDeleteBtn);
    const withinTodoList = within(todoList);
    expect(withinTodoList.queryByText("meeting")).toBeNull();
  });
});
