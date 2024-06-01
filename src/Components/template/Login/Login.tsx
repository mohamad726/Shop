import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import Image from "mui-image";
import { useEffect, useState } from "react";
import { getUserData } from "../../../services/getData";
import { generate_token, setToLocalStorage } from "../../../lib/helper";
import { useUserContext } from "../../../context/authContext";
import { AuthReducerAction } from "../../../types/enums";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../../../constant/routes";
import { postUserData } from "../../../services/postData";

function LoginTemplate() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);

  const { state, dispatch } = useUserContext();

  const handlePageToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      setSearchParams({ signup: "true" });
    } else setSearchParams({ login: "true" });
  };

  const handleLogin = () => {
    getUserData(email, password).then((data) => {
      if (data.length > 0) {
        setToLocalStorage("role", data[0].role);
        setToLocalStorage("userName", data[0].userName);
        setToLocalStorage("token", generate_token(32));
        dispatch({
          type: AuthReducerAction.SET_USER,
          payload: { ...data[0], isLogin: true },
        });
        navigate({ pathname: HOME_PAGE_ROUTE });
      }
    });
  };

  const handleSignUp = () => {
    const newUser = {
      id: generate_token(32),
      email: email,
      userName: name,
      password: password,
      role: "user",
    };
    postUserData(newUser).then((data) => {
      setToLocalStorage("role", data.role);
      setToLocalStorage("userName", data.userName);
      setToLocalStorage("token", data.id);
      dispatch({
        type: AuthReducerAction.SET_USER,
        payload: { ...data, isLogin: true },
      });
      navigate({ pathname: HOME_PAGE_ROUTE });
    });
  };

  useEffect(() => {
    if (searchParams.get("signup") === "true") {
      setChecked(true);
    }
  }, [searchParams.get("signup")]);

  useEffect(() => {
    state.isLogin && navigate({ pathname: HOME_PAGE_ROUTE });
  }, [state.isLogin]);

  return (
    <>
      {!state.isLogin ? (
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "lightgray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="main"
        >
          <Container
            sx={{
              padding: "40px",
              bgcolor: "white",
              borderRadius: "30px",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 2, sm: 4, md: 6 }}
            >
              <Grid
                item
                sx={{
                  display: { xs: "none", md: "block" },
                }}
                md={6}
                p={5}
              >
                <Image src="/login.svg" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: "25px",
                  }}
                >
                  <Link to={HOME_PAGE_ROUTE}>
                    <Image src="/shop.png" width={200} />
                  </Link>
                  <Typography
                    variant="h3"
                    sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    Welcome Back
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: "60%" }}>
                    Please Login to Your Account
                  </Typography>
                  {searchParams.get("signup") === "true" && (
                    <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label="your name"
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                  )}
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="email address"
                    variant="outlined"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: orange[500],
                      transition: "all 0.6s ease-in-out",
                      transform: checked ? "scale(1.05)" : "scale(1)",
                      ":hover": { backgroundColor: orange[600] },
                    }}
                    onClick={
                      searchParams.get("signup") === "true"
                        ? handleSignUp
                        : handleLogin
                    }
                  >
                    {searchParams.get("signup") === "true" ? "SignUp" : "Login"}
                  </Button>
                  <Stack flexDirection="row" gap={2} alignContent="center">
                    <Typography variant="h6">Login</Typography>
                    <Switch
                      checked={checked}
                      onChange={handlePageToggle}
                      color="warning"
                    />
                    <Typography variant="h6">SignUp</Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default LoginTemplate;
