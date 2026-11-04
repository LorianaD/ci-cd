import { Input } from "@/components";

function FormField({ fields, values, errors = {}, onChange }) {
    return (
        <div className="form-fields">
            {fields.map((field) => (
                <Input 
                    key={field.name}
                    id={field.name}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                />
            ))}
        </div>
    );
}

export default FormField;