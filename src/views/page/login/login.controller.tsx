import { authClient } from "@/lib/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ErrorUtil } from "../../../util/error.util"
import { ILoginSchema, LoginSchema } from "./login.schema"

export const useLoginController = () => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<ILoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (input: ILoginSchema) => {
        try {
            await authClient.signIn.email({
                email: input.email,
                password: input.password,
            })
            toast.success("successfully login")
        } catch (error) {
            console.error("login with email:onSubmit:->", error)
            const message = ErrorUtil.getErrorMessage(error as Error).message
            toast.error(message)
        }
    }

    return { isSubmitting, control, handleSubmit: handleSubmit(onSubmit) }
}
