import React, { useEffect, useRef, useState } from 'react';

interface NavbarProps {
    links: Array<{
        title: string,
        link?: string, // '/route'
        elemId?: string
    }>;
}

export const Navbar: React.FC<NavbarProps> = ({links}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        //@ts-ignore
        const href : string = e.target.href;

        const elemId : string|false = (href.includes('#')? href.split('#')[1] :false);
        if (elemId) document.getElementById(elemId)?.scrollIntoView({behavior:'smooth'});
        console.log(elemId);
    }
    return (
        <ul className='navbar'>
            {links.map((link, index) => <li key={index}>
                <a onClick={handleClick} key={index} href={link.link?link.link:`#${link.elemId}`}>{link.title}</a>
            </li>)}
        </ul>
    );
}