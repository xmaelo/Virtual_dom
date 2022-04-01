function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

const selectedExc = allExercies.filter(a => a.name != null && (a.bodyPart ===getParameterByName('target') || a.target=== getParameterByName('target')))

const html = selectedExc&&selectedExc.map((i, k) =>{
   return  `
    <div class="child" style="padding: 50px; text-align: center;">
    <h2>`+i.name+`</h2>     
    <h3>Equipement: `+i.equipment+`</h3>     
    <img src="`+i.gifUrl+`" alt=""> 
    </div>
    `
})

console.log('html', html)

const div = d3.select("div").html(
    "<div class='parent'>"+html && html.join('')+"</div>"
);
d3.select("h1").text(allExercies.filter(a => a.name != null && (a.bodyPart ===getParameterByName('target') || a.target=== getParameterByName('target')))[0].bodyPart);
// d3.select("h2").text(allExercies.filter(a => a.name != null && (a.bodyPart ===getParameterByName('target') || a.target=== getParameterByName('target')))[0].name);
// d3.select("h3").text("Equipment: "+allExercies.filter(a => a.name != null && (a.bodyPart ===getParameterByName('target') || a.target=== getParameterByName('target')))[0].equipment);
d3.select("span").text(allExercies.filter(a => a.name != null && (a.bodyPart ===getParameterByName('target') || a.target=== getParameterByName('target'))).length +" Exercises trouvés");
