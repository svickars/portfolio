import * as d3 from "d3";
import $ from "jquery";

let previousWidth = 0,
  copy,
  expanded;

init();

function init() {
  goToContent();
  loadCopy();
  censored();

  d3.selectAll(".project .project-title").on("click", function () {
    const newHeight = d3.select(this.parentNode).classed("expanded")
      ? 0
      : d3.select(this.parentNode).select(".inner").node().offsetHeight + 37;

    d3.select(this.parentNode)
      .classed("expanded", !d3.select(this.parentNode).classed("expanded"))
      .select(".inner-wrapper")
      .style("height", `${newHeight}px`);

    d3.selectAll(".pass-container").classed("is-visible", false);
    d3.selectAll(".censored-project")
      .select(".project-title-left")
      .select("h2")
      .classed("is-bg", false);

    d3.selectAll(".project").classed("is-bg", function () {
      return !d3.select(this).classed("expanded");
    });

    if (d3.selectAll(".expanded").node() == null) {
      d3.selectAll(".project").classed("is-bg", false);
    }

    if (newHeight > 0) {
      scroll(d3.select(this.parentNode).attr("id"));
      replaceUrl(d3.select(this.parentNode).attr("id"));
    }
  });

  d3.selectAll(".project .censored-project").on("click", function () {
    if (!d3.select(this.parentNode).classed("expanded")) {
      const id = d3.select(this).attr("data-id");

      d3.select(this.parentNode).classed("is-bg", false);

      d3.select(this)
        .select(".project-title-left")
        .select("h2")
        .classed("is-bg", true);

      d3.select(this).select(".pass-container").classed("is-visible", true);

      document.getElementById(id).focus();
    } else {
      d3.select(this.parentNode)
        .classed("expanded", false)
        .select(".inner-wrapper")
        .style("height", 0);

      removeContent(
        d3.select(this).select(".pass-container").select("input").attr("id")
      );

      d3.selectAll(".project").classed("is-bg", function () {
        return !d3.select(this).classed("expanded");
      });

      if (d3.selectAll(".expanded").node() == null) {
        d3.selectAll(".project").classed("is-bg", false);
      }
    }
  });

  d3.selectAll(".pass-container")
    .select("input")
    .on("keydown", function () {
      const id = d3.select(this).attr("id");
      if (d3.event.keyCode == 13) {
        if (d3.select(this).node().value == id) {
          const newHeight =
            d3
              .select(this.parentNode.parentNode.parentNode.parentNode)
              .select(".inner")
              .node().offsetHeight + 37;

          d3.select(this.parentNode.parentNode.parentNode.parentNode)
            .classed("expanded", true)
            .select(".inner-wrapper")
            .style("height", `${newHeight}px`);

          d3.select(this.parentNode).classed("is-visible", false);
          d3.select(this.parentNode.parentNode)
            .select("h2")
            .classed("is-bg", false);

          d3.selectAll(".project").classed("is-bg", function () {
            return !d3.select(this).classed("expanded");
          });

          if (newHeight > 0) scroll(id);

          loadNewContent(id);
        }
      }
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

function loadCopy() {
  Promise.all([d3.json(`./assets/data/copy.json`)])
    .then((res) => {
      copy = res[0];
    })
    .catch((err) => console.log(err));
}

function censored() {
  d3.selectAll(".censored").style("padding", () => {
    return `0 ${random(48, 16)}px 0 ${random(48, 16)}px`;
  });
  //   .style("background-color", function () {
  //     return d3.select(this.parentNode).style("color");
  //   });
  //
  // d3.selectAll("input").style("background-color", function () {
  //   return d3.select(this.parentNode.parentNode.parentNode).style("color");
  // });
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadNewContent(id) {
  const thisCopy = copy.work.find((d) => d.id == id),
    container = d3.select(`#${id}`);

  container.select("h2").html(thisCopy.project0);

  if (thisCopy.cover0) {
    container.select(".cover").select("img").attr("src", thisCopy.cover0);
  }

  if (thisCopy.description0) {
    container.select(".description").html("");

    thisCopy.description0.forEach((d) => {
      container.select(".description").append("p").html(d.value);
    });
  }

  if (thisCopy.links0) {
    container
      .select(".links")
      .selectAll(".entry")
      .each(function (d, i) {
        d3.select(this).select("a").attr("href", thisCopy.links0[i].link);
        d3.select(this).select("h6").html(thisCopy.links0[i]["link-title"]);
      });
  }

  if (thisCopy.tags0) {
    container
      .select(".tags")
      .selectAll(".entry")
      .each(function (d, i) {
        d3.select(this).select("h6").html(thisCopy.tags0[i].text);
      });
  }
}

function removeContent(id) {
  const thisCopy = copy.work.find((d) => d.id == id),
    container = d3.select(`#${id}`);

  container.select("h2").html(thisCopy.project);

  if (thisCopy.tags0) {
    container
      .select(".tags")
      .selectAll(".entry")
      .each(function (d, i) {
        d3.select(this).select("h6").html(thisCopy.tags[i].text);
      });
  }

  censored();
}

function scroll(id) {
  const target = $(`#${id}`);
  if (target.length) {
    const scrollTo = target.offset().top;
    $("body, html").animate(
      {
        scrollTop: `${scrollTo - 32}px`,
      },
      800
    );
  }
}

function goToContent() {
  const url = window.location.href;

  if (url.includes("#")) {
    const id = url.substring(url.lastIndexOf("#") + 1);
    scroll(id);

    const newHeight =
      d3.select(`#${id}`).select(".inner-wrapper").select(".inner").node()
        .offsetHeight + 37;

    d3.select(`#${id}`)
      .classed("expanded", true)
      .select(".inner-wrapper")
      .style("height", `${newHeight}px`);

    d3.selectAll(".project").classed("is-bg", function () {
      return !d3.select(this).classed("expanded");
    });
  }
}

function replaceUrl(id) {
  const url = window.location.href,
    old = url.split("#")[1];

  // window.location = newUrl;
  window.history.pushState({ foo: old }, "", `#${id}`);

  console.log(old, id);
}
