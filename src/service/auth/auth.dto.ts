import { z } from "zod"
import { ZodEmailString, ZodPasswordString } from "../../util/zod.util"

// * Request object with zod
export const LoginWithEmailDto = z
    .object({
        email: ZodEmailString,
        password: ZodPasswordString,
    })
    .strict()

export type ILoginWithEmailDto = z.infer<typeof LoginWithEmailDto>

// * Response object
export interface ICurrentUser {
    id: string
    fullName: string
    email: string
    gender: string
    avatar?: string
    isEmailVerified: boolean
    lastLoggedIn: Date
    createdAt: Date
    updatedAt: Date
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}
