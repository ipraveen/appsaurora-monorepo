import React from 'react';
import Drawer from '../Drawer';
import ColorScheme from './ColorScheme';

interface Props {
    open: boolean;
    onClose: () => void;
}
function SettingsDrawer({ open, onClose }: Props) {
  
    return (
        <Drawer open={open} title="Settings" onClose={onClose}>
            <ColorScheme />
        </Drawer>
    );
}

export default SettingsDrawer;
