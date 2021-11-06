import { Avatar, Badge } from '@mui/material';
import React from 'react';
import './Navbar.css';

import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBar() {
    return (
        <div className="Navbar">
            <div className="NavbarWrapper">
                <div className="left">
                    <span className="logo">DashBoard</span>
                </div>
                
                <div className="right">
                    <div className="NavLogo">
                        <Badge badgeContent={4} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </div>
                    <div className="NavLogo">
                        <Badge badgeContent={3} color="primary">
                            <LanguageIcon />
                        </Badge>
                    </div>

                    <div className="NavLogo">
                            <SettingsIcon />
                    </div>
                    <div className="NavLogo">
                        {/* we can used both of them but upper one is from Material UI and the 2nd one is by own and it make some styling */}
                        {/* <Avatar>Is</Avatar> */}
                    <img className="avatar" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg" alt="Avatar" />
                    </div>

                </div>
            </div>
        </div>

            )
}
