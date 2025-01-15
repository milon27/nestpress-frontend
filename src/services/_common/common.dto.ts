// *Request

// * response
export interface IResponse<T = undefined> {
    message: string
    statusCode: number
    response: T
}

export interface IErrorResponse {
    errorCode: string
    message: string
}
