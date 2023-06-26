import React, { useContext, useState } from "react";
import { UserContext } from './UserContext';
import Button from '@mui/material/Button';

const Home = () => {
    const { loggedIn, logout } = useContext(UserContext);

    const logoutUser = () => {
        fetch('http://localhost:3000/logout', {
            method: "DELETE",
        })
        .then(() => {
            logout()
        })
    }

    if (loggedIn) {
        return (
            <div>
                <Button variant="contained">Generate Lead</Button>
                <br/><br/><br/><br/>
                <Button variant="contained">Logout</Button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home;