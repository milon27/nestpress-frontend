import React from "react"

interface IMyDesc extends React.HTMLProps<HTMLParagraphElement> {
    isError?: boolean
}

export default function MyDesc({ children, className, isError = false }: IMyDesc) {
    return (
        <p className={`${isError ? "text-danger" : "text-gray-800 dark:text-gray-200"}  ${className}`}>
            {children}
        </p>
    )
}
