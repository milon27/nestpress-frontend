type IVariantStyle = "primary" | "fill" | "outline"

const variantBtnBgStyles = {
    primary: "bg-primary hover:bg-primary-light",
    fill: "bg-gray-300 dark:bg-gray-700",
    outline: "bg-transparent border border-gray-400 dark:border-gray-600",
}

const variantBtnTextStyles = {
    primary: "text-gray-100",
    fill: "text-gray-700 dark:text-gray-300",
    outline: "text-gray-600 dark:text-gray-400",
}

interface IMyButton {
    title: string
    loading?: boolean
    variant?: IVariantStyle
    onClick: () => void | Promise<void>
}

export default function MyButton({ onClick, title, loading = false, variant = "primary" }: IMyButton) {
    return (
        <button
            disabled={loading}
            type="button"
            // text-gray-100 bg-primary hover:bg-primary-light
            className={`${variantBtnBgStyles[variant]} ${variantBtnTextStyles[variant]} focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5`}
            onClick={() => {
                void onClick()
            }}
        >
            {loading ? "loading.." : title}
        </button>
    )
}
