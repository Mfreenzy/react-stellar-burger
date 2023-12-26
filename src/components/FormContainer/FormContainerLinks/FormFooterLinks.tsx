import React from "react";
import { FormFooterLinksProps } from "../../../types/types";


export function FormFooterLinks({infoText, children}: FormFooterLinksProps) {
    return (
        <>
        <p className="text text_type_main-default text_color_inactive">
            {infoText} <span>{children}</span>
        </p>
        </>
    )
}