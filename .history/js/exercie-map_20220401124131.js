function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

const selectedExc = allExercies.filter(a => a.name != null && (a.bodyPart ===d3.select(this).attr("name") || a.target=== d3.select(this).attr("name")))

const div = d3.select("div").html(
    `
    
    
    `
);

<div>
            
            </div>