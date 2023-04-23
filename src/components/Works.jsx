import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, CardMedia, Grid, Typography, Stack } from "@mui/material";
import { gsap, Power3 } from "gsap";
import "./AboutBackGroud.scss";
import "../index.css";

export const Works = ({ hashLocation, title, subtitle, img, link, oFit }) => {
  const tl = gsap.timeline();

  const location = useLocation();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (location.hash == hashLocation) {
        tl.from(".image", {
          opacity: 0,
          duration: 0.5,
          x: -1000,
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
      }
      // else if (id === idActive) {
      //   tl.to(".image", {
      //     opacity: 0,
      //     duration: 0.7,
      //     x: 100,
      //     stagger: 0.3,
      //     ease: Power3.easeOut,
      //   }).to(
      //     ".contentWorks",
      //     {
      //       x: "2rem",
      //       opacity: 0,
      //       duration: 0.6,
      //       stagger: 0.1,
      //       ease: Power3.easeIn,
      //     },
      //     "-=1.5"
      //   );
      // }
    }, root);

    return () => ctx.revert();
  }, [location]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid
        container
        sx={{
          px: 5,
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Grid item xs={12} sm={7}>
          <Stack sx={{ zIndex: 30, mt: { xs: 5, sm: 0 } }}>
            <Typography
              variant="body1"
              className="contentWorks"
              sx={{
                color: "#fff ",
                letterSpacing: 15,
                fontSize: { xs: "16px", sm: "30px", md: "60px" },
                fontWeight: 500,
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="body1"
              className="contentWorks"
              sx={{
                color: "#FF4D5A ",
                letterSpacing: 10,
                fontSize: {
                  xs: "29px",
                  sm: "40px",
                  md: "80px",
                  lg: "80px",
                  xl: "120px",
                },
                fontWeight: 500,
                mb: "1%",
              }}
            >
              {title}
            </Typography>
            <hr className="bookends contentWorks" />
            <Button
              className=" contentWorks"
              sx={{ mt: { xs: "2px", sm: "5%" }, fontSize: { xs: 13, sm: 16 } }}
              href={link}
              target="_blank"
            >
              Show me more
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CardMedia
            component="img"
            className="image"
            src={img}
            sx={{
              height: "400px",
              objectFit: oFit ? "contain" : "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography
            className="contentWorks"
            sx={{
              fontSize: "25px",
              mb: 2,
              color: "#FFF",
              fontWeight: 500,
            }}
          >
            WORKS
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid container sx={{ display: { xs: "flex", sm: "none" } }}>
        <Typography
          className="contentWorks"
          sx={{
            fontSize: "30px",
            color: "#FFF",
            fontWeight: 500,
            position: "absolute",
            top: { xs: 40 },
            left: { xs: "50%" },
            transform: { xs: "translateX(-50%)", md: "none" },
          }}
        >
          WORKS
        </Typography>
        <Box
          sx={{
            width: "80%",
            height: "40%",
            top: "20%",
            position: "absolute",
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
            position: "absolute",
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
      </Grid> */}
    </Box>
  );
};
