
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
    Tooltip,
    Avatar,
} from "@material-ui/core";
import { Cake, Widgets } from "@material-ui/icons";

const pages = ['Home', 'Treats', 'Contact'];

export default function NavBar() {
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
                    {/* <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        // sx={{
                        //     mr: 2,
                        //     display: { xs: "none", md: "flex" },
                        //     fontFamily: "monospace",
                        //     fontWeight: 700,
                        //     letterSpacing: ".3rem",
                        //     color: "inherit",
                        //     textDecoration: "none",
                        // }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
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
                        // sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        // variant="h5"
                        noWrap
                        // component="a"
                        // href=""
                        // sx={{
                        //     mr: 2,
                        //     display: { xs: "flex", md: "none" },
                        //     flexGrow: 1,
                        //     fontFamily: "monospace",
                        //     fontWeight: 700,
                        //     letterSpacing: ".3rem",
                        //     color: "inherit",
                        //     textDecoration: "none",
                        // }}
                    >
                        GIMME SUGAR TREATS
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                // sx={{ my: 2, color: "white", display: "block" }}
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
