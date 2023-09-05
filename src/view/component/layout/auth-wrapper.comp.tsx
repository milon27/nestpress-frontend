import { useQuery } from "@tanstack/react-query"
import { PropsWithChildren, useEffect } from "react"
import { AuthService } from "../../../service/auth/auth.service"
import { useUserStore } from "../../../store/user.store"
import MyLoading from "../common/my-loading.comp"

export default function AuthWrapper({ children }: PropsWithChildren) {
    const { setCurrentUser } = useUserStore()
    const { isLoading, data } = useQuery(
        ["currentUser"],
        () => {
            return AuthService.getLoggedInUser()
        },
        {
            retry: false,
            select(response) {
                const user = response?.data?.response
                return user || undefined
            },
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
