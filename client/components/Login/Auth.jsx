'use client';
import React, { useState } from 'react';
 import { supabase } from "../../lib/supabase";
export default function Auth(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logReg, setLogReg] = useState(false);

    const log = () => setLogReg(false);
    const reg = () => setLogReg(true);

    // ✅ LOGIN
    async function handleLogin(e){
        e.preventDefault();

        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if(error){
                console.log("Login Error:", error.message);
            } else {
                console.log("Login Success:", data);

                // 🔥 access token (IMPORTANT)
                const token = data.session.access_token;
                console.log("Access Token:", token);
            }
        }
        catch(err){
            console.error("Network Error:", err);
        }
    }

    // ✅ REGISTER
    async function handleRegister(e){
        e.preventDefault();

        try{
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });

            if(error){
                console.log("Register Error:", error.message);
            } else {
                console.log("Register Success:", data);

                const token = data.session?.access_token;
                console.log("Access Token:", token);
            }
        }
        catch(err){
            console.error("Network Error:", err);
        }
    }

    return(
        <div className="container mt-3">
            <div className="mt-4 p-5 text-white center-content">

                <div className='row justify-content-center control-head'>
                    <div className='col-auto'>
                        <button className='btn' onClick={log}><h1>Login</h1></button>
                        <button className='btn' onClick={reg}><h1>Register</h1></button>
                    </div>
                </div>

                {!logReg && (
                    <form onSubmit={handleLogin}>
                        <div className='row'>
                            <label>Email</label>
                            <input 
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control'
                                required
                            />
                        </div>

                        <div className='row mt-2'>
                            <label>Password</label>
                            <input 
                                type='password'
                                value={password}   // ✅ added
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control'
                                required
                            />
                        </div>

                        <div className='text-center mt-3'>
                            <button type='submit' className='btn'>Login</button>
                        </div>
                    </form>
                )}

                {logReg && (
                    <form onSubmit={handleRegister}>
                        <div className='row'>
                            <label>Email</label>
                            <input 
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control'
                                required
                            />
                        </div>

                        <div className='row mt-2'>
                            <label>Password</label>
                            <input 
                                type='password'
                                value={password}   // ✅ added
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control'
                                required
                            />
                        </div>

                        <div className='text-center mt-3'>
                            <button type='submit' className='btn'>Register</button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
}