import React from 'react';
import Country from './country';

const CountryList = ({ items }) => {
  return (
    <div>
      {
        items.reverse().map((user, i) => {
          return (
            <Country
              key={i}
              flag={items[i].countryInfo.flag}
              id={items[i].id}
              country={items[i].country}
              cases={items[i].cases}
              active={items[i].active}
              recovered={items[i].recovered}
              deaths={items[i].deaths}
              casesPerOneMillion={items[i].casesPerOneMillion}
              />
          );
        })
      }
    </div>
  );
}
export default CountryList
