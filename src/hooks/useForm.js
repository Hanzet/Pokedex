import { useState } from "react";

export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => { // Recibo el evento del input, la e y estoy desestructurando para obtener el target
        const { name, value } = target; // Desestructuración del target del input, para obtener el name y el value
        setFormState({
            ...formState, // Desestructuración del formState
            [name]: value, // Propieda computada
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}