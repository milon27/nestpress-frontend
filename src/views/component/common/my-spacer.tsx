import React from "react"

interface IMySpacer extends Omit<React.HTMLProps<HTMLDivElement>, "classID"> {}

export function MySpacer({ className }: IMySpacer) {
    return <div className={`${className || "my-1.5"}`} />
}
