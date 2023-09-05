// common util functions
export const CommonUtil = {
    fakeAwait: (milliseconds: number = 1000) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
    toCamelCaseWithSpace: (inputString: string) => {
        // return inputString.replace(/[-_](.)/g, (_, char) => " " + char.toUpperCase())
        return inputString
            .replace(/[-_](.)/g, (_, char: string) => " " + char.toUpperCase())
            .replace(/\b\w/g, (char) => char.toUpperCase())
    },
    convertStringToNumber: (numberValue: string) => {
        const parsedNumber = parseFloat(numberValue)
        if (!isNaN(parsedNumber)) {
            return parsedNumber
        } else {
            return ""
        }
    },
}
