import React, { Suspense} from "react";
import { TIconLinkDestination } from "../../../types/componentTypes";
import { IconLinkDefine, IconLinkDest } from "../../../util/define";
import { container, hover, inner_container } from "./styles.module.css";

const Instagram = React.lazy(() => import("../../images/icons/InstagramIcon"));
const Facebook = React.lazy(() => import("../../images/icons/FacebookIcon"));
const LinkedIn = React.lazy(() => import("../../images/icons/LinkedInIcon"));
const Yelp = React.lazy(() => import("../../images/icons/YelpIcon"));

interface IconLinkProps {
    dest: TIconLinkDestination
}

export const IconLink: React.FC<IconLinkProps> = ({
    dest
}) => {
    const linkDest = IconLinkDest(dest);

    return (
        <div className={`${container} ${hover}`}>
            <a href={linkDest}>
                <div className={inner_container}>
                    <Suspense fallback={<div>Loading...</div>}>
                        { dest === "facebook" && <Facebook /> }
                        { dest == "instagram" && <Instagram /> }
                        { dest == "linkedIn" && <LinkedIn /> }
                        { dest == "yelp" && <Yelp />}
                    </Suspense>
                </div>
            </a>
        </div>
    );
}