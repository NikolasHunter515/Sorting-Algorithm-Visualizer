"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
export default function Auth(){
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logReg, setLogReg] = useState(false); // false -> login, true register
    const [errorMsg, seterrorMsg] = useState("");
    const [successMsg, setsuccessMsg] = useState("");


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
                seterrorMsg("account not found")
            } else {
                console.log("Login Success:", data);
                seterrorMsg("")

                // 🔥 access token (IMPORTANT)
                const token = data.session.access_token;
                router.push("/");
                //console.log("Access Token:", token);
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
                setsuccessMsg("email already registered")
            } else {
                console.log("Register Success:", data);
                setsuccessMsg("Registration successful")
                const token = data.session?.access_token;
                log();
                //console.log("Access Token:", token);
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

                        {errorMsg &&(
                                 <div className="text-danger text-center mb-3">
                                     {errorMsg}
                            </div>
                        )}
                        <div className='row'>
                            <label>Email</label>
                            <input 
                                type='email'
                                value={email}
                                id='uName'
                                placeholder='Enter email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control input-background'
                                required
                            />
                        </div>

                        <div className='row mt-2'>
                            <label>Password</label>
                            <input 
                                type='password'
                                value={password}
                                id='pw'
                                placeholder='Enter password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control input-background'
                                required
                            />
                        </div>

                        <div className='text-center mt-3'>
                            <button type='submit' className='btn rounded-pill submit-info'>Login</button>
                        </div>
                    </form>
                )}

                {logReg && (
                    <form onSubmit={handleRegister}>
                        {successMsg && (
                            <div className="text-danger text-center mb-3">
                                {successMsg}
                            </div>
                        )}
                        <div className='row'>
                            <label className='form-label'>Email</label>
                            <input 
                                type='email'
                                id='uName'
                                value={email}
                                placeholder='Enter email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control input-background'
                                required
                            />
                        </div>

                        <div className='row mt-2'>
                            <label>Password</label>
                            <input 
                                type='password'
                                value={password} 
                                id='pw'
                                placeholder='Enter password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control input-background'
                                required
                            />
                        </div>

                        <div className='text-center mt-3'>
                            <button type='submit' className='btn rounded-pill submit-info'>Register</button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
}