import React from 'react';

import CountriesList from './CountriesList'
import CountryInfo from './CountryInfo'

const Display = ({country, countries, handleChange}) => {
    return (
        <div className="container-display">
            <div className="title">
                <h1>COUNTRIES</h1>
            </div>
            <CountriesList countries={countries} handleChange={handleChange}/>
            <CountryInfo country={country}/>
        </div>
    )
}

export default Display;