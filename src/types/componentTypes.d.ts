type TIconLinkDestination = "facebook" |"instagram" | "linkedIn" | "yelp";
type TIconLinkDefine = {
    [key: TIconLinkDestination]: string
}

export {
    TIconLinkDestination,
    TIconLinkDefine
}