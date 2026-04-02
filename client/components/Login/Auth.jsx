'use client';
import React from 'react';
import { useState } from 'react';

export default function Auth(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen((v) => !v);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [logReg, setLogReg] = useState(false); // false -> login, true register
    //TODO add second ps field for register.

    const log = () =>{
        setLogReg(false);
    }

    const reg = () =>{
        setLogReg(true);
    }

    //on succesful login or register should navigate back to the main page.
    async function handleLogin(e){
        e.preventDefault();

        try{
            //add auth conneciotn to backend.
        }
        catch(err){
            console.error("Network Error:", err);
        }
    }

    async function handleRegister(e) {
        e.preventDefault();

        try{

        }
        catch(e){
            console.error("Network Error:", err);
        }
    }
    
    return(
        <div>
            <div className="container mt-3">
                <div className="mt-4 p-5 text-white center-content">
                   <div className='row justify-content-center control-head'>
                        <div className='col-auto'>
                            <a className='btn' onClick={log}><h1>Login</h1></a>
                            <a className='btn' onClick={reg}><h1>Register</h1></a>
                        </div>
                   </div>
                   
                   {logReg == false &&
                   <form onSubmit={handleLogin}>
                        <div className='row'>
                            <label className='form-label'>Username</label>
                            <input 
                            type='email'
                            id='uName'
                            placeholder='Enter email'
                            className='form-control input-background'
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            />
                        </div>
                        <br />
                        <div className='row'>
                            <label className='form-label'>Password</label>
                            <input 
                            type='password'
                            id='pw'
                            placeholder='Enter password'
                            className='form-control input-background'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        </div>
                        <br />
                        <div className='row justify-content-center'>
                            <div className='col-auto'>
                                <button type='submit' className='btn rounded-pill submit-info'>Login</button>
                            </div>
                        </div>
                    </form> 
                    }

                    {logReg == true &&
                        <form onSubmit={handleRegister}>
                            <div className='row'>
                                <label className='form-label'>Username</label>
                                <input 
                                type='email'
                                id='uName'
                                placeholder='Enter email'
                                className='form-control input-background'
                                value={email}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                />
                            </div>
                            <br />
                            <div className='row'>
                                <label className='form-label'>Password</label>
                                <input 
                                type='password'
                                id='pw'
                                placeholder='Enter password'
                                className='form-control input-background'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                            <br />
                            <div className='row justify-content-center'>
                                <div className='col-auto'>
                                    <button type='submit' className='btn rounded-pill submit-info'>Register</button>
                                </div>
                            </div>
                    </form>
                    }
                </div>
            </div>
        </div>
    );
}