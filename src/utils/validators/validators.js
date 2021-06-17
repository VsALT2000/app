export const requiredField = (value) => value ? undefined : "Field is required"

export const maxLengthTC = (maxLength) => (value) => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
}
