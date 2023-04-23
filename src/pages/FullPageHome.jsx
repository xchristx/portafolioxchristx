import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Box, capitalize, Container, Typography } from "@mui/material";

import { Home } from "../components/Home";
import { Works } from "../components/Works";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/AboutBackGroud.scss";
import hsImg from "../assets/banner.png";
import osImg from "../assets/orionsoft.png";
import yvyImg from "../assets/yvy.png";

const anchors = ["home", "proyects", "aboutMe", "contact"];

export const FullPageHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      navigate("/#home");
    }
  }, [location.hash]);

  return (
    <div id="fullpaje">
      <ReactFullpage
        //fullpage options
        gplv3-license
        scrollingSpeed={500} /* Options here */
        anchors={anchors}
        scrollOverflow
        horizontal
        navigation
        css3
        autoScrolling
        fitToSection
        fitToSectionDelay={300}
        easing="easeInOutCubic"
        easingcss3="ease-out"
        menu="#menu-appbar"
        navigationTooltips={anchors.map((e) => capitalize(e))}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <Box sx={{ width: "100%" }} className="section">
                  <Home />
                </Box>

                <Box className="section">
                  <div className="stars twinkling"></div>
                  <Box className="slide">
                    <Works
                      hashLocation={"#proyects"}
                      title="HEALTHY SHOP"
                      subtitle="e-commerce"
                      link="https://healthy.dkndrd.com/catalogo"
                      img={hsImg}
                    />
                  </Box>
                  <Box className="slide">
                    <Works
                      hashLocation={"#proyects/1"}
                      title="PLAN 21 YVY-APP"
                      subtitle="dashboard"
                      link="https://yvy-app-dev.s3-web.us-south.cloud-object-storage.appdomain.cloud/"
                      img={yvyImg}
                      oFit={true}
                    />
                  </Box>
                  <Box className="slide">
                    <Works
                      hashLocation={"#proyects/2"}
                      title="ORION SOFT"
                      subtitle="dashboard"
                      link="https://orion-soft.netlify.app/"
                      img={osImg}
                    />
                  </Box>
                </Box>
                <Box className="section">
                  <AboutMe />
                </Box>

                <Box className="section">
                  <Contact />
                </Box>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </div>
  );
};
