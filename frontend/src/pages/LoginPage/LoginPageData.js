import { logo } from "../../assets";
import { fields } from "../../data";

const LoginPageData = {
    pageName: "login-page",

    hero: {
        logo: logo,
        
        slogan: [
            "Organise tes tâches.",
            "Garde le cap."
        ],

        description: "Liste, tableau, priorités : tout ce que tu as à faire, au même endroit.",

        tasks: [
            {
                id: 1,
                title: "Configurer React Router",
                status: "done"
            },
            {
                id: 2,
                title: "Brancher l'authentification JWT",
                status: "in_progress"
            },
            {
                id: 3,
                title: "Créer le composant TaskCard",
                status: "todo"
            }
        ]
    },

    form: {
        header: {
            title: "Connexion",
            description: "Content de te revoir. Connecte-toi pour retrouver tes tâches."
        },

        fields: [
            fields.email,
            fields.password
        ],

        actions: {
            forgotPassword: {
                label: "Mot de passe oublié ?",
                url: "/forgot-password"
            },

            checkConnect: {
                label: "Rester connecté",
                name: "rememberMe"
            },

            btn: {
                label: "Se connecter",
                type: "submit",
                variant: "primary"
            },

            registerRedirection: {
                question: "Pas encore de compte ?",
                link: {
                    label: "Créer un compte",
                    url: "/register"
                }
            }
        }
    }
};

export default LoginPageData;