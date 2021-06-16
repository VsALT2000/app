export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthTC = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

/*
export const emptyField = (value) => {
    if (value) return undefined;
    return "Field is required";
}*/
