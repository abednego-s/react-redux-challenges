import { describe, expect, test } from "vitest";
import { Provider } from "react-redux";
import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import App from "./App";
import { store } from "./store";
import { fakeUser } from "./utils";

describe("User detail", () => {
  test("load user detail successfully", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const fetchUserBtn = screen.getByTestId("fetchUserBtn1");
    fireEvent.click(fetchUserBtn);
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /user data:/i })
      ).not.toBeNull();
    });
    expect(screen.getByText(fakeUser.name)).not.toBeNull();
    expect(screen.getByText(fakeUser.email)).not.toBeNull();
  });

  test("handle error when load user detail", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const fetchUserBtn = screen.getByTestId("fetchUserBtn2");
    fireEvent.click(fetchUserBtn);
    await waitFor(() => {
      expect(screen.getByText("Error")).not.toBeNull();
    });
  });
});
