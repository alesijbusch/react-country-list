import React from "react";
import { Country } from "../types";
import { CountryItem } from "../components/CountryItem";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className="list-group pt-3">
      <CountryItem countries={countries} />
    </ul>
  );
};
