import React, { useState } from 'react';

export default function useToggleState(defaultValue = false) {
    const [state, setState] = useState(defaultValue);

    const toggleState = () => {
        setState(!state);
    };

    return [state, toggleState];
}
