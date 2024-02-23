import { QueryKeys } from "@/config/query.config"
import { useQuery } from "@tanstack/react-query"
import { PropsWithChildren, useEffect } from "react"
import { AuthService } from "../../../service/auth/auth.service"
import { useUserStore } from "../../../store/user.store"
import MyLoading from "../common/my-loading.comp"
import { ICurrentUser } from "@/service/auth/auth.dto"

export default function AuthWrapper({ children }: PropsWithChildren) {
    const { setCurrentUser } = useUserStore()
    const { isLoading, data } = useQuery(
        [QueryKeys.CURRENT_USER],
        () => {
            return AuthService.getLoggedInUser()
        },
        {
            retry: false,
            select(response) {
                if (response)
                    return {
                        id: response.id,
                        accessToken: response.accessToken,
                        timeZone: response.timeZone,
                        plaidAccessKey: response.plaidAccessKey,
                    } satisfies ICurrentUser
                return undefined
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
