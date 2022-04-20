import React from "react";
import { IconLink } from "../IconLink";
import { default as texts } from "../../util/texts.json";
import { container } from "./styles.module.css";

export const Footer = () => {
    return (
        <div className={container}>
            <h2>Footer</h2>
            <IconLink dest="facebook" />
            <IconLink dest="instagram" />
            <IconLink dest="linkedIn" />
            <IconLink dest="yelp" />
            <span>{texts.common.siteName}</span>
            <>
                <span>{texts.common.address_1}</span>
                <span>{texts.common.address_2}</span>
            </>
            <span>{texts.common.phoneNumber}</span>
            <span>{texts.common.email}</span>
            <span>{texts.common.copyright}</span>
        </div>
    );
}