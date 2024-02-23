import { DateString } from "@/@types/common.type"
import {
    IForgetPasswordSchema,
    ILoginWithEmailSchema,
    ILoginWithGoogleSchema,
    IRegisterSchema,
    IResetPasswordSchema,
    RegisterProvider,
} from "./auth.schema"

// * Request object with zod
export type ILoginWithEmailDto = ILoginWithEmailSchema & {
    fcmToken?: string
}

export type ILoginWithGoogleDto = ILoginWithGoogleSchema & {
    fcmToken?: string
}

export type IRegisterDto = Omit<IRegisterSchema, "provider"> & {
    provider: RegisterProvider
}

export type IForgetPasswordDto = IForgetPasswordSchema

export type IResetPasswordDto = Omit<IResetPasswordSchema, "confirmPassword">

// * Response object
export interface ICurrentUser {
    id: string
    timeZone: string
    plaidAccessKey?: string | null
    accessToken: string
}

export interface ILoginWithGoogleResponse {
    email: string
    name: string
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
