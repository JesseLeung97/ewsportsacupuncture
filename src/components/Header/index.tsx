import React, { useState, useEffect } from "react";
import { useReferredState } from "../../util/hooks";
import { container, logo_container, nav_items, sp_menu, sp_menu_hide, sp_menu_toggle, layout_show, header_hide, layout, layout_adjust, sp_logo_hide, sp_logo, nav_item, vertical_align, show_menu_top } from "./styles.module.css"
import { NavigationButton } from "../util/NavigationButton";
import { ScrollHandler } from "../util/ScrollHandler";
import { Logo } from "../Logo";
import texts from "../../util/texts.json";
import { Title } from "../util/Title";
import { Text } from "../util/Text";


export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isHeaderVisible, setIsHeaderVisible] = useReferredState<boolean>(false);
    const [isHeaderMenuVisible, setIsHeaderMenuVisible] = useReferredState<boolean>(true);

    function toggleDirction() {
        setIsHeaderVisible(!isHeaderVisible.current);
    }

    function toggleTop() {
        setIsHeaderMenuVisible(!isHeaderMenuVisible.current);
    }

    return (
        <ScrollHandler toggleDirection={toggleDirction} toggleTop={toggleTop}>
            <div className={`${sp_menu} ${isHeaderVisible.current ? "" : sp_menu_hide}`}>
                <NavigationButton destination={texts.pages.home.pageUrl} label="">
                    <Logo className={`${sp_logo} ${isMenuOpen ?  sp_logo_hide : ""}`} size={{regularSize: "small", smartphoneSize: "small"}} />
                </NavigationButton>
                <input className={sp_menu_toggle} type="checkbox" name="sp_menu" value="sp_menu" onChange={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>
            <div className={`${container} ${isHeaderVisible.current ? "" : header_hide}`} />
            <div className={`${layout} ${isMenuOpen ? layout_show : ""} ${isHeaderVisible.current ? "" : layout_adjust} ${isHeaderMenuVisible.current ? show_menu_top : ""}`}>
                    <NavigationButton destination={texts.pages.home.pageUrl} label="" className={logo_container}>
                        <Logo className={vertical_align} size={{regularSize: "small", smartphoneSize: "small"}} lineStyle="inline" clickable={true}/>
                        <Text className={vertical_align} text={texts.common.name}/>
                    </NavigationButton>
                    <div className={nav_items}>
                        <NavigationButton destination={texts.pages.home.pageUrl} label={texts.pages.home.pageTitle} className={nav_item}/>
                        <NavigationButton destination={texts.pages.practitioner.pageUrl} label={texts.pages.practitioner.pageTitle} className={nav_item}/>
                        <NavigationButton destination={texts.pages.testimonials.pageUrl} label={texts.pages.testimonials.pageTitle} className={nav_item}/>
                        <NavigationButton destination={texts.pages.faq.pageUrl} label={texts.pages.faq.pageTitle} className={nav_item}/>
                        <NavigationButton destination={texts.pages.services.pageUrl} label={texts.pages.services.pageTitle} className={nav_item}/>
                    </div>
                </div>
        </ScrollHandler>
    );
}