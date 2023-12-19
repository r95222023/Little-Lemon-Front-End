import { render, fireEvent, screen } from "@testing-library/react";
import {
    Grommet,
} from "grommet";
import OnlineOrderPage from "./OnlineOrderPage";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
test("Test Register", () => {
    // render the App component
    render(
        <BrowserRouter>
            <Grommet>
                <AuthProvider>
                    <OnlineOrderPage />
                </AuthProvider>
            </Grommet>
        </BrowserRouter>
    );

    const title = screen.getByText('Under construction')

    expect(title).toBeVisible();
});