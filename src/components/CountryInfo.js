import React from 'react'

const CountryInfo = ({ country }) => {
    return (
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
    )
}

export default CountryInfo