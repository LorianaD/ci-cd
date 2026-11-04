import './Button.css';

function Button({ type = "button", variant = "primary", label, loading = false, disabled = false, onClick }) {
    return (
        <button type={type} className={`button button--${ variant }`} disabled={disabled || loading} onClick={onClick} >
            {loading ? "Chargement..." : label}
        </button>
    )
}

export default Button;