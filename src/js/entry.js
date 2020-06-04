import * as d3 from "d3";

let previousWidth = 0;

init();

function init() {
  d3.selectAll(".project .project-title").on("click", function () {
    const newHeight = d3.select(this.parentNode).classed("expanded")
      ? 0
      : d3.select(this.parentNode).select(".inner").node().offsetHeight + 37;

    d3.select(this.parentNode)
      .classed("expanded", !d3.select(this.parentNode).classed("expanded"))
      .select(".inner-wrapper")
      .style("height", `${newHeight}px`);
  });
}

window.addEventListener("resize", function () {
  var currentWidth = window.innerWidth;

  if (previousWidth !== currentWidth) {
    previousWidth = currentWidth;

    resizeGeneral();
  }
});

function resizeGeneral() {
  d3.selectAll(".project.expanded")
    .select(".inner-wrapper")
    .style("height", function () {
      const newHeight =
        d3.select(this).select(".inner").node().offsetHeight + 37;

      return `${newHeight}px`;
    });
}
