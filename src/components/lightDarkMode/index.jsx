import UseThemeToggle from "../../customHook/useThemeToggle";

export default function LightDarkMode() {
    const [theme, toggleTheme] = UseThemeToggle()

    return <div className={'light-dark-mode'} data-theme={theme || 'light'}>
        <div className='container'>
            <p>Theme is set to : {theme}</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    </div>
}
