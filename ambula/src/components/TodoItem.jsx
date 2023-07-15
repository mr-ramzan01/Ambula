import { Box, Button, Paper, Typography } from "@mui/material";

export const TodoItem = ({todos, handleDelete, handleToggle, compLen}) => {

    const color = (completed) => {
        const styles = {
            fontSize: "20px",
            cursor:" pointer"
        }
        completed?styles.color = "green" : styles.color= "red";
        return styles;
    }
    return (
        <>
            <Box display='flex' p='20px' borderBottom='1px solid gray'>
                <Box marginRight='30px'>No. of Todos: {todos.length}</Box>
                <Box>No. of Completed Todos: {compLen}</Box>
            </Box>
        <Box display='grid' gap='20px' p='30px' mt='40px' gridTemplateColumns='repeat(4, 1fr)'>
         {
            todos.map(({id,title,completed}) => (
                <Box key={id}>
                    <Paper elevation={3} sx={{padding: '30px 10px', borderRadius: '10px'}} style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                        <Typography variant="h4" textAlign='center'>{title}</Typography>
                        <Typography m='20px 0 0 0 ' variant="h5" textAlign='center' onClick={() =>handleToggle(id, completed)} style={color(completed)}>{completed? "Completed": "Not completed"}</Typography>
                        <br />
                        <Button variant='contained' sx={{backgroundColor: 'red', ":hover": {background: 'red'}, display: 'flex', margin: 'auto'}} onClick={() => handleDelete(id)}>Delete</Button>
                    </Paper>
                </Box>
            ))
         }
        </Box>
        </>
    )
}