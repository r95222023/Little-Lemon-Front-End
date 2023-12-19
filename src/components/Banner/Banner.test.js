import { render, fireEvent, screen } from "@testing-library/react";
import Banner from "./Banner";
import { AuthProvider } from "../../context/AuthContext";
test("Test Banner", () => {
    // render the App component
    render(
        <AuthProvider>
            <Banner />
        </AuthProvider>);

    const bookbtn = screen.getByTestId("bookbtn");
    // click the book btn
    fireEvent.click(bookbtn);
    const bookform = screen.getByTestId("bookform");
    expect(bookform).toBeVisible();
});