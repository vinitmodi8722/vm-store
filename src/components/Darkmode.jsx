import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Darkmode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") || "light"
    );
    const element = document.documentElement;

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark"); 
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleDarkMode = (checked) => {
        setTheme(checked ? "dark" : "light"); 
    };

    return (
        <DarkModeSwitch
            checked={theme === "dark"}
            onChange={toggleDarkMode}
            size={30}
        />
    );
};
export default Darkmode;
