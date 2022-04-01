var margin = { top: 30, right: 20, bottom: 30, left: 50 },
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%d-%b-%y").parse;
var formatTime = d3.time.format("%e %B");

// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);

// Define the line
var valueline = d3.svg.line()
    .x(function (d) { return x(d.date); })
    .y(function (d) { return y(d.close); });

// Define the div for the tooltip
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.selectAll(".muscles")
    .on("mouseover", function (evt) {
        d3.select(this)
            .attr("fill", "#ea8181");

        // Get current event info
        console.log(d3.event);

        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html("<br/>")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");






        // Get x & y co-ordinates
        console.log(d3.mouse(this));
    })
    .on("mouseout", function () {
        d3.select(this)
            .attr("fill", "#f2f2f2")
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });

