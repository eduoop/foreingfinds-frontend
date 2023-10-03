"use client"

import { User } from "@/models/user";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    signin: (email: string, password: string) => Promise<boolean>;
    singout: (token: string | null) => void;
    refreshContext: (user: User) => Promise<void>;
    refreshStorage: () => Promise<void>;
}

const GlobalContext = createContext<UserContextProps>(null!)

export const UserContextProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState<User | null>(null)
    const baseUrl = process.env.BASE_URL
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const recoverdUser = localStorage.getItem("user");

        if (recoverdUser) {
            setUser(JSON.parse(recoverdUser));
        }
    }, []);

    useEffect(() => {
        if (logged) {
            const recoverdUser = localStorage.getItem("user");

            if (recoverdUser) {
                setUser(JSON.parse(recoverdUser));
            }
        }
    }, [logged])

    const signin = async (email: string, password: string) => {

        const data = await fetch(`${baseUrl}/auth`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const res = await data.json()

        if (data.status === 200) {
            // setUser(res.user)

            const loggedUser = res.user
            setToken(res.token.token)

            localStorage.setItem("user", JSON.stringify(loggedUser));

            setLogged(true)

            return true
        }
        return false
    };

    const setToken = (token: string) => {
        localStorage.setItem("authToken", token);
    };

    const singout = async () => {
        const token = localStorage.getItem(`authToken`)

        await fetch(`${baseUrl}/auth`, {
            method: 'delete',
            headers: {
                'Authorization': `bearer ${token}`,
            },
        }).then(() => {
            localStorage.removeItem("user");
            setToken("");
            setUser(null);
            setLogged(false)
            return true
        }).catch(() => {
            return false
        })
    };

    const refreshContext = async (user: User) => {
        setUser(user);
        const loggedUser = user;
        localStorage.setItem("user", JSON.stringify(loggedUser));
    }

    const refreshStorage = async () => {
        const loggedUser = user;
        console.log('refresh', user)
        localStorage.setItem("user", JSON.stringify(loggedUser));
    }

    return (
        <GlobalContext.Provider value={{ user, setUser, signin, singout, refreshContext, refreshStorage }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalUserContext = () => useContext(GlobalContext);
