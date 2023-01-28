import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Gallery } from './Gallery';
import { Home } from './Home';
import { NavBar } from './NavBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const homeRoute = {
  path: '/',
  name: 'Home',
  element: <Home />,
};

const projectsRoute = {
  path: '/projects',
  name: 'Projects',
  element: <div>Project</div>,
};

const galleryRoute = {
  path: '/gallery',
  name: 'Gallery',
  element: <Gallery />,
};

const routes = [homeRoute, projectsRoute, galleryRoute];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <NavBar pages={routes} />
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
