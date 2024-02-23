import axios from "axios"
import { MessageConstant } from "../config/constant/message.constant"
import { EnvConfig } from "../config/env.config"

export const ApiService = axios.create({
    baseURL: EnvConfig.API_URL,
    withCredentials: true,
    timeout: 10000,
    timeoutErrorMessage: MessageConstant.SLOW_INTERNET,
})
