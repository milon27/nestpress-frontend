import { cn } from "@/util/util"
import { Check, Loader2 } from "lucide-react"
import React from "react"
import { Button, ButtonProps } from "../ui/button"

interface IMyButton extends ButtonProps {
    children: React.ReactNode
    loading?: boolean
    withCheck?: boolean
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick: () => void | Promise<void>
}

const MyButton = React.forwardRef<HTMLButtonElement, IMyButton>(
    (
        {
            children,
            onClick,
            loading = false,
            variant,
            className,
            size,
            asChild,
            withCheck,
            startIcon,
            endIcon,
            ...props
        },
        ref
    ) => {
        return (
            <Button
                ref={ref}
                asChild={asChild}
                size={size}
                className={cn("hover:cursor-pointer", className)}
                onClick={() => {
                    onClick()
                }}
                variant={variant}
                disabled={loading}
                {...props}
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin mr-1" size={18} /> loading..
                    </>
                ) : (
                    <>
                        {withCheck && <Check size={18} className="mr-1" />}
                        {startIcon && <>{startIcon}</>}
                        {children}
                        {endIcon && <>{endIcon}</>}
                    </>
                )}
            </Button>
        )
    }
)
MyButton.displayName = "MyButton"

export default MyButton
