import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { width_wrapper } from "./styles.module.css";
import "../../util/theme.css";

export const PageLayout: React.FC = ({ children }) => {
    return (
        <div className={width_wrapper}>
            <Header />
            { children }
            <Footer />
        </div>
    );
}