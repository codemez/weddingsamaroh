'use client';

import { useEffect, useState } from 'react';
import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';

type Props = {
  onChange: (location: { country: string; state: string; city: string }) => void;
};

export default function CountryStateCityForm({ onChange }: Props) {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry);
      setStates(stateList);
      setCities([]);
      setSelectedState('');
      setSelectedCity('');
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const cityList = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(cityList);
      setSelectedCity('');
    }
  }, [selectedState]);

  useEffect(() => {
    onChange({ country: selectedCountry, state: selectedState, city: selectedCity });
  }, [selectedCountry, selectedState, selectedCity]);

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!states.length}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 ">City</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!cities.length}
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
