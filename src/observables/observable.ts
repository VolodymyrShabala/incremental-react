export type Listener<T> = (value: T) => void;

export class Observable<T> {
    protected observers = new Set<Listener<T>>();
    private internalValue: T;

    constructor(initialValue: T) {
        this.internalValue = initialValue;
    }

    public get value(): T {
        return this.internalValue;
    }

    public set value(newValue: T) {
        if (Object.is(newValue, this.internalValue)) {
            return;
        }

        this.internalValue = newValue;
        this.notify();
    }

    public subscribe(
        listener: Listener<T>,
        emmitImmediately = true
    ): () => void {
        this.observers.add(listener);
        if (emmitImmediately) {
            listener(this.internalValue);
        }

        return () => {
            this.observers.delete(listener);
        };
    }

    private notify(): void {
        this.observers.forEach((observer) => observer(this.internalValue));
    }
}

// export function ObservableComputed(
//     fn: () => any,
//     dependencies: Observable<any>[]
// ) {
//     const out = new Observable(fn());

//     const recompute = () => (out.value = fn());
//     const unsubs = dependencies.map((d) => d.subscribe(recompute, false));

//     out.value = fn();
//     out.dispose = () => unsubs.forEach((u) => u());
//     return out;
// }
