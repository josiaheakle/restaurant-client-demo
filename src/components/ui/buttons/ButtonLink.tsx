import React from 'react';
import {Link} from 'gatsby';

// @ts-ignore
import {buttonLink} from "./ButtonLink.module.css";

interface ButtonProps {
    title: string;
    link : string;
}

export const ButtonLink: React.FC<ButtonProps> = ({title, link}) => {
    return (
        <Link className={buttonLink} to={link}>
            {title}
        </Link>
    );
}