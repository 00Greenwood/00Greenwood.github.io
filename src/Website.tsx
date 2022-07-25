import { Avatar, Container, Typography } from "@mui/material";

export const Website = () => {
  return (
    <Container sx={{backgroundColor: "primary.dark"}}>
      <Avatar
        alt="Marcus Greenwood"
        src="src\assets\profile.jpg"
        sx={{ width: 128, height: 128 }}
      />
      <Typography variant="h1" component="div" gutterBottom color="primary.light">Marcus Greenwood</Typography>
      </Container>
  );
};
