import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import Loading from './components/Loading';
import Display from './components/Display';

function App() {

  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
 
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(data => {
      setCountries(data.data);
      setLoading(false);
    });
  }, [])

  const handleChange = e => {
    const { value } = e.target;
    setCountry(JSON.parse(value));
  }

  return (
    <div>
      {loading ? 
        <Loading/>
        :
        <Display countries={countries} handleChange={handleChange} country={country}/>
      }
    </div>
  );
}

export default App;
