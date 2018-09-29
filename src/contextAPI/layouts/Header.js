import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
                <div>
                    <ul className="navbar m-auto mr-0" style={{ listStyle: 'none' }}>
                        <li className="nav-item">
                            <a href="/" className="nav-link" style={{ color: '#fff' }}>Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;