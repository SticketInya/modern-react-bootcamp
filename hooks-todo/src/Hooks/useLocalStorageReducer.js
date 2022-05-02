import { useEffect, useReducer } from 'react';

export default function useLocalStorageReducer(key, defaultValue, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        let value;
        try {
            value = JSON.parse(
                localStorage.getItem(key) || String(defaultValue),
            );
        } catch (err) {
            value = defaultValue;
        }
        return value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, dispatch];
}
