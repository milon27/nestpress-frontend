interface IMyTitle extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    large?: boolean
}

export default function MyTitle({ title, large = false, className }: IMyTitle) {
    return (
        <h1
            className={`font-poppins font-semibold text-primary ${
                large ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"
            }  ${className}`}
        >
            {title}
        </h1>
    )
}
