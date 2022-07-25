import { Container, Grid } from "@mui/material";
import { LeftPanel } from "./LeftPanel";
import { TopPanel } from "./TopPanel";
import { RightPanel } from "./RightPanel";

export const Website = () => {
  return (
    <Container sx={{ backgroundColor: "primary.dark" }}>
      <TopPanel />
      <Grid container>
        <Grid item>
          <LeftPanel />
        </Grid>
        <Grid item>
          <RightPanel />
        </Grid>
      </Grid>
    </Container>
  );
};
