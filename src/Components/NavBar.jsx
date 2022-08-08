import {
  Toolbar,
  AppBar,
  Button,
  Switch,
  Typography,
  IconButton,
  Stack,
  Fade,
} from "@mui/material";
import { Link } from "react-scroll";
import React from "react";
import { Container, Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../reducers/darkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { blue, red, yellow } from "@mui/material/colors";

import "./navbar.css";

function NavBar() {
  const isDark = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const buttonStyles = {
    color: "primary.main",
    "&:hover": {
      transition: "0.08s",
      boxShadow: `0px 3px 2px ${isDark === "dark" ? yellow[700] : blue[700]}`,
    },
  };
  const navbarContainer = {
    display: { md: "flex", sm: "block", xs: "block" },
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  };
  const navLinks = {
    display: { md: "flex", xs: "none", alignItems: "center" },
  };
  const navLinks2 = {
    display: { md: "none", xs: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  };
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const toggleMenu = () => {
    setAnchorElNav(!anchorElNav);
  };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar elevation={false}>
      <Toolbar>
        <Box sx={navbarContainer}>
          <Box sx={navLinks2}>
            {/* <IconButton
              size="large"
              color="primary"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuIcon />
            </IconButton> */}

            <IconButton onClick={toggleMenu}>
              <MenuIcon color="primary" />
            </IconButton>
            <Button
              sx={{
                display: { md: "none", sm: "block", xs: "block" },
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Typography
                color="primary"
                sx={{
                  fontWeight: "bold",
                  fontFamily: `"Dancing Script", cursive`,
                  fontSize: "3.5vh",
                }}
              >
                ZH
              </Typography>
            </Button>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClick={handleCloseNavMenu}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={"About"} onClick={() => setAnchorElNav(false)}>
                <Link to="about" spy={true} smooth={true} offset={-100}>
                  <Typography textAlign="center">{"About"}</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={"Skills"} onClick={() => setAnchorElNav(false)}>
                <Link to="skills" spy={true} smooth={true} offset={-100}>
                  <Typography textAlign="center">{"Skills"}</Typography>
                </Link>
              </MenuItem>

              <MenuItem key={"Projects"} onClick={() => setAnchorElNav(false)}>
                <Link to="projects" spy={true} smooth={true} offset={-100}>
                  <Typography textAlign="center">{"Projects"}</Typography>
                </Link>
              </MenuItem>

              <MenuItem key={"Resume"} onClick={() => setAnchorElNav(false)}>
                <Link to="resume" spy={true} smooth={true} offset={-100}>
                  <Typography textAlign="center">{"Resume"}</Typography>
                </Link>
              </MenuItem>
              <MenuItem
                key={"switchMode"}
                // onClick={() => dispatch(toggleDarkMode())}
              >
                Dark mode
                <Switch
                  value={isDark}
                  onClick={() => dispatch(toggleDarkMode())}
                  defaultChecked={isDark == "dark" ? true : false}
                />
              </MenuItem>
            </Menu> */}
          </Box>
          <Button sx={{ display: { md: "block", xs: "none", sm: "none" } }}>
            <Typography
              color="primary"
              // variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: "3.5vh",
                fontFamily: `"Dancing Script", cursive`,
              }}
            >
              ZH
            </Typography>
          </Button>
          <Box>
            <Stack sx={navLinks} direction="row" spacing={1}>
              <Link to="about" spy={true} smooth={true} offset={-100}>
                <Button sx={buttonStyles} color="primary">
                  About
                </Button>
              </Link>
              <Link to="skills" spy={true} smooth={true} offset={-100}>
                <Button sx={buttonStyles} color="primary">
                  Skills
                </Button>
              </Link>
              <Link to="skills" spy={true} smooth={true} offset={-100}>
                <Button sx={buttonStyles} color="primary">
                  Projects
                </Button>
              </Link>
              <Link to="resume" spy={true} smooth={true} offset={-100}>
                <Button sx={buttonStyles} color="primary">
                  Resume
                </Button>
              </Link>
              {/* <Button sx={buttonStyles} color="primary" href="#skills">
                Skills
              </Button> */}

              {/* <Button sx={buttonStyles} color="primary" href="#projects">
                Projects
              </Button> */}
              {/* <Button sx={buttonStyles} color="primary" href="#resume">
                Resume
              </Button> */}
              <Button
                sx={({ alignItems: "center" }, buttonStyles)}
                disableElevation
                disableFocusRipple
                disableRipple
              >
                Dark mode
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase": {
                      // padding: 2,
                      "&.Mui-checked": {
                        // transform: "translateX(12px)",
                        color: isDark === "dark" ? yellow[700] : blue[700],
                        "& + .MuiSwitch-track": {
                          opacity: 1,
                          backgroundColor:
                            isDark === "dark" ? red[500] : "#1890ff",
                        },
                      },
                    },
                  }}
                  value={isDark}
                  onClick={() => dispatch(toggleDarkMode())}
                  defaultChecked={isDark === "dark" ? true : false}
                />
              </Button>
            </Stack>
            {/* <Fade in={anchorElNav} timeout={500}> */}
            {anchorElNav ? (
              <Fade in={anchorElNav} timeout={950}>
                <Stack
                  spacing={2}
                  className="stack"
                  sx={{
                    pb: 2,
                    display: anchorElNav
                      ? { md: "none", sm: "block", xs: "block" }
                      : "none",
                    alignItems: "center",
                  }}
                  direction="column"
                >
                  <Container>
                    <Button
                      className="stack"
                      sx={{ textAlign: "left" }}
                      onClick={() => setAnchorElNav(false)}
                    >
                      <Link to="about" spy={true} smooth={true} offset={-100}>
                        <Typography sx={{ textAlign: "left" }}>
                          {"About"}
                        </Typography>
                      </Link>
                    </Button>
                  </Container>
                  <Container>
                    <Button
                      sx={{ textAlign: "left" }}
                      onClick={() => setAnchorElNav(false)}
                    >
                      <Link to="skills" spy={true} smooth={true} offset={-100}>
                        <Typography textAlign="left">{"Skills"}</Typography>
                      </Link>
                    </Button>
                  </Container>
                  <Container>
                    <Button onClick={() => setAnchorElNav(false)}>
                      <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                      >
                        <Typography textAlign="center">{"Projects"}</Typography>
                      </Link>
                    </Button>
                  </Container>
                  <Container>
                    <Button onClick={() => setAnchorElNav(false)}>
                      <Link to="resume" spy={true} smooth={true} offset={-100}>
                        <Typography textAlign="center">{"Resume"}</Typography>
                      </Link>
                    </Button>
                  </Container>
                  <Container>
                    <Button
                      key={"switchMode"}
                      // onClick={() => dispatch(toggleDarkMode())}
                    >
                      Dark mode
                      <Switch
                        sx={{
                          "& .MuiSwitch-switchBase": {
                            // padding: 2,
                            "&.Mui-checked": {
                              // transform: "translateX(12px)",
                              color:
                                isDark === "dark" ? yellow[700] : blue[700],
                              "& + .MuiSwitch-track": {
                                opacity: 1,
                                backgroundColor:
                                  isDark === "dark" ? red[500] : "#1890ff",
                              },
                            },
                          },
                        }}
                        value={isDark}
                        onClick={() => dispatch(toggleDarkMode())}
                        defaultChecked={isDark === "dark" ? true : false}
                      />
                    </Button>
                  </Container>
                </Stack>
                {/* </Fade> */}
              </Fade>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
