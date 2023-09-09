import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ link, title }) => {
    return (
        <Link to={`${link}`}>
            <li className="mb-4 border p-4 flex items-center justify-between hover:shadow-lg cursor-pointer">
                <div className="hover:shadow-lg cursor-pointer">
                    <h3 style={{fontSize: '32px', color: 'black'}}>{title}</h3>
                </div>
            </li>
        </Link>
    );
};

export default ProfileCard;