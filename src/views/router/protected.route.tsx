import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { useUser } from "../../stores/user.store"
import { MyLoading } from "../component/common/my-loading"
import { RouteUrl } from "./url"

export function ProtectedRoute({ children }: PropsWithChildren) {
    const { user, loading } = useUser()

    if (loading) {
        return <MyLoading />
    }

    if (!user) return <Navigate to={RouteUrl.LOGIN} />
    return <>{children}</>
}
