import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { useState } from "react"


export const TodoInput = ({addTodo}) => {
    const [title , setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    }
    return (
        <Box>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              padding: "20px",
              bgcolor: "#fff",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              fontFamily="'Dancing Script', cursive"
              component="h1"
              variant="h3"
              mb='40px'
            >
              My Todo
            </Typography>
            <Box component="form" onSubmit={handleAdd} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#0066ff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#129ffd",
                    },
                  },
                }}
                value={title}
                label="Enter Title"
                InputProps={{
                  style: {
                    height: "50px",
                  },
                }}
                autoFocus
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{
                  mt: 4,
                  background: "#129ffd",
                  "&:hover": {
                    background: "#0066ff",
                  },
                }}
              >
                Add Todo
              </Button>
            </Box>
          </Box>
        </Container>
    </Box>
    )
}