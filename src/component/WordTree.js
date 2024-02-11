import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from '../data/word'; // Assuming your data is in a file called data.js

const WordCloud = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 400;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const layout = d3.layout.cloud()
      .size([width, height])
      .words(data.map(d => ({ text: d.name, size: 10 + Math.random() * 50 })))
      .padding(5)
      .rotate(() => (Math.random() < 0.5 ? -1 : 1) * Math.random() * 30)
      .fontSize(d => d.size)
      .on('end', draw);

    layout.start();

    function draw(words) {
      svg.selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', d => `${d.size}px`)
        .attr('transform', d => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text(d => d.text);
    }
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default WordCloud;
