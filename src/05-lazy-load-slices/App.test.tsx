import { describe, expect, test } from "vitest";
import { store } from "./store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";

describe("combine slices", () => {
  test("initially, `posts` should be undefined", () => {
    // @ts-expect-error
    expect(store.getState().posts).toBeUndefined();
  });

  describe("when 'Load Data' button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /load data/i }));

    test("`postSlice` should become available", () => {
      const state = store.getState();
      // @ts-expect-error
      expect(state.posts).toBeDefined();
      // @ts-expect-error
      expect(state.posts).toEqual([
        { id: 1, title: "post 1" },
        { id: 2, title: "post 2" },
      ]);
    });

    test("post data displayed to the screen", () => {
      expect(screen.getByText("post 1")).toBeInTheDocument();
      expect(screen.getByText("post 2")).toBeInTheDocument();
    });
  });
});
