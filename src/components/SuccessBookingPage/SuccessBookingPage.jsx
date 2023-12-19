import React, { useState, useContext } from "react";
import '../../App.css';
import {
  Heading,
  Main,
  Paragraph,
} from "grommet";
import config from '../../config'
const lsk = config.localStorageKey

export const SuccessBookingPage = () => {
  const bookForm = JSON.parse(localStorage.getItem(lsk.bookForm))
  setTimeout(() => {
    localStorage.removeItem(lsk.bookForm)
  }, 2000)
  return (
    <Main pad="large" align="center">
      <Heading>Your booking has been placed</Heading>
      <Paragraph style={{textAlign:'center'}}>
        <p>Name:  {bookForm.name}</p> <br></br>
        <p>Date:  {bookForm.date.split('T')[0]}</p> <br></br>
        <p>Time:  {bookForm.time_slot + ':00'}</p> <br></br>
        <p>Number of guests:  {bookForm.number_of_guests}</p> <br></br>
        <h2>Thank you!</h2>
      </Paragraph>
    </Main>
  )
};

export default SuccessBookingPage