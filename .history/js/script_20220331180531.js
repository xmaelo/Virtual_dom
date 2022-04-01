var tooltip = d3.select("body")
    .append("div")
    .attr("id", "mytooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");

d3.selectAll(".muscles")
    .on("mouseover", function(evt){
        d3.select(this)
        .attr("fill", "#ea8181");

        // Get current event info
        console.log(d3.event);
         
            d3.select(this)
            .transition()
            .ease("cubic")
            .duration(10)
            .attr('r', function (d){ 
             return (d.x);
            })
        
                .tooltip.style("visibility", "visible");
           
        
        // Get x & y co-ordinates
        console.log(d3.mouse(this));
    })
    .on("mouseout", function(){
        d3.select(this)
        .attr("fill", "#f2f2f2")
    });
