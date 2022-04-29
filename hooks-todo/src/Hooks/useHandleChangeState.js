import { useState } from 'react';

export default function useHandleChangeState(initialValue) {
    const [state, setState] = useState(initialValue);

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const resetState = () => {
        setState(initialValue);
    };

    return [state, handleChange, resetState];
}
