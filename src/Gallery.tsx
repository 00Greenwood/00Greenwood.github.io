import { ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import { CONSTANTS } from './Constants';

export const Gallery = () => {
  const [verified, setVerified] = useState(false);

  if (!verified) {
    return null;
  }

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      <ImageListItem>
        <img src={CONSTANTS.PROFILE} loading="lazy" />
      </ImageListItem>
    </ImageList>
  );
};
