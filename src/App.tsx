import { QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"
import { ToastContainer } from "react-toastify"
import { queryClient } from "./configs/query.config"
import { AuthWrapper } from "./views/component/layout/auth-wrapper.comp"
import ErrorPage from "./views/page/error/error.page"
import { RootRouter } from "./views/router/root.router"

// global css
import "react-toastify/dist/ReactToastify.css"

export default function App() {
    return (
        <div className="">
            {/* todo: className="dark" for dark mode*/}
            {/* text-slate-950 dark:text-slate-50 */}
            <div className="min-h-screen font-inter bg-slate-50 dark:bg-slate-950 ">
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
