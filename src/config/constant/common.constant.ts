export const Constant = {
    STRING_NUM_SPACE_PATTERN: "^[a-zA-Z0-9 _-]+$",
    STRING_NUM_PATTERN: `^-?\\d+(\\.\\d+)?$`, //^[0-9.]+$
    STRING_NUM_PATTERN_NON_NEG: `^\\d+(\\.\\d+)?$`, //^[0-9.]+$
    MAX_NUM_AMOUNT: 1_000_000, // one million
} as const
