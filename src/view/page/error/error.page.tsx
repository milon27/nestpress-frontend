import { MessageConstant } from "../../../config/constant/message.constant"

interface IErrorPage {
    error: Error
    resetErrorBoundary?: () => void
}

export default function ErrorPage({ error, resetErrorBoundary }: IErrorPage) {
    return (
        <div>
            <h1>{MessageConstant.SOMETHING_WENT_WRONG}</h1>
            <p>{error?.message}</p>
            <button
                onClick={() => {
                    resetErrorBoundary && resetErrorBoundary()
                }}
            >
                Try again
            </button>
        </div>
    )
}
