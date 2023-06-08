import React, { ReactEventHandler, useEffect } from 'react';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DevicesIcon from '@mui/icons-material/Devices';

import systemIcon from './images/system.png';
import darkIcon from './images/dark.png';
import lightIcon from './images/light.png';

const ModeButton = ({
    className,
    children,
    text,
    onClick,
}: {
    className?: string;
    text: string;
    children: React.ReactNode;
    onClick: ReactEventHandler<HTMLButtonElement>;
}) => (
    <button
        className={`${className} p-2 cursor-pointer outline-none  border-0  flex grow flex-col gap-2 justify-between  items-center rounded-lg`}
        onClick={onClick}
    >
        {children}
        <b className="uppercase text-sm ">{text}</b>
    </button>
);

enum APPEARANCE_MODE {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light',
}
function ColorScheme() {
    const handleColorSchemeChange = (e: any) => {

        let mode = APPEARANCE_MODE.LIGHT;
        if ('theme' in localStorage) {
            mode = (localStorage.theme === APPEARANCE_MODE.DARK? APPEARANCE_MODE.DARK: APPEARANCE_MODE.LIGHT);
        }else{
            if (e.matches) {
                mode = APPEARANCE_MODE.DARK;
            }
        }

        handleModeChange(mode, false);
    };

    const handleModeChange = (mode: APPEARANCE_MODE, setStorage = true) => {
        setStorage && (localStorage.theme = mode);
        switch (mode) {
            case APPEARANCE_MODE.LIGHT:
                document.documentElement.classList.remove(APPEARANCE_MODE.DARK);
                break;
            case APPEARANCE_MODE.DARK:
                document.documentElement.classList.add(APPEARANCE_MODE.DARK);
                break;

            case APPEARANCE_MODE.SYSTEM:
                localStorage.removeItem('theme');
                document.documentElement.classList.remove(APPEARANCE_MODE.DARK);

                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                handleColorSchemeChange(mql);
                break;
        }
    };

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        handleColorSchemeChange(mql);
        mql.addEventListener('change', handleColorSchemeChange);

        return () => {
            mql.removeEventListener('change', handleColorSchemeChange);
        };
    }, []);

    return (
        <div className="border border-solid border-slate-300 py-2 px-6 rounded-lg">
            <h3 className="text-base text-slate-800 mb-2">Appearance</h3>
            <div className="flex gap-6 mb-4">
                <ModeButton
                    className="text-teal-800 border-teal-800  bg-slate-300"
                    text="System"
                    onClick={() => handleModeChange(APPEARANCE_MODE.SYSTEM)}
                >
                    <img src={systemIcon} />
                </ModeButton>
                <ModeButton
                    className="text-white bg-slate-500"
                    text="Dark"
                    onClick={() => handleModeChange(APPEARANCE_MODE.DARK)}
                >
                    <img src={darkIcon} />
                </ModeButton>
                <ModeButton
                    className="text-slate-800 bg-orange-50"
                    text="light"
                    onClick={() => handleModeChange(APPEARANCE_MODE.LIGHT)}
                >
                    <img src={lightIcon} />
                </ModeButton>
            </div>
        </div>
    );
}

export default ColorScheme;
