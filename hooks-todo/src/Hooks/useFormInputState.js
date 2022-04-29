import { useState } from 'react';

export default function useFormInputState(initialValue) {
    const [state, setState] = useState(initialValue);

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const resetState = () => {
        setState(initialValue);
    };

    return [state, handleChange, resetState];
}
