import { Autocomplete, Box, Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export interface IBook {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
}

export interface IUseFetchAllBooks {
    books: IBook[];
}

export const useFetchAllBooks = (): IUseFetchAllBooks => {
    const [books, setBooks] = React.useState<IBook[]>([]);

    const handleSetBook = (books: IBook[]) =>
        setBooks(books);

    React.useEffect(() => {
        handleSetBook([
            {
                "author": "Reese Smith",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "H",
                "title": "Curious Princess and the Enchanted Garden"
            },
            {
                "author": "Jordan Jones",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "I",
                "title": "Clever Monster on the Wonder Island"
            },
            {
                "author": "Quinn Brown",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "I",
                "title": "Happy Knight and the Magic Spell"
            },
            {
                "author": "Alex Jones",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "A",
                "title": "Happy Dragon and the Magic Spell"
            },
            {
                "author": "Jordan Brown",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "A",
                "title": "Lucky Monster and the Magic Spell"
            },
            {
                "author": "Morgan Jones",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "H",
                "title": "Magic Wizard and the Tower of Dreams"
            },
            {
                "author": "Casey Jones",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "C",
                "title": "Happy Knight and the Magic Spell"
            },
            {
                "author": "Quinn Jones",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "E",
                "title": "Happy Giant and the Starry Sky"
            },
            {
                "author": "Riley Wilson",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "D",
                "title": "Magic Princess and the Enchanted Garden"
            },
            {
                "author": "Reese Davis",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "C",
                "title": "Happy Pirate and the Tower of Dreams"
            },
            {
                "author": "Addison Smith",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "E",
                "title": "Happy Monster and the Lost World"
            },
            {
                "author": "Riley Taylor",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "C",
                "title": "Brave Robot and the Starry Sky"
            },
            {
                "author": "Avery Taylor",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "F",
                "title": "Shiny Pirate and the Secret Forest"
            },
            {
                "author": "Riley Brown",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "C",
                "title": "Magic Princess and the Hidden Treasure"
            },
            {
                "author": "Avery Smith",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "D",
                "title": "Happy Princess and the Moonlight Mystery"
            },
            {
                "author": "Quinn Wilson",
                "coverPhotoURL": "assets/image7.webp",
                "readingLevel": "H",
                "title": "Little Pirate and the Tower of Dreams"
            },
            {
                "author": "Addison Taylor",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "J",
                "title": "Magic Dragon and the Tower of Dreams"
            },
            {
                "author": "Riley Williams",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "H",
                "title": "Magic Monster and the Starry Sky"
            },
            {
                "author": "Reese Davis",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "B",
                "title": "Clever Wizard and the Starry Sky"
            },
            {
                "author": "Addison Moore",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "F",
                "title": "Brave Wizard and the Starry Sky"
            },
            {
                "author": "Addison Wilson",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "E",
                "title": "Curious Knight on the Wonder Island"
            },
            {
                "author": "Morgan Johnson",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "J",
                "title": "Happy Giant and the Enchanted Garden"
            },
            {
                "author": "Quinn Miller",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "E",
                "title": "Happy Princess and the Tower of Dreams"
            },
            {
                "author": "Riley Miller",
                "coverPhotoURL": "assets/image7.webp",
                "readingLevel": "A",
                "title": "Happy Wizard and the Enchanted Garden"
            },
            {
                "author": "Casey Taylor",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "E",
                "title": "Big Fairy and the Starry Sky"
            },
            {
                "author": "Riley Smith",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "B",
                "title": "Magic Wizard and the Great Adventure"
            },
            {
                "author": "Alex Wilson",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "B",
                "title": "Little Fairy and the Enchanted Garden"
            },
            {
                "author": "Avery Miller",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "C",
                "title": "Magic Robot and the Hidden Treasure"
            },
            {
                "author": "Casey Johnson",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "D",
                "title": "Big Princess and the Starry Sky"
            },
            {
                "author": "Alex Williams",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "I",
                "title": "Shiny Giant and the Secret Forest"
            },
            {
                "author": "Riley Smith",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "D",
                "title": "Magic Giant and the Hidden Treasure"
            },
            {
                "author": "Jordan Taylor",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "H",
                "title": "Adventurous Giant and the Moonlight Mystery"
            },
            {
                "author": "Casey Johnson",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "F",
                "title": "Lucky Giant and the Hidden Treasure"
            },
            {
                "author": "Riley Miller",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "J",
                "title": "Adventurous Princess and the Enchanted Garden"
            },
            {
                "author": "Morgan Johnson",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "I",
                "title": "Happy Fairy and the Lost World"
            },
            {
                "author": "Addison Taylor",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "F",
                "title": "Brave Monster and the Secret Forest"
            },
            {
                "author": "Quinn Johnson",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "J",
                "title": "Big Wizard and the Tower of Dreams"
            },
            {
                "author": "Jordan Taylor",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "D",
                "title": "Lucky Knight and the Lost World"
            },
            {
                "author": "Quinn Williams",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "H",
                "title": "Little Monster and the Enchanted Garden"
            },
            {
                "author": "Taylor Jones",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "G",
                "title": "Happy Wizard and the Moonlight Mystery"
            },
            {
                "author": "Avery Smith",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "A",
                "title": "Lucky Robot and the Hidden Treasure"
            },
            {
                "author": "Taylor Miller",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "E",
                "title": "Happy Fairy and the Magic Spell"
            },
            {
                "author": "Casey Williams",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "C",
                "title": "Happy Pirate and the Secret Forest"
            },
            {
                "author": "Avery Johnson",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "B",
                "title": "Happy Dragon and the Moonlight Mystery"
            },
            {
                "author": "Jordan Jones",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "C",
                "title": "Magic Monster and the Moonlight Mystery"
            },
            {
                "author": "Addison Moore",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "B",
                "title": "Shiny Monster and the Moonlight Mystery"
            },
            {
                "author": "Avery Williams",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "F",
                "title": "Brave Fairy and the Hidden Treasure"
            },
            {
                "author": "Taylor Smith",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "E",
                "title": "Brave Giant and the Lost World"
            },
            {
                "author": "Riley Williams",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "D",
                "title": "Lucky Monster and the Lost World"
            },
            {
                "author": "Avery Miller",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "F",
                "title": "Adventurous Pirate and the Enchanted Garden"
            },
            {
                "author": "Casey Smith",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "D",
                "title": "Happy Princess and the Starry Sky"
            },
            {
                "author": "Reese Williams",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "G",
                "title": "Lucky Pirate and the Enchanted Garden"
            },
            {
                "author": "Taylor Miller",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "J",
                "title": "Adventurous Pirate and the Hidden Treasure"
            },
            {
                "author": "Jordan Jones",
                "coverPhotoURL": "assets/image7.webp",
                "readingLevel": "I",
                "title": "Happy Knight and the Lost World"
            },
            {
                "author": "Casey Johnson",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "G",
                "title": "Big Robot and the Secret Forest"
            },
            {
                "author": "Casey Jones",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "F",
                "title": "Little Dragon and the Moonlight Mystery"
            },
            {
                "author": "Taylor Taylor",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "D",
                "title": "Brave Robot and the Secret Forest"
            },
            {
                "author": "Riley Williams",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "B",
                "title": "Magic Dragon and the Secret Forest"
            },
            {
                "author": "Avery Williams",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "C",
                "title": "Clever Knight and the Secret Forest"
            },
            {
                "author": "Morgan Miller",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "B",
                "title": "Lucky Knight and the Tower of Dreams"
            },
            {
                "author": "Reese Brown",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "C",
                "title": "Adventurous Monster and the Moonlight Mystery"
            },
            {
                "author": "Casey Miller",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "H",
                "title": "Big Wizard and the Hidden Treasure"
            },
            {
                "author": "Alex Smith",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "F",
                "title": "Curious Wizard and the Moonlight Mystery"
            },
            {
                "author": "Jordan Williams",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "C",
                "title": "Magic Knight and the Hidden Treasure"
            },
            {
                "author": "Jordan Williams",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "J",
                "title": "Curious Wizard on the Wonder Island"
            },
            {
                "author": "Morgan Moore",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "J",
                "title": "Happy Dragon and the Lost World"
            },
            {
                "author": "Reese Williams",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "D",
                "title": "Little Princess and the Enchanted Garden"
            },
            {
                "author": "Avery Miller",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "G",
                "title": "Curious Monster and the Lost World"
            },
            {
                "author": "Alex Johnson",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "F",
                "title": "Brave Fairy and the Magic Spell"
            },
            {
                "author": "Addison Wilson",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "C",
                "title": "Lucky Unicorn and the Enchanted Garden"
            },
            {
                "author": "Taylor Smith",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "G",
                "title": "Shiny Dragon and the Lost World"
            },
            {
                "author": "Casey Taylor",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "A",
                "title": "Adventurous Monster and the Starry Sky"
            },
            {
                "author": "Morgan Miller",
                "coverPhotoURL": "assets/image7.webp",
                "readingLevel": "J",
                "title": "Big Robot and the Moonlight Mystery"
            },
            {
                "author": "Casey Davis",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "F",
                "title": "Shiny Knight on the Wonder Island"
            },
            {
                "author": "Morgan Taylor",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "B",
                "title": "Brave Fairy and the Hidden Treasure"
            },
            {
                "author": "Riley Miller",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "F",
                "title": "Curious Fairy and the Enchanted Garden"
            },
            {
                "author": "Addison Taylor",
                "coverPhotoURL": "assets/image9.webp",
                "readingLevel": "H",
                "title": "Magic Wizard and the Lost World"
            },
            {
                "author": "Avery Jones",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "D",
                "title": "Curious Monster and the Great Adventure"
            },
            {
                "author": "Quinn Johnson",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "E",
                "title": "Lucky Robot and the Enchanted Garden"
            },
            {
                "author": "Quinn Taylor",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "A",
                "title": "Lucky Fairy and the Starry Sky"
            },
            {
                "author": "Alex Smith",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "B",
                "title": "Shiny Knight and the Great Adventure"
            },
            {
                "author": "Avery Wilson",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "H",
                "title": "Brave Fairy and the Enchanted Garden"
            },
            {
                "author": "Reese Wilson",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "A",
                "title": "Adventurous Robot and the Moonlight Mystery"
            },
            {
                "author": "Reese Brown",
                "coverPhotoURL": "assets/image4.webp",
                "readingLevel": "A",
                "title": "Clever Princess on the Wonder Island"
            },
            {
                "author": "Quinn Jones",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "I",
                "title": "Adventurous Robot and the Magic Spell"
            },
            {
                "author": "Taylor Miller",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "H",
                "title": "Clever Robot and the Lost World"
            },
            {
                "author": "Quinn Brown",
                "coverPhotoURL": "assets/image8.webp",
                "readingLevel": "B",
                "title": "Lucky Giant and the Moonlight Mystery"
            },
            {
                "author": "Alex Smith",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "C",
                "title": "Shiny Robot and the Hidden Treasure"
            },
            {
                "author": "Avery Brown",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "A",
                "title": "Magic Dragon and the Enchanted Garden"
            },
            {
                "author": "Alex Wilson",
                "coverPhotoURL": "assets/image7.webp",
                "readingLevel": "D",
                "title": "Curious Knight and the Tower of Dreams"
            },
            {
                "author": "Alex Wilson",
                "coverPhotoURL": "assets/image10.webp",
                "readingLevel": "D",
                "title": "Shiny Giant and the Moonlight Mystery"
            },
            {
                "author": "Quinn Williams",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "F",
                "title": "Curious Unicorn and the Lost World"
            },
            {
                "author": "Casey Brown",
                "coverPhotoURL": "assets/image2.webp",
                "readingLevel": "C",
                "title": "Happy Unicorn and the Great Adventure"
            },
            {
                "author": "Taylor Taylor",
                "coverPhotoURL": "assets/image3.webp",
                "readingLevel": "I",
                "title": "Lucky Dragon on the Wonder Island"
            },
            {
                "author": "Jordan Miller",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "F",
                "title": "Magic Dragon on the Wonder Island"
            },
            {
                "author": "Morgan Davis",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "A",
                "title": "Happy Giant and the Magic Spell"
            },
            {
                "author": "Addison Davis",
                "coverPhotoURL": "assets/image5.webp",
                "readingLevel": "G",
                "title": "Shiny Monster and the Tower of Dreams"
            },
            {
                "author": "Addison Miller",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "B",
                "title": "Brave Pirate and the Enchanted Garden"
            },
            {
                "author": "Riley Wilson",
                "coverPhotoURL": "assets/image1.webp",
                "readingLevel": "E",
                "title": "Curious Monster and the Starry Sky"
            },
            {
                "author": "Taylor Brown",
                "coverPhotoURL": "assets/image6.webp",
                "readingLevel": "J",
                "title": "Lucky Fairy and the Tower of Dreams"
            }
        ])
    }, []);

    return {
        books,
    }
};

export default function HomePage() {
    const fetchAllBooks = useFetchAllBooks();

    return <Container component="main">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            gap={2}
        >
            <Box>
                <Autocomplete
                    sx={{ width: 500 }}
                    options={[]}
                    renderInput={(params) => <TextField
                        {...params}
                        placeholder="Search..."
                    />}
                />
            </Box>

            <Box>
                <Grid container spacing={2}>
                    {fetchAllBooks.books.map((book, index) => <Grid
                        key={index}
                        item
                        xs={2}
                    >
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    {book.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {`by ${book.author}`}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small">Add</Button>
                            </CardActions>
                        </Card>
                    </Grid>)}
                </Grid>
            </Box>
        </Box>
    </Container>
}