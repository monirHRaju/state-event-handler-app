import { use } from "react";
import User from "./User";
import Manager from "./Manager";

export default function Users ({userPromise}) {
    const users = use(userPromise)
    
    return (
        
        
        <div className="section">
            <h3>Our Users</h3>
            {users.map(user => 
                <User key={user.id} user={user}></User>
            )}
            
            <h3>Our Managers</h3>
            {/* {users.map(user => 
                <User key={user.id} user={user}></User>
            )} */}


        </div>
    )
}
