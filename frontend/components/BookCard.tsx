import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { IBook } from "../data"

export interface IBookCardProps {
    book: IBook;
    selectedBooks: IBook[];
    onAddBook: (book: IBook) => void;
    onRemoveBook: (book: IBook) => void;
}

export const BookCard = (props: IBookCardProps): JSX.Element => {
    return <Card>
        <CardMedia
            sx={{ height: 140 }}
            image={props.book.coverPhotoURL}
        />

        <CardContent>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                }}
            >
                <Typography gutterBottom variant="body1" component="div">
                    {props.book.title}
                </Typography>

                <Chip color="secondary" size="small" label={props.book.readingLevel} />
            </Box>

            <Typography variant="body2" color="text.secondary">
                {`by ${props.book.author}`}
            </Typography>
        </CardContent>

        <CardActions>
            {!(props.selectedBooks.find(({ title, author, readingLevel }) => title === props.book.title && author === props.book.author && readingLevel === props.book.readingLevel))
                ? <Button
                    size="small"
                    onClick={() => props.onAddBook(props.book)}
                >
                    Add
                </Button>
                : <Button
                    size="small"
                    color="error"
                    onClick={() => props.onRemoveBook(props.book)}
                >
                    Remove
                </Button>}
        </CardActions>
    </Card>
}