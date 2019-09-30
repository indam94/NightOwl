import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import {FaAlignRight} from 'react-icons/fa'
import logo from '../resources/img/NightOwlLogo6.png'

export default class Navbar extends Component {

    state={
        isOpen:false
    }

    handleToggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">

                <Link to = "/" className='navbar-brand'>
                    <img src={logo} alt = "Night Owl"/>
                </Link>
                {/* <button 
                    type='button' 
                    className="nav-btn"
                    onClick={this.handleToggle}
                >
                    <FaAlignRight className='nav-icon'></FaAlignRight>
                </button> */}


                <div className="collapse navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav">
                        <li className='nav-link'>
                            <Link className='navbar-link text-white' to = '/'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link className='navbar-link text-white' to = '/Detail'>
                                Detail
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
