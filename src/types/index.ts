interface CountryApi {
  flags: CountryFlag;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface CountryFlag {
  png: string;
  svg: string;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeAbbreviation;
}

interface CountryNativeName {
  official: string;
  common: string;
}

interface CountryNativeAbbreviation {
  [titleAbbreviation: string]: CountryNativeName | undefined;
}

interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export type { CountryApi, Country };
