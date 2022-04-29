import React, { useEffect, useState } from 'react';

export default function useLocalStorageState(key, initialValue) {
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(localStorage.getItem(key));
        } catch (err) {
            value = initialValue;
        }
        return value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}
