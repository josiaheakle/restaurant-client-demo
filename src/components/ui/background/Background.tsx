import React from 'react';

// @ts-ignore
import { background } from "./Background.module.css";

interface BackgroundProps {
    backgroundImg : string;
}

export const Background: React.FC<BackgroundProps> = ({children, backgroundImg}) => {
    console.log(backgroundImg)
    return (
        <div className={background} style={{backgroundImage : `url(${backgroundImg})`}}>
            {children}
        </div>

    );
}