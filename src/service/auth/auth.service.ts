import { IResponse } from "../_common/common.dto"
import { ApiService } from "../api.service"
import { ICurrentUser, ILoginWithEmailDto, ITokens } from "./auth.dto"

export const AuthService = {
    // api call with axios
    loginWithEmail: async (dto: ILoginWithEmailDto) => {
        const { data } = await ApiService.post<IResponse<ICurrentUser>>("/v1/auth/login-with-email", dto)
        return data.response
    },
    refreshToken: async () => {
        const result = await ApiService.post<IResponse<ITokens>>("/v1/auth/token")
        return result.data.response
    },
    getLoggedInUser: () => {
        return ApiService.post<IResponse<ICurrentUser>>("/v1/user")
    },
}
