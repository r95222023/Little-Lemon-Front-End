import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import {
    Grommet,
} from "grommet";
import { BrowserRouter } from "react-router-dom";
test("Test App", () => {
    // render the App component
    render(
        <BrowserRouter>
            <Grommet>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Grommet>
        </BrowserRouter>)

    // check if book btn exists and is clickable
    const bookbtn = screen.getByTestId("bookbtn");
    // click the book btn
    fireEvent.click(bookbtn);
    const bookform = screen.getByTestId("bookform");
    expect(bookform).toBeVisible();

    // check if footer has copyright
    const copyright = screen.getByText('Copyright Little Lemon')
    expect(copyright).toBeVisible();

    // check if login btn exists and is clickable
    const loginbtn = screen.getByTestId("loginbtn");
    // click the login btn
    fireEvent.click(loginbtn);
    const login = screen.getByTestId("login");
    expect(login).toBeVisible();
});