import {Avatar as AvatarIcon, ListItemIcon, MenuItem} from "@mui/material" ;
import Button from "@mui/material/Button";
import React from "react";
import {Menu} from "@mui/material";
import {Logout, Person, Settings} from "@mui/icons-material";
import { useAuth } from './contexts/AuthContext'
import {useNavigate} from "react-router-dom";

export default function Avatar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [error, setError] = React.useState('')
    const { currentUser, logout } = useAuth()

    const navigate = useNavigate()

    async function handleLogOut() {
        setError('')
        try {
            setAnchorEl(null);
            await logout()
            navigate('/')

        } catch {
            setError('Failed to log out')
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button onClick={handleClick}>
                <AvatarIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
                >
                <MenuItem onClick={handleClose}>
                    {currentUser?.email}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Person fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Log Out
                </MenuItem>
            </Menu>
        </div>
    )
}
