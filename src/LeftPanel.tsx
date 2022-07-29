import { Divider, Link, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  GITHUB_LINK,
  GITHUB_NAME,
  LINKEDIN_LINK,
  LINKEDIN_NAME,
  WEBSITES,
} from "./CONSTANTS";

export const LeftPanel = () => {
  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        {WEBSITES}
      </Typography>
      <Divider />
      <Link href={GITHUB_LINK}>
        <GitHub />
        <Typography variant="body1" component="div" gutterBottom>
          {GITHUB_NAME}
        </Typography>
      </Link>
      <Link href={LINKEDIN_LINK}>
        <LinkedIn />
        <Typography variant="body1" component="div" gutterBottom>
          {LINKEDIN_NAME}
        </Typography>
      </Link>
    </>
  );
};
