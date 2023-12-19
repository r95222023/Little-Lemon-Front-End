import { render, fireEvent, screen } from "@testing-library/react";
import {
  Grommet,
} from "grommet";
import AppBar from "./AppBar";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
test("Test AppBar", () => {
  // render the App component
  render(
    <BrowserRouter>
      <Grommet>
        <AuthProvider>
          <AppBar />
        </AuthProvider>
      </Grommet>
    </BrowserRouter>
  );

  const loginbtn = screen.getByTestId("loginbtn");
  // click the login btn
  fireEvent.click(loginbtn);
  const login = screen.getByTestId("login");
  expect(login).toBeVisible();
});