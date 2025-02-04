import { useState } from "react";
const { StarRail } = require("starrail.js");


function User() {
    const [user, setUser] = useState("");
    const starRail = new StarRail();
    starRail.cached


    starRail.on("user", (user : User) => {

    function handleUser(): void {
        const userUUIDInput = document.getElementById("userUUIDInput");
        if (!userUUIDInput) {
            return;
        }
        const userUUID = (userUUIDInput as HTMLInputElement).value;
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