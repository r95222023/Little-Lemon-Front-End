import { render, fireEvent, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Test Register", () => {
    // render the App component
    render(
        <Footer />
    );

    const copyright = screen.getByText('Copyright Little Lemon')

    expect(copyright).toBeVisible();
});