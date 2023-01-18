import React, { useState } from "react";
import { useRouter } from "next/router";

const viewLeagues = () => {
    const [leagues, setLeagues] = useState([]);
    const [newLeagueName, setNewLeagueName] = useState("");
    const router = useRouter();

    const handleCreateLeague = () => {
        const newLeague = {
            name: newLeagueName,
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        };
        setLeagues([...leagues, newLeague]);
        setNewLeagueName("");
    };

    const handleJoinLeague = (id) => {
        router.push(`/leagues/${id}`);
    };

    return (
        <div className="view-leagues-container">
            <h1 className="heading-primary" >View Leagues</h1>
            <div className="create-league-container" >
                <input
                    className="input"
                    type="text"
                    value={newLeagueName}
                    onChange={(e) => setNewLeagueName(e.target.value)}
                    placeholder="Enter League Name"
                />
                <button className="button" onClick={handleCreateLeague}>Create League</button>
            </div>
            <div className="existing-leagues-container" >
                <h2 className="heading-secondary" >Existing Leagues:</h2>
                <ul className="existing-league" >
                    {leagues.map((league) => (
                        <li key={league.id} onClick={() => handleJoinLeague(league.id)}>
                            {league.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default viewLeagues;
