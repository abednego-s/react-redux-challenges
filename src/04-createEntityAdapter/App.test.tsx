import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, test } from "vitest";
import App from "./App";
import { store } from "./store";

describe("Book app", () => {
  test("add new book", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const textInput = screen.getByRole("textbox");
    const addBtn = screen.getByRole("button", { name: /add/i });
    fireEvent.change(textInput, {
      target: { value: "atomic habits" },
    });
    fireEvent.click(addBtn);
    expect(screen.getByText("atomic habits")).toBeInTheDocument();
  });

  test("update book", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const firstCheckbox = screen.getAllByRole(
      "checkbox"
    )[0] as HTMLInputElement;
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox.checked).toEqual(true);
  });

  test("remove book", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const firstItem = screen.getAllByRole("listitem")[0];
    const deleteBtn = within(firstItem).getByRole("button", {
      name: /delete/i,
    });
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("harry potter")).not.toBeInTheDocument();
  });
});
