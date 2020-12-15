import React from "react";

import {makeStyles} from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material/views/landingPage.js";
import LandingBikeImage from "../../assets/img/products/bikes/foto1.jpg";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Norbikes"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={LandingBikeImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Desafia tus limites.</h1>
              <h4>
                Conocé el adn de norbikes, la pasión por el ciclismo nos hizo
                lo que hoy somos, buscando siempre lo mejor en el arte de las 2 ruedas...
                  Estamos migrando para darte un mejor servicio, contactate por whatsapp...
              </h4>
              <br />
            </GridItem>
              <GridItem>

              </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
