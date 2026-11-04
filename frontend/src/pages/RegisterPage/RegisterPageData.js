import { logo } from "../../assets";
import { fields } from "../../data";

const RegisterPageData = {
    pageName: "register-page",

    hero: {
        logo: logo,

        slogan: [
            "Crée ton espace en 30 secondes."
        ],
        
        description: "",

        benefits: [
            {
                id: 1,
                text: "Tes tâches sont privées : liées à ton compte uniquement."
            },
            {
                id: 2,
                text: "Vue liste ou tableau, selon ta façon de travailler."
            },
            {
                id: 3,
                text: "Suis ta progression d'un coup d'œil."
            }
        ]
    },

    form: {
        header: {
            title: "Créer un compte",
            description: "",
            redirection: {
                question: "Déjà inscrit·e ?",
                link: {
                    label: "Se connecter",
                    url: "/"
                }
            }
        },

        fields: [
            fields.username,
            {
                ...fields.email,
                errorMessage : "Cet email est déjà utilisé.",
            },
            {
                ...fields.password,
                placeholder: "12 caractères minimum",
            },
            fields.confirmPassword
        ],

        actions: {
            acceptTerms: {
                name: "acceptTerms",
                label: "J'accepte les",
                link: {
                    label: "conditions d'utilisation",
                    url: "/terms"
                },
                required: true
            },

            btn: {
                label: "Créer mon compte",
                type: "submit",
                variant: "primary"
            }
        }
    }
};

export default RegisterPageData;