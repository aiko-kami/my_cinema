import React from 'react';
import myCinemaLogo from '../css/images/myCinemaLogo.png' 


class Header extends React.Component {
	render() {
		return (
			<a href="http://localhost:3000/"><img className="headerImage" src={myCinemaLogo} alt="Logo"/></a>
		)
	}
}

export default Header;