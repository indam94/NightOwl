import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

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
            <div>
                
            </div>
        )
    }
}
