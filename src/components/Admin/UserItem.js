import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/AdminDash.css'


const UserItem = ({username, email}) => {
    return ( 
        <div className="userItem">
            <span>{username}</span>
            <span>{email}</span>
            <span>
                <Link style={{textDecoration:'none'}} to="/">KYC | Activity</Link>
            </span>
        </div> 
    );
}
 
export default UserItem;