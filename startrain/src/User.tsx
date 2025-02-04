import { useState } from "react";
import StarRail from "starrail.js";

function User() {
    const [user, setUser] = useState(null);


    function handleUser(): void {
        const userUUID = document.getElementById("userUUIDInput").value;
        if(!userUUID) {
            return;
        }
        setUser(userUUID);
    }
    
    if(!user) {

        return (
            <>
                <input type="text" id="userUUIDInput"/>
                <button onClick={() => handleUser()}>Submit</button>
            </>
        );
    } else {
        return (
            <>
                <h1>{user}</h1>
            </>
        );
    }

}

export default User;