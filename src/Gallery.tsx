import { ImageList, ImageListItem } from "@mui/material"
import { useState } from "react"

export const Gallery = () => {

    const [verified, setVerified] = useState(false);

    if (!verified) {
        return null;
    }
    
    return <ImageList variant="masonry" cols={3} gap={8}><ImageListItem>
        <img src={"https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format&dpr=2"} loading="lazy"/></ImageListItem></ImageList>
}