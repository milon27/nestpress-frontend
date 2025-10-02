import { RuleType } from "@/@types/form.type"
import React from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { MyLabel } from "../common/my-label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

interface IMyRadioGroup {
    name: string
    label: string
    options: { label: string; value: string }[]
    value: string
    onChange: (ck: string) => void
    error?: string
    myRef?: React.LegacyRef<HTMLInputElement>
}

export default function MyRadioGroup({ name, label, options, value, onChange, error, myRef }: IMyRadioGroup) {
    return (
        <>
            <div>
                <div ref={myRef} className="flex items-center gap-x-2">
                    <MyLabel label={label} />
                    <RadioGroup
                        className="flex items-center gap-x-2"
                        id={name}
                        onValueChange={onChange}
                        defaultValue={value}
                    >
                        {options.map((option) => {
                            return (
                                <div key={option.value} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.value} id={name + option.value} />
                                    <MyLabel className="m-0" htmlFor={name + option.value} label={option.label} />
                                </div>
                            )
                        })}
                    </RadioGroup>
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

interface IMyRadioGroupWithRHF<T extends FieldValues> extends Omit<IMyRadioGroup, "mRef" | "value" | "onChange"> {
    name: Path<T>
    control: Control<T>
    rules?: RuleType
}

export function MyRadioGroupWithRHF<T extends FieldValues>({
    label,
    options,
    name,
    control,
    rules,
}: IMyRadioGroupWithRHF<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules as any}
            render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
                return (
                    <MyRadioGroup
                        label={label}
                        options={options}
                        name={name}
                        myRef={ref}
                        value={value}
                        onChange={onChange}
                        error={error?.message}
                    />
                )
            }}
        />
    )
}
