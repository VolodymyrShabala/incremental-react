import { Building } from './building/building';
import { Currency } from './currency/currenciy';
import type { GameConfig } from './gameConfig';

export class GameModule {
    private buildings: { [key: string]: Building } = {};
    private currencies: { [key: string]: Currency } = {};

    constructor(gameConfig: GameConfig) {
        gameConfig.buildings.forEach((buildingConfig) => {
            this.buildings[buildingConfig.name] = new Building(buildingConfig);
        });

        gameConfig.currencies.forEach((currencyConfig) => {
            this.currencies[currencyConfig.name] = new Currency(currencyConfig);
        });
    }

    public getBuilding(name: string) {
        return this.buildings[name];
    }

    public getCurrency(name: string) {
        return this.currencies[name];
    }
}
