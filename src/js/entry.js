import * as d3 from "d3";

init();

function init() {
  d3.selectAll(".project").on("click", function () {
    const newHeight = d3.select(this).classed("expanded")
      ? 0
      : d3.select(this).select(".inner").node().offsetHeight + 37;

    d3.select(this)
      .classed("expanded", !d3.select(this).classed("expanded"))
      .select(".inner-wrapper")
      .style("height", `${newHeight}px`);
  });
}
