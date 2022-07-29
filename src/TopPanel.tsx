import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import { INTRODUCTION, NAME } from "./CONSTANTS";

export const TopPanel = () => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="h3" component="div" gutterBottom>
          {NAME}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {INTRODUCTION}
        </Typography>
      </Grid>
      <Grid item xs="auto" alignSelf="center">
        <Avatar
          alt={NAME}
          src="src\assets\profile.jpg"
          sx={{ width: 128, height: 128 }}
        />
      </Grid>
    </Grid>
  );
};
