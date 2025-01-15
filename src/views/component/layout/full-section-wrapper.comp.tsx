import React from "react"

interface IFullSectionWrapper extends Omit<React.HTMLProps<HTMLDivElement>, "classID"> {
    children: React.ReactNode
}

export default function FullSectionWrapper({ children, className }: IFullSectionWrapper) {
    return <div className={`min-h-screen ${className}`}>{children}</div>
}
