import { createContext, useState } from 'react'
import config from '../config'

const lsk = config.localStorageKey
const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(lsk.isLoggedIn) === 'true');
    const [dark, setDark] = useState(localStorage.getItem(lsk.dark) === 'true');
    const [bookForm, setBookForm] = useState(localStorage.getItem(lsk.bookForm));

    const onLogout = () => {
        localStorage.setItem(lsk.isLoggedIn, 'false')
        setIsLoggedIn(false);
    };

    const onLogin = () => {
        localStorage.setItem(lsk.isLoggedIn, 'true')
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