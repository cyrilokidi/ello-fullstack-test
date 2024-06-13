import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { IBook } from "../data"

export interface IBookCardProps {
    book: IBook;
    selectedBooks: IBook[];
    onAddBook: (book: IBook) => void;
    onRemoveBook: (book: IBook) => void;
}

export const BookCard = (props: IBookCardProps): JSX.Element => {
    return <Card>
        <CardContent>
            <Typography gutterBottom variant="body1" component="div">
                {props.book.title}
            </Typography>

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