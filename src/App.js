import React, { useContext } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  grommet,
  Grommet,
  Page,
} from "grommet";
import { AppBar, Footer, Homepage, Aboutpage, SuccessBookingPage, OnlineOrderPage, ReservationsPage } from "./components";
import { deepMerge } from "grommet/utils";
import AuthContext from "./context/AuthContext";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#495E57",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
});

export const config = {
  localStorageKey: {
    dark: "littlelemon-dark",
    bookForm: "littlelemon-bookForm"
  }
}

function App() {
  let { dark } = useContext(AuthContext)
  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar></AppBar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Little-Lemon-Front-End" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/success_booking" element={<SuccessBookingPage />} />
            <Route path="/online_order" element={<OnlineOrderPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Routes>
        <Footer />
      </Page>
    </Grommet>
  );
}

export default App;
