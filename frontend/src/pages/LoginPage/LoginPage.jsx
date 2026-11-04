import { AuthForm, AuthHero, Main } from "../../components"
import LoginPageData from "./LoginPageData";

function LoginPage() {
    const page = LoginPageData;
    return (
        <Main page={page.pageName}>
            <AuthHero
                data={page.hero}
            />
            <AuthForm
                data={page.form}
            />
        </Main>
    )
}

export default LoginPage