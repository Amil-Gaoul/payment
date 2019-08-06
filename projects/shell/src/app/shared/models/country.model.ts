import { RegionalBlock } from './regional-block.model';
import { Language } from './language.model';
import { Currency } from './currency.model';

export interface Country {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: string[];
    area: number;
    borders: string[];
    callingCodes: string[];
    capital: string;
    cioc: string;
    currencies: Currency[];
    demonym: string;
    flag: string;
    gini: string;
    languages: Language[];
    latlng: number[];
    name: string;
    nativeName: string;
    numericCode: string;
    population: number;
    region: string;
    regionalBlocs: RegionalBlock[];
    subregion: string;
    timezones: string[];
    topLevelDomain: string[];
    translations: object;
}
