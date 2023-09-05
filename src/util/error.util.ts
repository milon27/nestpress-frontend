import { AxiosError } from "axios"
import { StatusCode } from "../config/constant/code.constant"
import { MessageConstant } from "../config/constant/message.constant"
import { IErrorResponse } from "../service/_common/common.dto"

export const ErrorUtil = {
    getErrorMessage: (error: AxiosError | Error): { message: string } => {
        if (error instanceof AxiosError) {
            // ! if 500 then show something went wrong, show a button to share error with MM team, open error screen
            if (error.response?.status === StatusCode.SERVER_ERROR) {
                return { message: MessageConstant.SOMETHING_WENT_WRONG }
            }
            if (error.code === AxiosError.ERR_NETWORK) {
                return { message: MessageConstant.NO_INTERNET }
            }
            if (error.code === AxiosError.ETIMEDOUT) {
                return { message: MessageConstant.SLOW_INTERNET }
            }
            if (error.code === AxiosError.ECONNABORTED) {
                return { message: MessageConstant.SLOW_INTERNET }
            }
            // ! when not server error, don't show error screen
            const serverError = (error.response?.data as IErrorResponse)?.message
            let errorMessage
            if (typeof serverError === "string") {
                errorMessage = serverError || error?.message
            } else {
                errorMessage = "Zod Error!"
            }

            // todo: handle this part in the axios interceptor
            // if ((error as AxiosError).response?.status === StatusCode.UNAUTHORIZED) {
            //     // handle logout
            //     useUserStore.getState().logout()
            // }

            // if ((error as AxiosError).response?.status === StatusCode.UNAUTHORIZED) {
            //     // handle logout
            //     useUserStore.getState().logout()
            // } else {
            //     // if needed set custom error message here

            //     if (error.code === AxiosError.ERR_BAD_REQUEST) {
            //         errorMessage = "show popup"
            //     }
            // }

            // ToastAndroid.showWithGravity(errorMessage, ToastAndroid.LONG, ToastAndroid.BOTTOM)
            // MyLogger.logError("ApiService.interceptors.error", error)
            return { message: errorMessage }
        } else {
            return { message: error?.message }
        }
    },
}
