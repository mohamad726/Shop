import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
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
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../../../constant/routes";

function LoginTemplate() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useUserContext();

  const { state } = useUserContext();
  useEffect(() => {
    state.isLogin && navigate({ pathname: HOME_PAGE_ROUTE });
  }, [state.isLogin]);

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
              height={450}
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
                      ":hover": { backgroundColor: orange[600] },
                    }}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
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
