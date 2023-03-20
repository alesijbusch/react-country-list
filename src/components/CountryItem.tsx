import React from 'react';
import { Country } from '../types';
import { Badge } from './Badge';

interface CountryItemProps {
  countries: Country;
}

export const CountryItem = ({
  countries: { name, capital, flag, population, region, area },
}: CountryItemProps) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <img src={flag} width="80" className="img-thumbnail" alt="flag" />
      <p className="m-3 w-25">{name}</p>
      <p className="m-3 w-25">{capital}</p>
      <p className="m-3 w-25">{region}</p>
      <Badge color="bg-primary" value={area} label="area" />
      <Badge color="bg-secondary" value={population} label="population" />
    </li>
  );
};
