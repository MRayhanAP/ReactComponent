import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Form Login Rey</h2>
                <div className='cardbox'>
                    <h1>Tugas Ketiga</h1>
                    <label className="username">Username <input className="inputData" type="text" placeholder="Username"/></label>
                    <label className="password">Password <input className="inputData" type="password" placeholder="Password"/></label>
                    <button className="btn-login">Login</button>
                    <label><input type="checkbox" className="check"/> Remember Me</label>
                    <button className="btn-cancel">Cancel</button>
                </div>
            </div>
        )
    }
}
