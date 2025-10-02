import { QueryClientProvider } from "@tanstack/react-query"
import { ErrorBoundary } from "react-error-boundary"
import { queryClient } from "./configs/query.config"
import { Toaster } from "./views/component/ui/sonner"
import ErrorPage from "./views/page/error/error.page"
import { RootRouter } from "./views/router/root.router"

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
                        <RootRouter />
                    </QueryClientProvider>
                    <Toaster richColors />
                </ErrorBoundary>
            </div>
        </div>
    )
}
