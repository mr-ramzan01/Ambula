import { useContext, useEffect } from "react";
import { useState } from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoItem } from "../components/TodoItem";
import { AppContext } from "../context/AppContext";
import { Box } from "@mui/material";

export const Todo = () => {
    const {todos, setTodos} = useContext(AppContext);

    const [error, setError] = useState(false)
    const [compLen, setComLen] = useState(0);

    useEffect(() => {
        setComLen(0);
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].completed === true) {
                setComLen((pr) => pr+1);
            }
        }
    },[todos]);


    const addTodo = async (text) => {
        const data = {
            id: String(Date.now()),
            title: text,
            completed: false
        }

        setTodos([...todos, data]);
    }


    const handleDelete = (id) => {
        const data = todos.filter(el => el.id !== id);
        setTodos(data);
    }
    const handleToggle = async (id, completed) => {
        const data = todos.map((el) => {
            if(el.id === id) {
                el.completed = !completed;
            }
            return el;
        })
        setTodos(data);
    }
    const dataLength = async () => {
    }
    useEffect(() => {
        dataLength();
    },[])
    useEffect(() => {

    },[]);
    if(error) {
        return (<div>Error...</div>)
    }
    return (
        <Box>
            <TodoInput addTodo={addTodo}/>
            <TodoItem todos={todos} handleDelete={handleDelete} compLen={compLen} handleToggle={handleToggle}/>
        </Box>
    )
}