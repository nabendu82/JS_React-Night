import React from 'react'
import PersonButton from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonButton fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png" alt="firebase logo" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header