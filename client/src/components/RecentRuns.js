import * as React from 'react';
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
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Upload from './Upload';
import Settings from './Settings';
import Analysis from './Analysis';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { api } from '../api';


function AccordionGrid(content) {
  return (
    <Grid item xs={4}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{content.content.date}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
            <p>Date: {content.content.date}</p>
            <p>Tweet: {content.content.tweet}</p>            
            <p>Score: {parseInt(content.content.score)}</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
  )
}


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MediaPilot
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function RecentRunsContent({setPage, 
                              enteredText, 
                              setEnteredText, 
                              results, 
                              setResults, 
                              enterRecentRuns, 
                              setEnterRecentRuns}) {
  const [open, setOpen] = React.useState(true);
  const [displayRows, setDisplayRows] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  async function loadAccordions() {
    let resp; 
    await fetch(api("/fetchRecentSaves"))
      .then(
        res => res.json()
      ).then(
        d => {
          resp = d;
        }
      )
  
    let currRow = []
    let accordionRows = []
    for (let i=0; i<resp["length"]; i++) {
      let row = resp["rows"][i];
      let timestamp = row[0]
      let date = row[1]
      let tweet = row[2]
      let score = row[3]
      let json = {
        "timestamp": timestamp,
        "date": date,
        "tweet": tweet,
        "score": score
      }
      currRow.push(<AccordionGrid content={json}/>)
      // if (currRow.length % 3 == 99) {
      //   accordionRows.push(
      //     <Grid container spacing={2}>{currRow}</Grid>
      //   )
      // }
    }
    if (currRow.length > 0) {
      accordionRows.push(
        <Grid container spacing={2}>{currRow}</Grid>
      )
    }

    setDisplayRows(accordionRows);
  }

  React.useEffect(()=>{ loadAccordions() }, [])

  console.log(displayRows)
  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              MediaPilot
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
              {mainListItems({setPage, setEnterRecentRuns})}
            {/* <Divider sx={{ my: 1 }} />
              {secondaryListItems()} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} align="center">
            <Grid container spacing={3}>
                {/* TODO: Fill in stuff */}
              <Grid item xs={12} md={8} lg={12}>
                <Paper sx={{ 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: 500
                    }}>
                      {displayRows}
                </Paper>
              </Grid>
              
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function RecentRuns({setPage, 
                                    enteredText, 
                                    setEnteredText, 
                                    results, 
                                    setResults, 
                                    enterRecentRuns, 
                                    setEnterRecentRuns}) {
  return <RecentRunsContent setPage={setPage} 
                            enteredText={enteredText}
                            setEnteredText={setEnteredText}
                            results={results}
                            setResults={setResults}
                            enterRecentRuns={enterRecentRuns}
                            setEnterRecentRuns={setEnterRecentRuns}/>;
}