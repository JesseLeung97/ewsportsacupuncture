import React from "react";
import { IconLink } from "../util/IconLink";
import { Text } from "../util/Text";
import { default as texts } from "../../util/texts.json";
import { container, icon_link_container, info_container, copyright, dividing_line, info_item } from "./styles.module.css";

export const Footer = () => {
    return (
        <>
        <hr className={dividing_line}/>
        <div className={container}>
            <div className={icon_link_container}>
                <IconLink dest="facebook" />
                <IconLink dest="instagram" />
                <IconLink dest="linkedIn" />
                <IconLink dest="yelp" />
            </div>
            <div className={info_container}>
                <Text className={info_item} text={texts.common.address_1} lineStyle="block" size="small" />
                <Text className={info_item} text={texts.common.address_2} lineStyle="block" size="small" />
                <Text className={info_item} text={texts.common.phoneNumber} lineStyle="block" size="small" />
                <Text className={info_item} text={texts.common.email} lineStyle="block" size="small" />
            </div>
            <Text 
                className={`${copyright} ${info_item}`}
                text={texts.common.copyright} 
                lineStyle="block" 
                size="small" />
        </div>
        </>
    );
}