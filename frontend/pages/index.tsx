import { AppBar, Box, Button, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import { IBook, demoBooks } from "../data";
import { useApp } from "../contexts/AppContext";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";
import {
    Menu as MenuIcon,
} from "@mui/icons-material";

export interface IUseFetchAllBooks {
    books: IBook[];
}

export const useFetchAllBooks = (): IUseFetchAllBooks => {
    const [books, setBooks] = React.useState<IBook[]>([]);

    const handleSetBook = (books: IBook[]) =>
        setBooks(books);

    React.useEffect(() => {
        handleSetBook([...demoBooks])
    }, []);

    return {
        books,
    }
};

const drawerWidth = 240;

export default function HomePage() {
    const fetchAllBooks = useFetchAllBooks();

    const app = useApp();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

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

    return <Box display="flex">
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

                    <Button sx={{ color: '#fff' }}>
                        Reading List
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>

        <nav>
            <Drawer
                // container={container}
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

        <Box
            component="main"
            sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            gap={2}
        >
            <Toolbar />
            <Box>
                <SearchInput
                    books={fetchAllBooks.books}
                />
            </Box>

            <Box>
                <Grid container spacing={2}>
                    {fetchAllBooks.books.map((book, index) => <Grid
                        key={index}
                        item
                        lg={2}
                        md={3}
                        xs={6}
                    >
                        <BookCard
                            book={book}
                            selectedBooks={app.selectedBooks}
                            onAddBook={app.addBook}
                            onRemoveBook={app.removeBook}
                        />
                    </Grid>)}
                </Grid>
            </Box>
        </Box>
    </Box>

    // return <Container component="main">
    //     <Box
    //         sx={{
    //             marginTop: 8,
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //         }}
    //         gap={2}
    //     >
    //         <Box>
    //             <SearchInput
    //                 books={fetchAllBooks.books}
    //             />
    //         </Box>

    //         <Box>
    //             <Grid container spacing={2}>
    //                 {fetchAllBooks.books.map((book, index) => <Grid
    //                     key={index}
    //                     item
    //                     xs={2}
    //                 >
    //                     <BookCard
    //                         book={book}
    //                         selectedBooks={app.selectedBooks}
    //                         onAddBook={app.addBook}
    //                         onRemoveBook={app.removeBook}
    //                     />
    //                 </Grid>)}
    //             </Grid>
    //         </Box>
    //     </Box>
    // </Container>
}