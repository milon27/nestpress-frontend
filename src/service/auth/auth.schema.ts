import { ZodEmailString, ZodPasswordString } from "@/util/zod.util"
import { z } from "zod"

export const LoginWithEmailSchema = z
    .object({
        email: ZodEmailString,
        password: ZodPasswordString,
    })
    .strict()

export type ILoginWithEmailSchema = z.infer<typeof LoginWithEmailSchema>
