import { Country, CountryApi } from "../types";

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map(({ name, capital, population, flags, area, region }) => {
    return {
      name: name.common,
      capital: capital.join(),
      population: population,
      flag: flags.svg,
      area: area,
      region: region,
    };
  });
};
