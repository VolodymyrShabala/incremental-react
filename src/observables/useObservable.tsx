import { useEffect, useState } from 'react';
import type { Observable } from './observable';

export function useobservable<T>(observable: Observable<T>) {
    const [value, setValue] = useState(observable.value);

    useEffect(() => {
        const unsub = observable.subscribe(setValue);
        return () => {
            unsub();
        };
    }, [observable]);

    return value;
}
