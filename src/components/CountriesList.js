import React from 'react'

const CountriesList = ({countries, handleChange}) => {
    return (
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
    )
}

export default CountriesList