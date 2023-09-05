import React from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { RuleType } from "../../../../@types/form.type"

interface IMyCheckBox {
    name: string
    checked: boolean
    onChange: (ck: boolean) => void
    content: React.ReactNode
    error?: string
    myRef?: React.LegacyRef<HTMLInputElement>
}

export default function MyCheckBox({ name, content, checked, onChange, error, myRef, ...props }: IMyCheckBox) {
    return (
        <>
            <div>
                <div className="flex items-center">
                    <input
                        ref={myRef}
                        {...props}
                        id={name}
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                            onChange(e.target.checked)
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor={name}
                        className="select-none cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        {content}
                    </label>
                </div>
                {error && (
                    <div className="flex items-center mt-1">
                        <svg
                            className="mr-1 w-4 h-4 text-danger/80"
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
                        <p className="text-danger/80 mr-2">{error || "This field is required!"}</p>
                    </div>
                )}
            </div>
        </>
    )
}

interface IMyCheckBoxWithRHF<T extends FieldValues> extends Omit<IMyCheckBox, "mRef" | "checked" | "onChange"> {
    name: Path<T>
    control: Control<T>
    rules?: RuleType
}

export function MyCheckBoxWithRHF<T extends FieldValues>({
    content,
    name,
    control,
    rules,
}: IMyCheckBoxWithRHF<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
                return (
                    <MyCheckBox
                        name={name}
                        content={content}
                        myRef={ref}
                        checked={value || false}
                        onChange={onChange}
                        error={error?.message}
                    />
                )
            }}
        />
    )
}
