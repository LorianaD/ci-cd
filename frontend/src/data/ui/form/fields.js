import { warningIcon } from "../../../assets";

const fields = {
    email : {
        name : "email",
        type : "email",
        label : "Email",
        placeholder : "toi@exemple.fr",
    },

    username : {
        name : "username",
        type: "text",
        label : "Nom d'utilisateur",
        placeholder : "JeanDP",
        errorIcon : warningIcon,
        errorMessage : "",
    },

    password : {
        name : "password",
        type : "password",
        label : "Mot de passe",
        placeholder : "",
        iconView : "",
    },

    confirmPassword : {
        name : "confirmPassword",
        type : "password",
        label : "Confirmer le mot de passe",
        placeholder : "",
        iconView : "",
    },

}

export default fields;