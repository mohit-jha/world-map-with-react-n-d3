import React, { useState } from "react";
import GeoChart from "./GeoMap";
import data from "./custom.geo.json";
import "./App.css";

function App() {
  const [property, setProperty] = useState("gdp_md_est");
  return (
    <React.Fragment>
      <div className="mid">
        <h2 className="geo">Welcome to World Map with d3-geo</h2>
        <GeoChart  data={data} property={property} />
        <h2>Select property to highlight</h2>
        <select
          value={property}
          onChange={event => setProperty(event.target.value)}
        >
          <option value="gdp_md_est">GDP</option>
          <option value="pop_est">Population</option>
          <option value="name_len">Name length</option>
        </select>
      </div>
    </React.Fragment>
  );
}

export default App;
