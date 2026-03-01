import type { BuildingConfig } from './building/buildingConfig';
import type { CurrencyConfig } from './currency/currencyConfig';

export type GameConfig = {
    buildings: BuildingConfig[];
    currencies: CurrencyConfig[];
};
