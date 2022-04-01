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
    <div class="child">
    <img src="`+i.gifUrl+`" alt="">      
    </div>
    `
})


