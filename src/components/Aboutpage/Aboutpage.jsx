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

import owners from "../../assets/mario-and-adrian.jpg"
import booktable from "../../assets/restaurant_inside.jpg"
import openhour from "../../assets/head_chef.jpg"

function Aboutpage() {
  //   let { dark } = useContext(AuthContext)
  return (
    <PageContent>
      <PageHeader size="small" title="About Us" />
      <Grid
        columns={{
          count: 2,
          size: 'auto',
        }}
        gap="large"
      >
        <Box><div class="column">
          <p>
            Based in Chicago, Illinois, Little Lemon is a family owned
            Mediterranean restaurant, focused on traditional recipes served with a
            modern twist.
          </p>
          <p>
            The chefs draw inspiration from Italian, Greek, and Turkish culture
            and have a menu of 12-15 items that they rotate seasonally.
          </p>

          <p>
            The restaurant has a rustic and relaxed atmosphere with moderate
            prices, making it a popular place for a meal any time of the day.
          </p>

          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
          </p>

          <p>
            To craft the menu, Mario relies on family recipes and his experience
            as a chef in Italy.
          </p>

          <p>
            Adrian does all the marketing for the restaurant and led the effort to
            expand the menu beyond classic Italian to incorporate additional
            cuisines from the mediterranean region.
          </p>
        </div>
        </Box>
        <Box>
          <div className="column">
            <Image
              fill="horizontal"
              src={owners}
              alt="Mario and Adrian"
            />
            <p style={{margin:"0px"}}>Little Lemon owners Mario and Adrian.</p>
          </div>
        </Box>
      </Grid>
    </PageContent>
  );
}

export default Aboutpage;
