const getImageUrl = (imageName : string) : string => {
    return `${process.env.GATSBY_API_URL}${imageName}`;
}

export {getImageUrl};