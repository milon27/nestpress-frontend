import MyButton from "../../component/common/form/my-button.comp"
import { MyInputWithRHF } from "../../component/common/form/my-input.comp"
import MyDesc from "../../component/common/my-desc.comp"
import MySpacer from "../../component/common/my-spacer.comp"
import MyTitle from "../../component/common/my-title.comp"
import FullSectionWrapper from "../../component/layout/full-section-wrapper.comp"
import { useLoginController } from "./login.controller"

export default function LoginPage() {
    const { control, handleSubmit, loading } = useLoginController()
    return (
        <FullSectionWrapper className="h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 md:block hidden">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                    alt=""
                />
            </div>
            <div className="col-span-1 grid place-content-center w-2/3 m-auto">
                <MyTitle title="Login to continue" large />
                <MySpacer />
                <MyDesc>This is random description. Enter your email and password to continue</MyDesc>
                <MySpacer className="h-4 md:h-8" />
                <MyInputWithRHF control={control} name="email" type="email" placeholder="Enter Your Email" />
                <MySpacer />
                <MyInputWithRHF
                    control={control}
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                />
                <MySpacer className="my-4" />
                <MyButton
                    title="Login Now"
                    loading={loading}
                    onClick={async () => {
                        await handleSubmit()
                    }}
                />
                <MySpacer className="my-4" />
            </div>
        </FullSectionWrapper>
    )
}
