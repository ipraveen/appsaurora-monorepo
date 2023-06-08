import React, { MouseEventHandler } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
    name: 'setting';
    className?: string;
    onClick: MouseEventHandler<SVGSVGElement>;
}
function Icon({ name, className, onClick }: Props) {
    const iconProps = {
        className: `cursor-pointer ${className}`,
        onClick,
    };

    switch (name) {
        case 'setting':
            return <SettingsIcon {...iconProps} />;

        default:
            return null;
    }
}

export default Icon;
