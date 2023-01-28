import { Typography, Avatar, Box } from '@mui/material';
import { CONSTANTS } from './Constants';

export const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Typography variant="h3" sx={{ margin: 2 }}>
          {CONSTANTS.NAME}
        </Typography>
        <Typography variant="h6" sx={{ margin: 2 }}>
          {CONSTANTS.INTRODUCTION}
        </Typography>
      </Box>
      <Avatar
        src={CONSTANTS.PROFILE}
        alt={CONSTANTS.NAME}
        sx={{ width: 200, height: 200, margin: 2 }}
      />
    </Box>
  );
};
