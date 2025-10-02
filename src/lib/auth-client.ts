import { EnvConfig } from "@/configs/env.config"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: EnvConfig.API_URL, // The base URL of your auth server
    fetchOptions: {
        throw: true,
    },
})
