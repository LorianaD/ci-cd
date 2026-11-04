import { AuthForm, AuthHero, Button, Main } from "../../components"
import RegisterPageData from "./RegisterPageData";

function RegisterPage() {
    const page = RegisterPageData;
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

export default RegisterPage