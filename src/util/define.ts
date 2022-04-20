import { TIconLinkDefine, TIconLinkDestination } from "../types/componentTypes";
import { default as texts }from "./texts.json";

const IconLinkDefine: TIconLinkDefine = {
    "facebook": texts.common.facebook,
    "instagram": texts.common.instagram,
    "linkedIn": texts.common.linkedIn,
    "yelp": texts.common.yelp
}
function IconLinkDest(dest: TIconLinkDestination) {
    return IconLinkDefine[dest as keyof TIconLinkDefine];
}

export {
    IconLinkDefine,
    IconLinkDest
}