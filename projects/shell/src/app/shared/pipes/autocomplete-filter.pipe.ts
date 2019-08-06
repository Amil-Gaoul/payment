import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '@models';

@Pipe({
    name: 'autocompleteFilter'
})
export class AutocompleteFilterPipe implements PipeTransform {

    public transform(countries: Country[], filterValue: string): Country[] {
        if (!countries) {
            return [];
        }
        if (!filterValue) {
            return countries;
        }
        const filterCountries: Country[] = countries.filter((country: Country) => country.name.indexOf(filterValue) !== -1);
        return filterCountries;
    }

}
