import React from "react";
import { Theme } from "../Theme";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { width_wrapper, footer_width_wrapper, content_width_wrapper } from "./styles.module.css";

export const PageLayout: React.FC = ({ children }) => {
    return (
        <Theme>
            <Header />
            <div className={width_wrapper}>
                <div className={content_width_wrapper}>
                    { children }
                </div>
            </div>
            <div className={footer_width_wrapper}>
                <Footer />
            </div>
        </Theme>
    );
}