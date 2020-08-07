import React, { useState } from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const [mobileMenu, setMobileMenu] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log(user)

    const clickLogOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
    }

    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const getClassColapseMenu = () => {
        let menuClass = 'collapse navbar-collapse';
        if (mobileMenu) {
            menuClass += ' show'
        }
        return menuClass;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button onClick={showMobileMenu} className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={getClassColapseMenu()} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    {user.Image && <img src={user.Image} width="30" height="30" className="d-inline-block align-top space-r-10 user-img-header" alt="" loading="lazy" />}
                    <span className="navbar-text space-r-10 user-name">{user.Name}</span>
                    <button className="btn btn-success my-2 my-sm-0" onClick={clickLogOut}>LogOut</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
