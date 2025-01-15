import { QueryKeys } from "@/configs/query.config"
import { useQuery } from "@tanstack/react-query"
import { PropsWithChildren, useEffect } from "react"
import { AuthService } from "../../../services/auth/auth.service"
import { useUserStore } from "../../../stores/user.store"
import { MyLoading } from "../common/my-loading"

export function AuthWrapper({ children }: PropsWithChildren) {
    const { setCurrentUser } = useUserStore()
    const { isLoading, data } = useQuery(
        [QueryKeys.CURRENT_USER],
        () => {
            return AuthService.getLoggedInUser()
        },
        {
            retry: false,
        }
    )

    useEffect(() => {
        if (data) {
            setCurrentUser(data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    // error
    // if (error) {
    //     console.log("error in app wrapper: ", { error: (error as Error)?.message })
    //     return <>{children}</>
    // }

    // loading
    if (isLoading) {
        return <MyLoading />
    }
    // done
    return <>{children}</>
}
