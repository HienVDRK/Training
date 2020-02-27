import React, {Component} from 'react';

class Header extends Component {
render(){
  return (
  		<nav className="navbar navbar-inverse">
  			<div className="container-fluid">
  				<a className="navbar-brand" href="#">ReactJS</a>
  				<ul className="nav navbar-nav">
  					<li className="active">
  						<a href="#">Trang chu</a>
  					</li>
  					<li>
  						<a href="#">Danh muc san pham</a>
  					</li>
  				</ul>
  			</div>
  		</nav>
  );
  }
}

export default Header;
