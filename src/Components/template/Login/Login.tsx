import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import Image from "mui-image";

function LoginTemplate() {
  return (
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
            sx={{
              display: { xs: "none", md: "block" },
            }}
            md={6}
            p={5}
          >
            <Image src="/login.svg" />
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: "24px",
              }}
            >
              <Image src="/shop.png" width={200} />
              <Typography variant="h2">Welcome Back</Typography>
              <Typography variant="body2">
                Please Login to Your Account
              </Typography>
              <TextField label="email address" variant="outlined" fullWidth />
              <TextField
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
  );
}

export default LoginTemplate;
