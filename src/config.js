import { BrowserRouter, HashRouter} from "react-router-dom";
import {
  grommet,
} from "grommet";
import { deepMerge } from "grommet/utils";
const useHashUrl = true
const root = useHashUrl? '#/' : '/'
//More theme properties can be found on https://v2.grommet.io/globaltheme
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
const config = {
    theme,
    localStorageKey: {
      dark: "littlelemon-dark",
      bookForm: "littlelemon-bookForm",
      isLoggedIn: "littlelemon-isLoggedIn"
    },
    Router: useHashUrl? HashRouter : BrowserRouter,
    useHashUrl,
    routes: {
        home: `${root}`,
        about: `${root}about`,
        onlineOrder: `${root}online_order`,
        reservations: `${root}reservations`,
        successBooking: `${root}success_booking`
    },
    getHostUrl : (location) => {return location.protocol+ '//' + location.host}
  }

export default config;