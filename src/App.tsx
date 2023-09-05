import { ToastContainer } from "react-toastify"
import RootRouter from "./view/router/root.router"
import { ErrorBoundary } from "react-error-boundary"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./config/query.config"
import ErrorPage from "./view/page/error/error.page"
import AuthWrapper from "./view/component/layout/auth-wrapper.comp"

// global css
import "react-toastify/dist/ReactToastify.css"

export default function App() {
    return (
        <div className="dark">
            {/* todo: className="dark" for dark mode*/}
            <div className="font-inter bg-gray-100 dark:bg-gray-900">
                <ErrorBoundary
                    fallbackRender={({ error, resetErrorBoundary }) => {
                        return (
                            <>
                                <ErrorPage error={error as Error} resetErrorBoundary={resetErrorBoundary} />
                            </>
                        )
                    }}
                >
                    <QueryClientProvider client={queryClient}>
                        <AuthWrapper>
                            <RootRouter />
                        </AuthWrapper>
                    </QueryClientProvider>
                    <ToastContainer />
                </ErrorBoundary>
            </div>
        </div>
    )
}
