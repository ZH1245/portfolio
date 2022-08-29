import Resume from "./ZH_Resume.pdf";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";

import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import { Container, Box } from "@mui/system";
import React from "react";
import "./index.css";
import lightwave from "./lightwave.svg";
import darkwave from "./darkwave.svg";

function HomePage(props) {
  const isDark = useSelector((state) => state.theme.value);
  const text = {
    color: "text.secondary",
  };
  const svgAsBackground = {
    backgroundImage:
      isDark === "dark" ? `url(${darkwave})` : `url(${lightwave})`,
    backgroundRepeat: "no-repeat",
  };
  const leftIntro = {
    margin: "0 auto",
    mt: 18,
    height: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box sx={text} className={"text"}>
      <Grid container sx={svgAsBackground}>
        <Grid item sm={12} xs={12} md={6} sx={{ p: { md: 4, sm: 0, xs: 0 } }}>
          <Stack
            spacing={1}
            sx={leftIntro}
            direction="column"
            className="animated"
          >
            <Container>
              <Typography variant="h3" className="text">
                {"Hello, My Name is"}
                {/* <Fade timeout={800} in={true}> */}
                <Typography
                  variant="h1"
                  className={"headings"}
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  {"Zain."}
                </Typography>
                {/* </Fade> */}
                {/* <Fade in={true} timeout={2000}> */}
                <Typography className="text" sx={{ fontSize: "4vh" }}>
                  {"I am a"}
                  <Typography
                    sx={{
                      fontSize: "3vh",
                      color: "text.primary",
                      fontWeight: "bold",
                    }}
                  >
                    {"Programmer, Web Developer, Mobile App Developer"}
                  </Typography>
                </Typography>
                {/* </Fade> */}
              </Typography>
            </Container>
            <Container sx={{ pt: 3 }}>
              {/* <Fade in={true} timeout={2000}> */}
              <Stack
                sx={{
                  width: "fit-content",
                }}
                spacing={1}
                direction={{ md: "row", sm: "column", xs: "column" }}
              >
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://github.com/ZH1245"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    startIcon={<AiFillGithub />}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography className="text"> GitHub</Typography>
                  </Button>
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://facebook.com/zain.haroon.786"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    startIcon={<AiFillFacebook />}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography className="text"> FaceBook</Typography>
                  </Button>
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/zain-haroon-593b65124/"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    startIcon={<AiFillLinkedin />}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography className="text"> LinkedIn</Typography>
                  </Button>
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="mailto:zainharoon890@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    startIcon={<AiFillMail />}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography className="text">
                      zainharoon890@gmail.com
                    </Typography>
                  </Button>
                </a>
              </Stack>
              {/* </Fade> */}
            </Container>
          </Stack>
        </Grid>
      </Grid>
      {/* <Divider
        orientation="horizontal"
        flexItem
        variant="middle"
        sx={{
          m: 3,
          border: `1px solid ${isDark == "dark" ? yellow[700] : blue[700]}`,
        }}
      /> */}

      <Container
        maxWidth="xl"
        id="about"
        sx={{ mb: 2 }}
        className={isDark === "dark" ? "onhoverDark" : "onhoverLight"}
      >
        <Typography
          variant="h6"
          color="text.primary"
          className="text"
          sx={{
            fontWeight: "bold",
            alignItems: "center",
            textAlign: { sm: "center", md: "left", xs: "center" },
            pb: { md: "auto", sm: 1, xs: 1 },
          }}
        >
          <u
            style={{
              borderBottom: "3px solid",
              textDecoration: "none",
            }}
          >
            About Me
          </u>
        </Typography>
        <Container sx={{ textAlign: "justify" }}>
          <Typography className="text">
            {"I am a Fresh Graduate from "}
            <span
              style={{
                color: isDark === "dark" ? yellow[700] : blue[700],
                fontWeight: "bold",
              }}
            >
              COMSATS University Islamabad, Lahore Campus.
            </span>
            {" Completed my Bachelors in"}{" "}
            <span
              style={{
                color: isDark === "dark" ? yellow[700] : blue[700],
                fontWeight: "bold",
              }}
            >
              {"Computer Science"}
            </span>
            {" with "}
            <span
              style={{
                color: isDark === "dark" ? yellow[700] : blue[700],
                fontWeight: "bold",
              }}
            >
              {"3.16 CGPA."}
            </span>
            {" I'm a quick learner and always motivated about learning!"}
          </Typography>
        </Container>
      </Container>
      {/* <Divider
        orientation="horizontal"
        flexItem
        variant="middle"
        sx={{
          m: 3,
          border: `1px solid ${isDark == "dark" ? yellow[700] : blue[700]}`,
        }}
      /> */}
      <Container
        maxWidth="xl"
        id="skills"
        sx={{ mb: 2, mt: 2 }}
        className={isDark === "dark" ? "onhoverDark" : "onhoverLight"}
      >
        <Typography
          variant="h6"
          color="text.primary"
          className="text"
          sx={{
            fontWeight: "bold",
            alignItems: "center",
            textAlign: { sm: "center", xs: "center", md: "left" },

            pb: { md: "auto", sm: 2, xs: 2 },
          }}
        >
          <u
            style={{
              borderBottom: "3px solid",
              textDecoration: "none",
            }}
          >
            Skills
          </u>
        </Typography>
        <Container sx={{ textAlign: "justify" }}>
          <Stack spacing={2}>
            <Typography className="text" color="text.primary">
              ReactJS
              <LinearProgressWithLabel value={80} variant="determinate" />
            </Typography>
            <Typography className="text" color="text.primary">
              MERN
              <LinearProgressWithLabel value={80} variant="determinate" />
            </Typography>
            <Typography className="text" color="text.primary">
              HTML
              <LinearProgressWithLabel value={75} variant="determinate" />
            </Typography>
            <Typography className="text" color="text.primary">
              JavaScript
              <LinearProgressWithLabel value={70} variant="determinate" />
            </Typography>
            <Typography className="text" color="text.primary">
              Data Structures
              <LinearProgressWithLabel value={65} variant="determinate" />
            </Typography>
            <Typography className="text" color="text.primary">
              OOP
              <LinearProgressWithLabel value={60} variant="determinate" />
            </Typography>
            <Typography className="text" color="text.primary">
              React Native
              <LinearProgressWithLabel value={60} variant="determinate" />
            </Typography>
          </Stack>
        </Container>
      </Container>
      {/* <Divider
        orientation="horizontal"
        flexItem
        variant="middle"
        sx={{
          m: 3,
          border: `1px solid ${isDark == "dark" ? yellow[700] : blue[700]}`,
        }}
      /> */}
      <Container
        maxWidth="xl"
        id="projects"
        className={isDark === "dark" ? "onhoverDark" : "onhoverLight"}
        sx={{ pb: 2, pt: 2 }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          className="text"
          sx={{
            fontWeight: "bold",
            alignItems: "center",
            textAlign: { sm: "center", md: "left", xs: "center" },
            pb: { md: "auto", sm: 1, xs: 1 },
            // pt: { md: "auto", sm: 2 },
          }}
        >
          <u
            style={{
              borderBottom: "3px solid",
              textDecoration: "none",
            }}
          >
            Projects
          </u>
        </Typography>
        <Container sx={{ textAlign: "justify" }}>
          <Stack
            display={"flex"}
            justifyContent="space-between"
            spacing={2}
            direction={"column"}
            // direction={{ md: "row", sm: "column", xs: "column" }}
            alignItems="center"
          >
            <Card
              sx={{ maxWidth: 400, pt: 2, pb: 2, pl: 1, pr: 1 }}
              className="text"
            >
              <CardHeader title="Portfolio" />
              <CardContent>
                <Typography
                  color="text.secondary"
                  textAlign={"justify"}
                  className="text"
                >
                  Built By Own Portfolio using MUI and ReactJS
                  <Typography className="text" color="text.primary" pt={2}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://iamzainharoon.netlify.app"
                      style={{
                        textDecoration: "none",
                        color: isDark === "dark" ? yellow[700] : blue[700],
                      }}
                    >
                      Go to Website
                    </a>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ maxWidth: 400, pt: 2, pb: 2, pl: 1, pr: 1 }}
              className="text"
            >
              <CardHeader title="Resume Builder" />
              <CardContent>
                <Typography
                  color="text.secondary"
                  textAlign={"justify"}
                  className="text"
                >
                  Resume Builder in NextJS and MUI to create Resume's
                  <Typography className="text" color="text.primary" pt={2}>
                    <a
                      href="https://resume-builder-2.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: isDark === "dark" ? yellow[700] : blue[700],
                      }}
                    >
                      Go to Website
                    </a>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ maxWidth: 400, pt: 2, pb: 2, pl: 1, pr: 1 }}
              className="text"
            >
              <CardHeader title="TourBook" />
              <CardContent>
                <Typography
                  color="text.secondary"
                  textAlign={"justify"}
                  className="text"
                >
                  A platform for Tourist's and Tour Operators in MERN stack.
                  <Typography className="text" color="text.primary" pt={2}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://tour-book.netlify.app"
                      style={{
                        textDecoration: "none",
                        color: isDark === "dark" ? yellow[700] : blue[700],
                      }}
                    >
                      Go to Website
                    </a>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ maxWidth: 400, pt: 2, pb: 2, pl: 1, pr: 1 }}
              className="text"
            >
              <CardHeader title="Face Mask Detector" />
              <CardContent sx={{ pt: 0, pb: 0 }}>
                <Typography
                  color="text.secondary"
                  textAlign={"justify"}
                  className="text"
                >
                  Face Mask Detector in Python, Machine Learning and Image
                  Processing
                  <Typography
                    className="text"
                    color="text.primary"
                    pt={2}
                  ></Typography>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Container>
      {/* <Divider
        orientation="horizontal"
        flexItem
        variant="middle"
        sx={{
          mb: 4,
          border: `1px solid ${isDark == "dark" ? yellow[700] : blue[700]}`,
        }}
      /> */}
      <Container
        maxWidth="xl"
        id="resume"
        sx={{ pb: 2, pt: 2 }}
        className={isDark === "dark" ? "onhoverDark" : "onhoverLight"}
      >
        <Typography
          variant="h6"
          color="text.primary"
          className="text"
          sx={{
            fontWeight: "bold",
            alignItems: "center",
            textAlign: { sm: "center", md: "left", xs: "center" },
            pb: { md: "auto", sm: 1, xs: 1 },
          }}
        >
          <u
            style={{
              borderBottom: "3px solid",
              textDecoration: "none",
            }}
          >
            Resume
          </u>
        </Typography>
        <Container
          sx={{
            textAlign: "justify",
            alignItems: "center",
          }}
        >
          <Stack spacing={1} direction="column" alignItems="center">
            <Card
              sx={{
                maxWidth: 400,
                p: 5,
                pl: 8,
                pr: 8,
                textAlign: "center",
              }}
              className="text"
            >
              <CardHeader title="Zain Haroon's Resume" />
              <CardContent sx={{ pt: 0, pb: 0 }}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                  href={Resume}
                >
                  <Button
                    variant="primary"
                    sx={{ textAlign: "left" }}
                    className="text"
                  >
                    <Typography variant="caption">Download Resume</Typography>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.primary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export default HomePage;
