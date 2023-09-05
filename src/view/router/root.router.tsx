import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../page/home/home.page"
import LoginPage from "../page/login/login.page"
import NotFoundPage from "../page/not-found/not-found.page"
import ProtectedRoute from "./protected.route"
import PublicRoute from "./public.route"
import { RouteUrl } from "./url"

export default function RootRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={RouteUrl.HOME}
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={RouteUrl.LOGIN}
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />

                    <Route path={RouteUrl.NOT_FOUND} element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
