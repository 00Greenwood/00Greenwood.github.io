import { AppBar, Toolbar, Button } from "@mui/material"

interface Page {path:string; name:string}

interface NavBarProps {
  pages: Page[]
}

export const NavBar = ({pages}: NavBarProps) => {
      return <AppBar position="static">
        <Toolbar >
        {pages.map((page, index) => <Button key={index} href={page.path}>{page.name}</Button>
        )}</Toolbar>
      </AppBar>
}