import { Autocomplete, Box, TextField, Typography } from "@mui/material"
import { IBook } from "../data"

export interface ISearchInputProps {
    books?: IBook[];
}

export const SearchInput = (props: ISearchInputProps): JSX.Element => {
    return <Autocomplete
        sx={{ width: 500 }}
        options={props.books ? props.books : []}
        getOptionLabel={(book) => book.title}
        renderOption={(props, book) => <Box
            {...props}
            key={book.title + book.author + book.readingLevel}
            component="li"
            sx={{
                '& > img': {
                    mr: 2,
                    flexShrink: 0,
                }
            }}
        >
            <Typography variant="body1" color="text.primary">
                {book.title}
            </Typography>
        </Box>}
        renderInput={(params) => <TextField
            {...params}
            placeholder="Search..."
        />}
    />
}