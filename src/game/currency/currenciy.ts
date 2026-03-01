import type { CurrencyConfig } from './currencyConfig';

export class Currency {
    private name: string;

    constructor(config: CurrencyConfig) {
        this.name = config.name;
    }

    get Name() {
        return this.name;
    }
}
