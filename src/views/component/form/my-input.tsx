import { RuleType } from "@/@types/form.type"
import React from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"

type TypeInputAndTextArea = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IMyInput extends TypeInputAndTextArea {
    label?: string
    error?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    myRef?: React.LegacyRef<any>
    isTextArea?: boolean
}

export default function MyInput({ myRef, label, error, isTextArea = false, ...others }: IMyInput) {
    return (
        <div className="flex flex-col text-gray-600 dark:text-gray-400 w-full">
            {(label || others.placeholder) && (
                <label
                    htmlFor={others.name}
                    className="cursor-pointer pl-1.5 mb-1 text-sm text-gray-600 dark:text-gray-400"
                >
                    {label || others.placeholder}
                </label>
            )}
            {isTextArea ? (
                <textarea
                    id={others.name}
                    rows={3}
                    ref={myRef}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {...(others as any)}
                    //focus:ring-2 focus:ring-primary-light
                    className={`bg-gray-50 dark:bg-gray-900 py-2.5 px-4 rounded-xl focus:outline-none  ${
                        error ? "ring-2 ring-red-500" : ""
                    }`}
                ></textarea>
            ) : (
                <input
                    id={others.name}
                    ref={myRef}
                    {...others}
                    placeholder={others.placeholder || label}
                    //focus:ring-2 focus:ring-primary-light
                    className={`bg-gray-50 dark:bg-gray-900 py-2.5 px-4 rounded-md focus:outline-none ring-1 ring-gray-200 ${
                        error ? "ring-2 ring-red-500" : ""
                    }`}
                />
            )}

            {error && (
                <div className="flex items-center mt-1 mx-2">
                    <svg
                        className="mr-1 w-4 h-4 text-red-500/80"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // height="12px"
                        // width="12px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={12} y1={16} x2={12} y2={12} />
                        <line x1={12} y1={8} x2="12.01" y2={8} />
                    </svg>
                    <p className="text-red-500/80 mr-2">{error || "This field is required!"}</p>
                </div>
            )}
        </div>
    )
}

interface IMyInputWithRHF<T extends FieldValues> extends Omit<IMyInput, "mRef"> {
    name: Path<T>
    control: Control<T>
    rules?: RuleType
}

export function MyInputWithRHF<T extends FieldValues>({ name, control, rules, ...others }: IMyInputWithRHF<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules as any}
            render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => {
                let updatedValue = value ? value + "".toString() : ""
                if (others.type === "number") {
                    updatedValue = value ? (value as number).toString() : ""
                } else if (others.type === "date") {
                    updatedValue = value ? (value as Date).toISOString().split("T")[0] : "" // Format as "YYYY-MM-DD"
                }

                return (
                    <MyInput
                        name={name}
                        myRef={ref}
                        value={updatedValue}
                        onChange={(e) => {
                            if (others.type === "number") {
                                onChange(e.target.valueAsNumber)
                            } else if (others.type === "date") {
                                onChange(e.target.valueAsDate)
                            } else {
                                onChange(e)
                            }
                        }}
                        onBlur={onBlur}
                        error={error?.message}
                        {...others}
                    />
                )
            }}
        />
    )
}
