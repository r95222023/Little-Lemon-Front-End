import { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import config from '../config'

const lsk = config.localStorageKey
const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dark, setDark] = useState(localStorage.getItem(lsk.dark)==='true');
    const [bookForm, setBookForm] = useState(localStorage.getItem(lsk.bookForm));

    const onLogout = () => {
        setIsLoggedIn(false);
    };

    const onLogin = () => {
        setIsLoggedIn(true);
    };

    const toggleDark = () => {
        localStorage.setItem(lsk.dark, !dark)
        setDark(!dark)
    }

    const onBookFormSubmit = (newBookForm) =>{
        setBookForm(newBookForm)
        localStorage.setItem(lsk.bookForm, JSON.stringify(newBookForm))
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            dark,
            toggleDark,
            onLogout,
            onLogin,
            bookForm,
            onBookFormSubmit
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;