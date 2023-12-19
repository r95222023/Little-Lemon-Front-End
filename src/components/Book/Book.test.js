import { render, fireEvent, screen } from "@testing-library/react";
import Book from "./Book";
import {AuthProvider} from "../../context/AuthContext";
test("Test Book", () => {
  // render the App component
  render(
    <AuthProvider>
      <Book />
    </AuthProvider>);

  // find the booking form
  const bookbtn = screen.getByTestId("bookbtn");
   // click the close btn
   fireEvent.click(bookbtn);
  const bookform = screen.getByTestId("bookform");
  expect(bookform).toBeVisible();

  const closebtn = screen.getByTestId("closebtn");
  fireEvent.click(closebtn);
  // test assumption
  expect(bookform).not.toBeVisible();

});