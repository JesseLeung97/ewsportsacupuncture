import React, { Suspense} from "react";
import { TIconLinkDestination } from "../../types/componentTypes";
import { IconLinkDefine, IconLinkDest } from "../../util/define";
import { container, hover } from "./styles.module.css";

const Instagram = React.lazy(() => import("../images/InstagramIcon"));
const Facebook = React.lazy(() => import("../images/FacebookIcon"));
const LinkedIn = React.lazy(() => import("../images/LinkedInIcon"));
const Yelp = React.lazy(() => import("../images/YelpIcon"));


interface IIconLinkProps {
    dest: TIconLinkDestination
}

export const IconLink: React.FC<IIconLinkProps> = ({
    dest
}) => {
    const linkDest = IconLinkDest(dest);

    return (
        <div className={`${container} ${hover}`}>
            <a href={linkDest}>
                <Suspense fallback={<div>Loading...</div>}>
                    { dest === "facebook" && <Facebook /> }
                    { dest == "instagram" && <Instagram /> }
                    { dest == "linkedIn" && <LinkedIn /> }
                    { dest == "yelp" && <Yelp />}
                </Suspense>
            </a>
        </div>
    );
}