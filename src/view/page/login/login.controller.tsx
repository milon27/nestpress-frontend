import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AuthService } from "../../../service/auth/auth.service"
import { useUserStore } from "../../../store/user.store"
import { toast } from "react-toastify"
import { ErrorUtil } from "../../../util/error.util"
import { ILoginWithEmailSchema, LoginWithEmailSchema } from "./../../../service/auth/auth.schema"

export const useLoginController = () => {
    const [loading, setLoading] = useState(false)
    const setCurrentUser = useUserStore((state) => state.setCurrentUser)

    const { control, handleSubmit } = useForm<ILoginWithEmailSchema>({
        resolver: zodResolver(LoginWithEmailSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (input: ILoginWithEmailSchema) => {
        try {
            const userResponse = await AuthService.loginWithEmail(input)
            setCurrentUser(userResponse)
            toast("successfully login")
        } catch (error) {
            console.error("login with email:onSubmit:->", error)
            const message = ErrorUtil.getErrorMessage(error as Error).message
            toast(message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, control, handleSubmit: handleSubmit(onSubmit) }
}
