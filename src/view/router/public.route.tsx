import { PropsWithChildren } from "react"
import { useUserStore } from "../../store/user.store"
import { Navigate } from "react-router-dom"
import { RouteUrl } from "./url"

export default function PublicRoute({ children }: PropsWithChildren) {
    const user = useUserStore((store) => store.user)
    // todo: maybe read redirect url form query param and sent to that url
    if (user) return <Navigate to={RouteUrl.HOME} />
    return <>{children}</>
}
