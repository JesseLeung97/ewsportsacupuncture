import React from "react";
import { red_test, blue_test } from "./styles.module.css"
import { Link } from "gatsby";

export const Header = () => {
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/practitioner">Practitioner</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/services">Services</Link>
        </>
    );
}