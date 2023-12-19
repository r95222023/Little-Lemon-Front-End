import React, { useState, useContext } from "react";
import '../../App.css';
import { Link } from "react-router-dom";
import { Moon, Sun } from "grommet-icons";
import {
  Anchor,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  grommet,
  Grommet,
  Header,
  Heading,
  Image,
  Menu,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import { CardTemplate, AppBar, Banner, Footer } from "..";
import { deepMerge } from "grommet/utils";
import AuthContext from "../../context/AuthContext";

import ourmenu from "../../assets/grill.jpg"
import booktable from "../../assets/restaurant_inside.jpg"
import restaurant from "../../assets/restaurant food.jpg"
import openhour from "../../assets/head_chef.jpg"

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
});

function Homepage() {
  //   let { dark } = useContext(AuthContext)
  return (
    <PageContent>
      <Banner />
      <PageHeader title="" />
      <Grid columns="medium" gap="large" pad={{ bottom: "medium" }}>
        <CardTemplate title={"Our Menu"} imgurl={ourmenu} content={""} footer={<div><p className="card-footer">Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.</p><a href="#">See our new menu</a></div>} />
        <CardTemplate title={"Book a table"} imgurl={booktable} content={""} footer={<div><p className="card-footer">Reserve your table for an Italian, Greek, and Turkish dining experience.</p><a href="/reservations">Book now for special offers!</a></div>} />
        <CardTemplate title={"Opening Hours"} imgurl={openhour} content={""} footer={<div><p className="card-footer">The Little Lemon Restaurant is open 7 days a week, except for public holidays.<br></br> Mon-Fri: 10am - 8pm, Sat-Sun: 10am - 9pm</p></div>} />
      </Grid>
      <Image></Image>
      <Paragraph size="xlarge" fill={true} margin="large">
        In the vibrant culinary landscape of Chicago, Little Lemon stands as a beacon of Mediterranean delight. The menu, a harmonious blend of Italian, Greek, and Turkish flavors, showcases 12-15 carefully crafted dishes that ebb and flow with the seasons.
      </Paragraph>
      <Box height="medium" width="large" fill="horizontal" >
        <Image
          margin="large"
          fit="cover"
          src={restaurant}
        />
      </Box>
      <Paragraph size="xlarge" fill={true} margin="large">
        Imagine savoring traditional recipes with a modern twist, each bite a testament to the cheft's culinary expertise and dedication to his Italian heritage.
      </Paragraph>
    </PageContent>
  );
}

export default Homepage;
