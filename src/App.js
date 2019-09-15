import React, { useEffect, useState }  from 'react';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState([])
 
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(data => {
      setCountries(data.data);
      setLoading(false);
    });
  }, [])

  return (
    <div>
      {loading ? 
        <p>Carregando</p>
        :
        <select>
          {countries.map(countrie => {
            return (
              <option>
                {countrie.name}
              </option>
            )
          })}
        </select>
      }
    </div>
  );
}

export default App;
