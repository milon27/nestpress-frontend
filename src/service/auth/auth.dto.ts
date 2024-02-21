import { DateString } from "@/@types/common.type"
import { ILoginWithEmailSchema } from "./auth.schema"

// * Request object with zod
export type ILoginWithEmailDto = ILoginWithEmailSchema

// * Response object
export interface ICurrentUser {
    id: string
    timeZone: string
    plaidAccessKey?: string | null
    accessToken: string
}

export interface ILoggedInUser extends ICurrentUser {
    fullName: string
    phone?: string
    email: string
    avatar?: string
    isEmailVerified: boolean
    timeZone: string
    fcmToken?: string
    lastLoggedIn: DateString
    createdAt: DateString
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}
