import { render, fireEvent, screen } from "@testing-library/react";
import {
    Grommet,
} from "grommet";
import Homepage from "./Homepage";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
test("Test Homepage", () => {
    // render the App component
    render(
        <BrowserRouter>
            <Grommet>
                <AuthProvider>
                    <Homepage />
                </AuthProvider>
            </Grommet>
        </BrowserRouter>
    );

    const bookbtn = screen.getByTestId("bookbtn");
    // click the book btn
    fireEvent.click(bookbtn);
    const bookform = screen.getByTestId("bookform");
    expect(bookform).toBeVisible();
});