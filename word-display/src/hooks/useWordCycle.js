import {useState, useEffect} from 'react';

const useWordCycle = (words = [], loop = true, delay = 1000, onComplete) =>{
    const [index, setIndex] = useState(0);


    if (!words || words.length === 0){
        return;
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => {

                if(prevIndex === words.length - 1){
                    if (!loop){
                        clearInterval(timer);

                        if(onComplete)
                            onComplete();

                        return prevIndex;
                    }
                    return 0;
                }
                return prevIndex + 1;
            });
        }, delay);

        return () => clearInterval(timer);
    }, [words, loop, delay]);

    return words[index] || "";
}

export default useWordCycle;