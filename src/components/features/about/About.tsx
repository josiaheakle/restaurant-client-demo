import * as React from 'react';

// @ts-ignore
import {aboutContainer as style} from "./About.module.css";

interface AboutProps {
    
}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div className={style}>
            <h1>hello</h1>
        </div>
    );
}

export {About};