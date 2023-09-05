import { z } from "zod"
import { Constant } from "../config/constant/common.constant"

export const ZodNameString = z
    .string()
    .trim()
    .regex(new RegExp(Constant.STRING_NUM_SPACE_PATTERN), "Only character, number and space are allowed")

export const ZodNumericString = z
    .string()
    .trim()
    .regex(new RegExp(Constant.STRING_NUM_PATTERN), "Only number is allowed")

export const ZodNumericNonNegString = z
    .string()
    .trim()
    .regex(new RegExp(Constant.STRING_NUM_PATTERN_NON_NEG), "Only positive number is allowed")

export const ZodSimpleString = z.string().trim().nonempty()

export const ZodEmailString = z.string().toLowerCase().trim().max(255).email("Invalid email address")

export const ZodPasswordString = z
    .string()
    .trim()
    .min(6, "minium 6 character long")
    .max(150, "max 150 character long")

export const ZodOnlyDateString = z
    .string()
    .trim()
    .datetime()
    .transform((value) => {
        return value.split("T")[0]
    })
