//challenge1:your age in days
function ageIndays(){
var birthyear= prompt("what year werw you born .....good friend???")
var ageIndayss=(2021-birthyear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are'+ ageIndayss +'days old')
h1.setAttribute('id','ageIndays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById("ageIndays").remove();
}


function generatecat(){
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen');
image.src="download.jfif"  
div.appendChild(image);
}