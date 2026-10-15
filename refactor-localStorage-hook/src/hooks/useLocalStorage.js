import {useState, useEffect} from 'react';

const useLocalStorage = (key, iniValue) => {
    const [enteredValue, setEnteredValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue !== null ? JSON.parse(savedValue) : iniValue;
    });

    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(enteredValue));
    }, [key, enteredValue]);

    return[enteredValue, setEnteredValue];
}

export default useLocalStorage;