import { ZodEmailString, ZodNameString, ZodPasswordString, ZodSimpleString } from "@/util/zod.util"
import { z } from "zod"

export const LoginWithEmailSchema = z
    .object({
        email: ZodEmailString,
        password: ZodPasswordString,
    })
    .strict()

export type ILoginWithEmailSchema = z.infer<typeof LoginWithEmailSchema>

export const LoginWithGoogleSchema = z
    .object({
        idToken: ZodSimpleString,
    })
    .strict()
export type ILoginWithGoogleSchema = z.infer<typeof LoginWithGoogleSchema>

// * register
export const GenderEnum = ["male", "female"] as const
export type IGenderEnum = (typeof GenderEnum)[number]

const CreateUserDto = z.object({
    fullName: ZodNameString.min(2).max(200),
    email: ZodEmailString,
    password: ZodPasswordString,
    confirmPassword: ZodPasswordString, // extra in frontend
    gender: z.enum(GenderEnum).default("male").optional(),
    fcmToken: ZodSimpleString.max(255).nullish(),
    timeZone: ZodSimpleString,
})

export enum RegisterProvider {
    simple = "simple",
    google = "google",
}

const SimpleRegisterSchema = z
    .object({
        provider: z.literal(RegisterProvider.simple),
        user: CreateUserDto.refine(
            (data) => {
                return data.password === data.confirmPassword
            },
            {
                message: "password did not match",
                path: ["confirmPassword"],
            }
        ),
    })
    .strict()
const GoogleRegisterSchema = z
    .object({
        provider: z.literal(RegisterProvider.google),
        user: CreateUserDto.partial({
            password: true,
            confirmPassword: true,
        }),
    })
    .strict()

export const RegisterSchema = z.discriminatedUnion("provider", [SimpleRegisterSchema, GoogleRegisterSchema])
export type IRegisterSchema = z.infer<typeof RegisterSchema>

// * forget and reset password
export const ForgetPasswordSchema = z.object({
    email: ZodEmailString,
})
export type IForgetPasswordSchema = z.infer<typeof ForgetPasswordSchema>

export const ResetPasswordSchema = z
    .object({
        code: ZodNameString.length(6),
        password: ZodPasswordString,
        confirmPassword: ZodPasswordString, // extra in frontend
    })
    .refine(
        (data) => {
            return data.password === data.confirmPassword
        },
        {
            message: "password did not match",
            path: ["confirmPassword"],
        }
    )

export type IResetPasswordSchema = z.infer<typeof ResetPasswordSchema>
