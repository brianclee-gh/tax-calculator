import React, { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [country, setCountry] = useState('Afghanistan');
  const [tax, setTax] = useState(0);

  const handleCountryChange = (e) => {
    // change State
    setCountry(e.target.value);
    // << get tax rate via API, setTax useState >>
    // update UI
  };

  const calculate = (e) => {
    e.preventDefault();
    console.log('hi', country, tax)
  };


  return (
    <div className="App">
      <h1>Tax Calculator</h1>
      <Form
        handleCountryChange={handleCountryChange}
        calculate={calculate}
      />
      <Display
        tax={tax}
        country={country}
      />
    </div>
  );
}

export default App;
