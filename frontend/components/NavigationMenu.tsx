import { AppBar, Badge, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
    Menu as MenuIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const drawerWidth = 240;

export interface INavigationMenuProps {
    selectedBooksCount: number;
}

export const NavigationMenu = (props: INavigationMenuProps) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const router = useRouter();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Ello
            </Typography>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Reading List" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return <React.Fragment>
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Ello
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button
                        sx={{ color: '#fff' }}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </Button>

                    <Badge badgeContent={props.selectedBooksCount} color="secondary">
                        <Button
                            sx={{ color: '#fff' }}
                            onClick={() => router.push('/reading-list')}
                        >
                            Reading List
                        </Button>
                    </Badge>
                </Box>
            </Toolbar>
        </AppBar>

        <nav>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </nav>
    </React.Fragment>
}