import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Box, capitalize, Container, Typography } from "@mui/material";

import { Home } from "../components/Home";
import { Works } from "../components/Works";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { useLocation, useNavigate } from "react-router-dom";

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
        scrollingSpeed={700} /* Options here */
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

                <Box className="section" component="div">
                  <Box className="slide">
                    <Works />
                  </Box>

                  <Box className="slide">
                    <Typography
                      sx={{ zIndex: 400, fontSize: 50, color: "red" }}
                    >
                      asdasfasf
                    </Typography>
                  </Box>
                  <Box className="slide">
                    <Typography
                      sx={{ zIndex: 400, fontSize: 50, color: "black" }}
                    >
                      asdasfasf
                    </Typography>
                  </Box>
                </Box>

                <Box className="section" sx={{ bgcolor: "gray" }}>
                  <AboutMe className="slide" />
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
