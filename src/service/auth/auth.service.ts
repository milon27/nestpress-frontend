import { IResponse } from "../_common/common.dto"
import { ApiService } from "../api.service"
import {
    ICurrentUser,
    IForgetPasswordDto,
    ILoggedInUser,
    ILoginWithEmailDto,
    ILoginWithGoogleDto,
    ILoginWithGoogleResponse,
    IRegisterDto,
    IResetPasswordDto,
} from "./auth.dto"
import {
    IForgetPasswordSchema,
    ILoginWithEmailSchema,
    ILoginWithGoogleSchema,
    IRegisterSchema,
    IResetPasswordSchema,
} from "./auth.schema"

export const AuthService = {
    // api call with axios
    loginWithEmail: async (schema: ILoginWithEmailSchema) => {
        const dto: ILoginWithEmailDto = schema
        const { data } = await ApiService.post<IResponse<ICurrentUser>>("/v1/auth/login-with-email", dto)
        return data.response
    },
    loginWithGoogle: async (schema: ILoginWithGoogleSchema) => {
        const dto: ILoginWithGoogleDto = schema
        const { data } = await ApiService.post<IResponse<ICurrentUser | ILoginWithGoogleResponse>>(
            "/v1/auth/login-with-google",
            dto
        )
        return data.response
    },
    registerUser: async (schema: IRegisterSchema) => {
        const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
        const dto: IRegisterDto = {
            ...schema,
            user: {
                ...schema.user,
                timeZone,
            },
        }
        const { data } = await ApiService.post<IResponse<ICurrentUser>>("/v1/auth/register", dto)
        return data.response
    },
    logOutUser: async () => {
        await ApiService.post("/v1/auth/logout")
    },
    getLoggedInUser: async () => {
        const { data } = await ApiService.post<IResponse<ILoggedInUser>>("/v1/user")
        return data.response
    },
    getForgetPasswordLink: async (schema: IForgetPasswordSchema) => {
        const dto: IForgetPasswordDto = schema
        const { data } = await ApiService.get<IResponse>(`/v1/auth/forget-password/${dto.email}`)
        return data
    },
    resetPassword: async (schema: IResetPasswordSchema) => {
        const dto: IResetPasswordDto = {
            code: schema.code,
            password: schema.password,
        }
        const { data } = await ApiService.post<IResponse>(`/v1/auth/forget-password`, dto)
        return data
    },
}
