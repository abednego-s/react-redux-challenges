import { describe, expect, test } from "vitest";
import { store } from "./store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";

describe("lazy load slices", () => {
  test("initially, `posts` should be undefined", () => {
    // @ts-expect-error
    expect(store.getState().posts).toBeUndefined();
  });

  describe("after clicking the button, `posts` should become available", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button"));
    // @ts-expect-error
    expect(store.getState().posts).toBeDefined();
  });
});
