import { useUserStore } from "../../../store/user.store"
import ContainerSectionWrapper from "../../component/layout/container-section-wrapper.comp"
import PageWrapper from "../../component/layout/page-wrapper.comp"

export default function HomePage() {
    const user = useUserStore((store) => store.user)
    return (
        <PageWrapper>
            <ContainerSectionWrapper className="text-gray-100">
                {JSON.stringify(user, null, 3)}
            </ContainerSectionWrapper>
        </PageWrapper>
    )
}
