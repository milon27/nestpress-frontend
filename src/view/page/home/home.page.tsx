import MyButton from "@/view/component/common/form/my-button.comp"
import { useUserStore } from "../../../store/user.store"
import ContainerSectionWrapper from "../../component/layout/container-section-wrapper.comp"
import PageWrapper from "../../component/layout/page-wrapper.comp"
import { AuthService } from "@/service/auth/auth.service"
import MySpacer from "@/view/component/common/my-spacer.comp"

const logOut = async () => {
    await AuthService.logOutUser()
    useUserStore.getState().logout()
}

export default function HomePage() {
    const user = useUserStore((store) => store.user)

    return (
        <PageWrapper>
            <ContainerSectionWrapper className="flex flex-col">
                {JSON.stringify(user, null, 3)}
                <MySpacer />
                <div>
                    <MyButton
                        variant="outline"
                        title="logOut"
                        onClick={async () => {
                            await logOut()
                        }}
                    />
                </div>
            </ContainerSectionWrapper>
        </PageWrapper>
    )
}
