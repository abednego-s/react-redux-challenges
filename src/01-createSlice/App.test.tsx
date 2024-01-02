import { describe, expect, test } from "vitest";
import { Provider } from "react-redux";
import { fireEvent, screen, render } from "@testing-library/react";
import App from "./App";
import { store } from "./store";

describe("counter app", () => {
  test("increment counter", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const incrementBtn = screen.getByTestId("incrementBtn");
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toEqual("3");
  });

  test("decrement counter", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const decrementBtn = screen.getByRole("button", {
      name: /decrement/i,
    });
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toEqual("0");
  });

  test("increment by amount", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputText = screen.getByRole("textbox", {
      name: /amount:/i,
    });
    const incrementByAmountBtn = screen.getByTestId("incrementByAmountBtn");
    fireEvent.change(inputText, { target: { value: 12 } });
    fireEvent.click(incrementByAmountBtn);
    fireEvent.click(incrementByAmountBtn);
    const counter = screen.getByTestId("counter");
    expect(counter.textContent).toEqual("24");
  });
});
