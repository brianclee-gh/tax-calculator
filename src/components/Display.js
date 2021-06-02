import React from 'react'

function Display({tax, country}) {
  return <div id="display">
    <div id="tax-rate">Tax rate is {tax}%</div>
    <div id="result">Cost is ___ in  {country}</div>
  </div>
}

export default Display