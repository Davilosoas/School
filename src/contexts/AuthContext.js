import React from 'react'
import { createContext, useState } from "react";
import { setCookie } from 'nookies'
import axios from 'axios';
import { router } from 'next/router'


export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const isAuthenticated = !!user;

    async function signIn () {
        const test = 1
        const response = await axios.post('http://localhost:3001/signIn/', { test })
        const { token, user} = response.data
        setCookie(undefined, 'token', token, {
           maxAge: 60 * 60 * 1 
        })
        setUser(user)
        router.push('/grades')
}
    return(

        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}