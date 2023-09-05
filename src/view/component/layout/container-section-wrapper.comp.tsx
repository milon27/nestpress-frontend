import React from "react"

interface IContainerSectionWrapper extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

export default function ContainerSectionWrapper({ children, className }: IContainerSectionWrapper) {
    return (
        <div className={`container mx-auto min-h-screen py-6 md:py-8`}>
            {/* here using class name we can pass horizontal padding */}
            <div className={className}>{children}</div>
        </div>
    )
}
