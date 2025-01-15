import React from "react"

interface IFullSectionWrapper extends Omit<React.HTMLProps<HTMLDivElement>, "classID"> {
    children: React.ReactNode
}

export function FullSectionWrapper({ children, className }: IFullSectionWrapper) {
    return <div className={`min-h-screen ${className}`}>{children}</div>
}
