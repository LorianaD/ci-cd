import "./Input.css";

function Input({ id, label, type = "text", name, placeholder, value, onChange, error, required = false }) {
    return (
        <div className="input-group">
            {label && (
                <label htmlFor={id} className="input-label">
                    {label}
                </label>
            )}

            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                className={`input-field ${error ? "input-field--error" : ""}`}
            />

            {error && (
                <span id={`${id}-error`} className="input-error">
                    {error}
                </span>
            )}
        </div>
    );
}

export default Input;