import { authClient } from "@/lib/auth-client"
import { MySpacer } from "@/views/component/common/my-spacer"
import MyButton from "@/views/component/form/my-button"
import { useUser } from "../../../stores/user.store"
import { ContainerSectionWrapper } from "../../component/layout/container-section-wrapper.comp"
import { PageWrapper } from "../../component/layout/page-wrapper.comp"

export default function HomePage() {
    const { user } = useUser()

    return (
        <PageWrapper>
            <ContainerSectionWrapper className="flex flex-col">
                {JSON.stringify(user, null, 3)}
                <MySpacer />
                hello
                <div>
                    <MyButton
                        variant="outline"
                        onClick={async () => {
                            await authClient.signOut()
                        }}
                    >
                        logOut
                    </MyButton>
                </div>
            </ContainerSectionWrapper>
        </PageWrapper>
    )
}
