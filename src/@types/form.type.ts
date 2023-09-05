import { RegisterOptions } from "react-hook-form"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RuleType = Omit<RegisterOptions<any, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
