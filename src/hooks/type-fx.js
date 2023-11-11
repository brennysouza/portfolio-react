import { useEffect, useState } from 'react';

export function useTypeFx (
    typeText,
    keyStrokeMs,
) {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const idInterval = setInterval(() => {
            setPosition((value) => value + 1)
        }, keyStrokeMs);
        return () => {
            clearInterval(idInterval);
        }
}, [keyStrokeMs]);

    return typeText.substring(0, position);
}

export default useTypeFx;

// useEffect(() => {
//     const intervalId = setInterval(() => {
//          setPosition(position + 1);
//  }, keyStrokeMs);
//  return () => clearInterval(intervalId);
// }, [keyStrokeMs]);