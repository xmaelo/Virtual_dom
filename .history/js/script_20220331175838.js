//FONCTIONS
function domForEach(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}

function domOn(selector, event, callback) {
    domForEach(selector, ele => ele.addEventListener(event, callback));
}


//
// MON CODE

domOn('.muscles', 'mouseover', evt => {
    const monMuscle = evt.target;
    const color = monMuscle.getAttribute('fill');
    monMuscle.setAttribute('fill', '#ea8181');
    // const overcouleur = monMuscle.getAttribute('fill');
    // console.log(overcouleur);
})

domOn('.muscles', 'mouseout', evt => {
    const monMuscle = evt.target;
    const color = monMuscle.getAttribute('fill');
    monMuscle.setAttribute('fill', '#f2f2f2');
})

//const muscles = d3.selectAll('.muscles')

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
        .style("background-color", "steelblue")
    });


