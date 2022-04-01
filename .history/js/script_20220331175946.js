d3.selectAll(".muscles")
    .on("mouseover", function(evt){
        d3.select(this)
        .attr("fill", "#252526");

        // Get current event info
        console.log(d3.event);
        
        // Get x & y co-ordinates
        console.log(d3.mouse(this));
    })
    .on("mouseout", function(){
        d3.select(this)
        .attr("fill", "#f2f2f2")
    });


