import React from 'react';
import styled from '@emotion/styled';
// import CloseIcon from '@mui/icons-material/Close';
// import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
    open: boolean;
    children: React.ReactNode;
    location?: 'bottom' | 'side';
    onClose: () => void;
}

interface StyleProps {
    location: 'bottom' | 'side';
    open: boolean;
}
//  transform: ${props.open ? 'translateY(0)' : 'translateY(150%)'};
const Container = styled.div<StyleProps>`
    display: relative;
    position: fixed;
    transition: all 400ms ease-in;

    ${(props) =>
        props.location === 'bottom' &&
        `
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 8rem;
    `}

    ${(props) =>
        props.location === 'side' &&
        `
        
        top: 0;
        right: 0;

    `}
`;

function PageInfo({ open, children, location = 'bottom' }: Props) {
    return (
        <Container location={location} className="bg-slate-50 dark:bg-slate-400 h-6" open={open}>
            {children}
        </Container>
    );
}

export default PageInfo;
