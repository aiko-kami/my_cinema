import React from 'react';
import notFoundImg from '../css/images/notFound2.jpg' 

class NotFound extends React.Component {
	render(){
		return (
			<img src={notFoundImg} alt="Page Not Found"/>
		)
	}
}

export default NotFound;
