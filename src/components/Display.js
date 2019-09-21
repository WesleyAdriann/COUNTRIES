import React from 'react';

const Display = ({country, countries, handleChange}) => {
    return (
        <div className="container-display">
            <div className="title">
                <h1>COUNTRIES</h1>
            </div>
            <div className="select-countrie">
                <select onChange={handleChange}>
                    <option hidden>
                        Select country...
                    </option>
                    {countries.map(country => {
                        return (
                        <option key={country.numericCode} value={JSON.stringify(country)}>
                            {country.name}
                        </option>
                        )
                    })}
                </select>
            </div>
            <div className="countrie-info">
                {country ? 
                    <div className="card">
                        <div className="card-body">
                            <img src={country.flag} className="front flag" alt={`Flag ${country.name}`}/>
                            <div className="back">
                                <p>Name: {country.name}</p>
                                <p>Capital: {country.capital}</p>
                                <p>Population: {country.population}</p>
                            </div>
                        </div>
                    </div>
                :
                    <div className="card">
                        <div className="card-body">
                            <div className="front">
                                Choose a country
                            </div>
                            <div className="back">
                                and see informations
                            </div>
                        </div>
                    </div>                    
                }
            </div>
        </div>
    )
}

export default Display;