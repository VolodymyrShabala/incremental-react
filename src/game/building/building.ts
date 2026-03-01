import { Observable } from '../../observables/observable';
import type { BuildingConfig } from './buildingConfig';

export class Building {
    public readonly name: string;

    public readonly count: Observable<number>;

    constructor(config: BuildingConfig) {
        this.name = config.name;
        this.count = new Observable(0);
    }
}
