import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
// import  transition  from 'd3-transition';
import 'd3-transition';

import useResizeObserver from "./UseResizeObserver";


function GeoChart({ data, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const minProp = min(data.features, feature => feature.properties[property]);

    const maxProp = max(data.features, feature => feature.properties[property]);
    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range(["#e4e4e4", "#de7171"]);

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], selectedCountry || data)
      .precision(100);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", feature => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .attr("class", "country")
      .transition()
      .duration(1000)
      .attr("fill", feature => colorScale(feature.properties[property]))
      .attr("d", feature => pathGenerator(feature));

    svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        feature =>
          feature &&
          feature.properties.name +
          ": " +
          feature.properties[property].toLocaleString()
      )
      .attr("x", 10)
      .attr("y", 25);
  }, [data, dimensions, property, selectedCountry]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default GeoChart;