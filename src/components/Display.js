import React from 'react';

const Display = ({countrie, countries, handleChange}) => {
    return (
        <div className="container-display">
            <div className="select-countrie">
                <select onChange={handleChange}>
                    {countries.map(countrie => {
                        return (
                        <option key={countrie.numericCode} value={JSON.stringify(countrie)}>
                            {countrie.name}
                        </option>
                        )
                    })}
                </select>
            </div>
            <div className="countrie-info">
                {countrie ? 
                    <img src={countrie.flag} className="flag" alt={`Flag ${countrie.name}`}/>
                :
                    null
                }
            </div>
        </div>
    )
}

export default Display;