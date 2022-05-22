import React from "react";
import { container, form_container, contact_info_container, input_small, input_large, input, icon_text_container, icon } from "./styles.module.css";
import { useForm, ValidationError } from '@formspree/react';
import { Text } from "../util/Text";
import { Title } from "../util/Title";
import texts from "../../util/texts.json";
import Phone from "../images/icons/Phone";
import Email from "../images/icons/Email";
import Location from "../images/icons/Location";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjvljvna");
  
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className={container}>
            <div className={contact_info_container}>
                <Title text={texts.pages.services.contactForm.formTitle} size={"small"}/>
                <Text text={texts.pages.services.contactForm.contactPrompt}/>
                <div className={icon_text_container}>
                    <Phone className={icon}/>
                    <Text text={texts.common.phoneNumber}/>
                </div>
                <div className={icon_text_container}>
                    <Email className={icon}/>
                    <Text text={texts.common.email}/>
                </div>
                <div className={icon_text_container}>
                    <Location className={icon}/>
                    <Text text={texts.common.address_1}/>
                </div>
                
                
                
            </div>
            <form className={form_container} onSubmit={handleSubmit}>
                <input
                    className={`${input} ${input_small}`}
                    placeholder={texts.pages.services.contactForm.formEmail}
                    id="email"
                    type="email" 
                    name="email"/>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}/>
                <input
                    className={`${input} ${input_small}`}
                    placeholder={texts.pages.services.contactForm.formName}
                    id="fullName"
                    type="text"
                    name="fullName"/>
                <ValidationError
                    prefix="FullName"
                    field="fullName"
                    errors={state.errors}/>
                <textarea
                    className={`${input} ${input_large}`}
                    placeholder={texts.pages.services.contactForm.formMessage}
                    id="message"
                    name="message"/>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}/>
                <button type="submit" disabled={state.submitting}>{texts.pages.services.contactForm.formSend}</button>
            </form>
        </div>
    );
}