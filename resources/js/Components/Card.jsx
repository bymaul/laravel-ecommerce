import React from "react";

function Card({ children }) {
    return <div className="border rounded-lg overflow-hidden">{children}</div>;
}

function Header({ children }) {
    return <div className="bg-gray-100 border-b px-4 py-2.5">{children}</div>;
}

function Body({ children }) {
    return <div className="p-4">{children}</div>;
}

function Table({ children }) {
    return <div>{children}</div>;
}

function Footer({ children }) {
    return <div className="bg-gray-100 border-t px-4 py-2.5">{children}</div>;
}

Card.Header = Header;
Card.Body = Body;
Card.Table = Table;
Card.Footer = Footer;
export default Card;
