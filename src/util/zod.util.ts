import { Constant } from "@/config/constant/common.constant"
import { z } from "zod"

export const ZodNameString = z
    .string()
    .trim()
    .min(1, "It's required")
    .regex(new RegExp(Constant.STRING_NUM_SPACE_PATTERN), "Only character, number and space are allowed")

export const ZodNumericString = z
    .string()
    .trim()
    .min(1, "It's required")
    // .min(1).max(8) where we need 1 million use min(1).max(10)
    .regex(new RegExp(Constant.STRING_NUM_PATTERN), "Enter number")

export const ZodNumericNonNegString = z
    .string()
    .trim()
    .min(1, "It's required")
    // .min(1).max(7) where we need 1 million use min(1).max(9)
    .regex(new RegExp(Constant.STRING_NUM_PATTERN_NON_NEG), "Enter positive number")

export const ZodSimpleEmptyString = z.string().trim()

export const ZodSimpleString = z.string().trim().min(1, "It's required")

export const ZodEmailString = z
    .string()
    .toLowerCase()
    .trim()
    .max(255)
    .email("Invalid email address")
    .min(1, "It's required")

export const ZodPasswordString = z
    .string()
    .trim()
    .min(1, "It's required")
    .min(6, "minium 6 character long")
    .max(150, "max 150 character long")

export const ZodTimeString = z
    .string()
    .trim()
    .regex(/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/)
    .min(1, "It's Required")

export const ZodDateString = z.string().trim().datetime().min(1, "It's Required")

export const ZodOnlyDateString = z
    .string()
    .trim()
    .datetime()
    .min(1, "It's required")
    .transform((value) => {
        return value.split("T")[0]
    })

// at least update 1 refine method
export const ZodMin1UpdateRefine = (data: NonNullable<unknown>) => {
    const isAllUndefinedOrNull = Object.values(data).every((value) => value === undefined || value === null)
    if (isAllUndefinedOrNull) {
        return false
    }
    return true
}
