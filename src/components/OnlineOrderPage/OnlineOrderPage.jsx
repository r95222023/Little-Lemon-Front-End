import React, { useState, useContext } from "react";
import '../../App.css';
import { Link } from "react-router-dom";
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
  Main,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import { CardTemplate, AppBar, Banner, Footer } from "..";
import { deepMerge } from "grommet/utils";
import AuthContext from "../../context/AuthContext";

import construction from "../../assets/website_construction.jpg"
import booktable from "../../assets/restaurant_inside.jpg"
import openhour from "../../assets/head_chef.jpg"

export const OnlineOrderPage = () => (
  <Main pad="large">
    <Heading>Under construction</Heading>
    <Image
          margin="large"
          fit="cover"
          src={construction}
        />
  </Main>
);

export default OnlineOrderPage