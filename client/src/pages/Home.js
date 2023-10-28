import * as React from 'react';
import Upload from "../components/Upload";


import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../components/listItems';







const Home = () => (
  
  <div>
    
    <Upload />
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
  </div>

  
);

export default Home;


