import {useState} from "react";
import './styles.css'

export default function UseThemeToggle() {
    const [theme, setTheme] = useState(() => {
        const savedThemeInLocalStorage = localStorage.getItem('theme')
        if (savedThemeInLocalStorage) {
            return savedThemeInLocalStorage || 'light'
        } else {
            return theme
        }
    });

    const toggleTheme = () => {
        const currentTheme = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', currentTheme)
        setTheme(currentTheme)
    }
    return [theme, toggleTheme]
}
