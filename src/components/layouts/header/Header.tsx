import React from "react";
import { Navbar } from "./Navbar";

import "./Header.css";

interface HeaderProps {
  pageTitle?: string;
  icon?: {
    src: string;
    alt: string;
  };
  pages?: Array<{
    title: string;
    link?: string;
    elemId?:string;
  }>;
}

export const Header: React.FC<HeaderProps> = ({ pages, pageTitle, icon }) => {
  return (
    <header className='header'>
      {icon ? <img src={icon.src} alt={icon.alt}></img> : null}
      {pageTitle ? <h3>{pageTitle}</h3> : null}
      {pages ? (
        <nav>
          <Navbar links={pages} />
        </nav>
      ) : null}
    </header>
  );
};
