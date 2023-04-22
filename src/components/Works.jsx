import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { gsap, Power3 } from "gsap";
import hsImg from "../assets/banner.png";
import "./AboutBackGroud.scss";
import "../index.css";

export const Works = () => {
  const tl = gsap.timeline();

  const location = useLocation();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (location.hash == "#proyects") {
        tl.from(".image", {
          opacity: 0,
          duration: 1,
          x: 1000,
          scaleX: 0,
          scaleY: 0,
          stagger: 0.3,
          ease: Power3.easeOut,
        }).from(
          ".contentWorks",
          {
            x: -100,
            y: "2rem",
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: Power3.easeIn,
          },
          "-=1.7"
        );
      } else {
        tl.to(".image", {
          opacity: 0,
          duration: 0.7,
          x: 100,
          stagger: 0.3,
          ease: Power3.easeOut,
        }).to(
          ".contentWorks",
          {
            x: "2rem",
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: Power3.easeIn,
          },
          "-=1.5"
        );
      }
    }, root);

    return () => ctx.revert();
  }, [location.hash]);

  return (
    <Box>
      <Grid
        container
        sx={{
          display: { xs: "none", sm: "flex" },
          px: 5,
        }}
      >
        <div className="stars twinkling"></div>
        <Grid item sm={7}>
          <Stack sx={{ zIndex: 30, border: "1px solid white" }}>
            <Typography
              variant="body1"
              className="contentWorks"
              sx={{
                color: "#fff ",
                letterSpacing: 15,
                fontSize: { xs: "30px", md: "60px" },
                fontWeight: 500,
              }}
            >
              e-commerce
            </Typography>
            <Typography
              variant="body1"
              className="contentWorks"
              sx={{
                color: "#FF4D5A ",
                letterSpacing: 10,
                fontSize: { xs: "40px", md: "80px", lg: "80px", xl: "120px" },
                fontWeight: 500,
                mb: "5%",
              }}
            >
              HEALTHY SHOP
            </Typography>
            <hr className="bookends contentWorks" />
            <Button
              sx={{ mt: "5%" }}
              href="https://healthy.dkndrd.com/"
              target="_blank"
            >
              Show me more
            </Button>
          </Stack>
        </Grid>
        <Grid item sm={5}>
          <CardMedia
            component="img"
            className="image"
            src={hsImg}
            sx={{ boxShadow: 20, height: "100%" }}
          />
        </Grid>
      </Grid>
      <Box
        component="div"
        sx={{ display: { xs: "flex", sm: "none" }, position: "static" }}
      >
        <Typography
          className="contentWorks"
          sx={{
            fontSize: "30px",
            color: "#FFF",
            fontWeight: 500,
            // position: "absolute",
            top: { xs: 40 },
            left: { xs: "50%" },
            // transform: { xs: "translateX(-50%)", md: "none" },
          }}
        >
          WORKS
        </Typography>
        <Box
          sx={{
            width: "80%",
            height: "40%",
            top: "20%",
            // position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <CardMedia
            component="img"
            className="image"
            src={hsImg}
            sx={{ boxShadow: 20, height: "100%" }}
          />
        </Box>
        <Stack
          sx={{
            width: "80%",
            // position: "absolute",
            zIndex: 30,
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "10%",
          }}
        >
          <Typography
            variant="body1"
            className="contentWorks"
            sx={{
              color: "#fff ",
              letterSpacing: 10,
              fontSize: "17px",
              fontWeight: 500,
            }}
          >
            e-commerce
          </Typography>
          <Typography
            variant="body1"
            className="contentWorks"
            sx={{
              color: "#FF4D5A ",
              letterSpacing: 6,
              fontSize: "29px",
              fontWeight: 500,
            }}
          >
            HEALTHY SHOP
          </Typography>
          <hr className="bookends contentWorks " />
          <Button
            className="contentWorks"
            href="https://henryhealthy.shop/catalogo"
          >
            Show me more
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
