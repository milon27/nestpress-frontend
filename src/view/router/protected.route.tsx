import { PropsWithChildren } from "react"
import { useUserStore } from "../../store/user.store"
import { Navigate } from "react-router-dom"
import { RouteUrl } from "./url"

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const user = useUserStore((store) => store.user)
    if (user) return <>{children}</>
    return <Navigate to={RouteUrl.LOGIN} />
}
