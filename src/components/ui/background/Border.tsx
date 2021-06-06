import React from 'react'

// @ts-ignore
import { border } from "./Background.module.css";

interface BorderProps {

}

export const Border: React.FC<BorderProps> = ({children}) => {
        return (

            <div className={border}>
                {children}
            </div>

        );
}