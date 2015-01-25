var pp = true;
var iframehor = window.innerWidth - 325;
var iframever = window.innerHeight;

function pause()
{
    if (pp == true) {
        document.getElementById("pause").innerHTML = "&#9658;";
        document.getElementById("music").pause();
        pp = false;
    } else {
        document.getElementById("pause").innerHTML = "&#9612;&#9612;";
        document.getElementById("music").play();
        pp = true;
    }
    
}

document.write ('<iframe frameborder="0" id="pframe" class="pagina" src="sources/1.htm" width="' + iframehor + '" height="' + iframever + '"></iframe>');

function one(carto) {
    document.getElementById("pframe").src = "sources/" + carto + ".htm";
    
}

function setv() {
    document.getElementById('music').volume = 0.1;
    
}

window.onload = setv;