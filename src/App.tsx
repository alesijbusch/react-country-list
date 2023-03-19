import React from "react";
import countries from "./maretials/country-data.json";
import { CountryList } from "./components/CountryList";
import { transformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="pt-2">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
