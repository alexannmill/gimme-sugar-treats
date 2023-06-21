
import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Button,
    Typography,
    MenuItem,
    Container,
    Menu,
    makeStyles,
    Tooltip,
    Avatar,
} from "@material-ui/core";
import { Cake, Widgets } from "@material-ui/icons";

const pages = ['Home', 'Treats', 'Contact'];

const useStyles = makeStyles({
    typography: {
        mr: 2,
        // display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
            
    },
    box: {
        flexGrow: 1,
        display: '{ xs: "none", md: "flex" },'
    },
    btn: { 
        my: 2, color: "white", display: "block" 
    },
    icon: { 
        // display: '{ xs: "flex", md: "none" }, mr: 1 }'
   }
})
export default function NavBar() {

    const classes= useStyles()

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }; 

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className={classes.typography}
                    >
                        LOGO
                    </Typography>

                    <Box
                        className={classes.box}
                    >
                        <IconButton
                            // size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <Widgets />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            // sx={{
                            //     display: { xs: "block", md: "none" },
                            // }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Cake
                    className={classes.icon}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        className={classes.typography}
                    >
                        GIMME SUGAR TREATS
                    </Typography>
                    <Box
                    className={classes.box}
                    
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                className={classes.btn}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
