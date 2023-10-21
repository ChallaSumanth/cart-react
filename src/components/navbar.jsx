import React, { Component } from 'react';

//Stateless functional Componenet
const NavBar = ({totalCounters}) =>{
    return (
            <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
            Navbar{" "} 
            <span className="badge badge-pill badge-seconday">
            {totalCounters}</span>
            </a>
            </nav>
            );
}
// class Navbar extends Component {
//     render() { 
//         return (
//             <nav className='navbar navbar-light bg-light'>
//                 <a className='navbar-brand' href='#'>
//                     Navbar <span className="badge badge-pill badge-seconday">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
export default NavBar;