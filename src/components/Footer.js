import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <SocialIcon url="https://github.com/kaylanorris" className="mr-2"/>
                <SocialIcon url="https://www.linkedin.com/in/kayla-norris/" />
                <SocialIcon url="https://twitter.com/kayla_w_n" className="ml-2"/>

                </div>

        </div>
    )
}