import axios from "axios"
import { EnvConfig } from "../config/env.config"
import { MessageConstant } from "../constants/message.constant"

export const ApiService = axios.create({
    baseURL: EnvConfig.API_URL,
    withCredentials: true,
    timeout: 10000,
    timeoutErrorMessage: MessageConstant.SLOW_INTERNET,
})
