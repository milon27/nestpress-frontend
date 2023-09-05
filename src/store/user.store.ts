// logged in user global state with zustand store
import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"
import { ICurrentUser } from "../service/auth/auth.dto"

interface IUserStore {
    user?: ICurrentUser
    // * actions

    setCurrentUser: (user: ICurrentUser) => void
    logout: () => void
}

export const useUserStore = createWithEqualityFn<IUserStore>()((set) => {
    return {
        user: undefined,
        // * actions
        setCurrentUser: (user: ICurrentUser) => {
            set((old) => ({ ...old, user: user }))
        },
        logout: () => {
            set((old) => ({ ...old, user: undefined }))
        },
    }
}, shallow)
