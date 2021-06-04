import React from 'react';

interface NavbarProps {
    links: Array<{
        title: string,
        link: string, // '/route'
    }>;
}

export const Navbar: React.FC<NavbarProps> = ({links}) => {
        return (
            <ul className='navbar'>
                {links.map((link, index) => <li key={index}>
                    <a href={link.link}>{link.title}</a>
                </li>)}
            </ul>
        );
}