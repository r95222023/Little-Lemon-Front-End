import { render, fireEvent, screen } from "@testing-library/react";
import {
    Grommet,
} from "grommet";
import Register from "./Register";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
test("Test Register", () => {
    // render the App component
    render(
        <BrowserRouter>
            <Grommet>
                <AuthProvider>
                    <Register />
                </AuthProvider>
            </Grommet>
        </BrowserRouter>
    );

    const creatbtn = screen.getByText('Create an account')
    // click the create account btn
    fireEvent.click(creatbtn);
    const register = screen.getByText('Username')
    expect(register).toBeVisible();
});