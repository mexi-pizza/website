import * as React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page } from 'react-pdf/dist/umd/entry.parcel';
import Menu from './assets/menu.pdf';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import menu from './menu.ts';
import pdf from './assets/menu.pdf';


// import('./assets/menu.pdf').then(res => console.log('hello world', res));

const App = () => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSelection = () => window.open('tel:123')

    console.log({ menu, value })

    const categories = Object.keys(menu);

    // ramdom cat picture from online api

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" disableGutters>

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MexiPizza
                        </Typography>
                        <Button target="_blank" color="inherit" href="./menu.pdf">Download menu</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {categories.map(category => (
                        <Tab key={category} label={category} /> 
                    ))}
                </Tabs>
                <Box sx={{ flexGrow: 1 }}>
                    <List>
                        {menu[Object.keys(menu)[value]].map(item => (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleSelection}>
                                        <Box sx={{ marginRight: '20px' }}>
                                            <ListItemIcon>
                                                <Box sx={{ width: '50px', height: '50px' }}>
                                                    <img style={{ width: '50px', height: '50px' }} src={item.image} alt={item.name} />
                                                </Box>
                                            </ListItemIcon>
                                        </Box>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <ListItemText primary={`${item.name}`} />
                                            <ListItemText secondary={`${item.description}`} />
                                        </Box>
                                        <Box sx={{ flexDirection: 'row-reverse' }}>
                                            <ListItemText primary={`${item.price}`} />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Container>
        </>
    );

    // return (
    //     <div>
    //         hello world!!
    //         <Button variant="contained">Hello World</Button>;
    //         <Document
    //             file={Menu}
    //             onLoadSuccess={onDocumentLoadSuccess}
    //         >
    //             <Page pageNumber={2} />
    //             <Page pageNumber={pageNumber} />
    //         </Document>
    //         {/* <p>Page {pageNumber} of {numPages}</p> */}
    //     </div>
    // );
}


ReactDOM.render(<App />, document.getElementById('app'))
