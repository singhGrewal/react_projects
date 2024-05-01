import {useEffect, useState} from "react";
import './styles.css'

export default function UseThemeToggle() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        const currentTheme = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', currentTheme)
        setTheme(currentTheme)
    }

    useEffect(() => {
        const savedThemeInLocalStorage = localStorage.getItem('theme')
        if (savedThemeInLocalStorage) {
            setTheme(savedThemeInLocalStorage)
        } else {
            setTheme(theme)
        }

    }, []);
    return [theme, toggleTheme]
}

// Improvement
// TO avoid flicker use useEffect directly into useState

// const [theme, setTheme] = useState(() => {
//     const savedThemeInLocalStorage = localStorage.getItem('theme')
//     if (savedThemeInLocalStorage) {
//         return savedThemeInLocalStorage
//     } else {
//         return theme
//     }
// });
