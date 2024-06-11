import { Autocomplete, Box, Container, TextField } from "@mui/material";

export default function HomePage() {
    return <Container component="main">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
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
        </Box>
    </Container>
}