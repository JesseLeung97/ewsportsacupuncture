type TIconLinkDestination = "facebook" |"instagram" | "linkedIn" | "yelp";
type TIconLinkDefine = {
    [key: TIconLinkDestination]: string
}
type TSize = "small" | "medium" | "large";
type TTextAligment = "left" | "right" | "center";
type TResponsiveTextAlignment = { regularAlignment: TTextAligment, smartphoneAlignment: TTextAligment }
type TScrollDirection = "up" | "down";

export {
    TIconLinkDestination,
    TIconLinkDefine,
    TSize,
    TTextAligment,
    TResponsiveTextAlignment,
    TScrollDirection
}