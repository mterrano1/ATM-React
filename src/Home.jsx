import React, { useContext, useState } from "react";
import { UserContext } from './UserContext';
import Button from '@mui/material/Button';

const Home = () => {
    const { loggedIn, logout, user } = useContext(UserContext);

    const logoutUser = () => {
        fetch('http://localhost:3000/logout', {
            method: "DELETE",
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    const generateLead = () => {
        fetch('https://webhooks.workato.com/webhooks/rest/db8c0839-e10f-4367-b3e5-7587206bfdeb/generate-lead', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user),
        })
        .then(r => r.json())
        .then(user => console.log(user))
    }

    if (loggedIn) {
        return (
            <div>
                <h1>Home Page</h1>
                <Button onClick={generateLead} variant="contained">Generate Lead</Button>
                <br/><br/><br/><br/>
                <Button variant="contained">Logout</Button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Home Page</h1>
                {/* <Button variant="contained">Lead</Button> */}
            </div>
        )
    }
}

export default Home;