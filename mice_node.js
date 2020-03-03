'use strict'



var current = document.getElementById('tacka1a');
var btnbeli = $('.beli');
var btncrni = $('.crni');
var b1 = $('img.b1');
var c1 = $('img.c1');
var punkt = document.getElementsByClassName('punkt');
var krug1 = $('.krug1');


var arrplayer = [];
var arrbeli = [];
var arejb= arrbeli.length;
var arrcrni = [];
var arejc = arrcrni.length;




function myFunction1() {
   
    var person1 = prompt("Please enter your name:","Player 1");
    document.getElementById("player1").innerHTML = person1;
    arrplayer.push(person1);
    console.log(person1)
}

function myFunction2() {
   
    var person2 = prompt("Please enter your name:","Player 2");
    document.getElementById("player2").innerHTML = person2;
    arrplayer.push(person2);
    console.log(person2)
}
var b0 = $('.b0');                  
var b0a = $('.beli0a');

var c0 = $('.c0');
var c0a = $('.crni0a');

var be0a = $('#be0a');
var ce0a = $('#ce0a');







var b25 = $('.b25');                  
var b25a = $('.beli25a');             
var c25 = $('.c25');
var c25a = $('.crni25a');
var be25a = $('#be25a');
var ce25a = $('#ce25a');


var b26 = $('.b26');                  
var b26a = $('.beli26a');             
var c26 = $('.c26');
var c26a = $('.crni26a');
var be26a = $('#be26a');
var ce26a = $('#ce26a');


var b27 = $('.b27');                  
var b27a = $('.beli27a');             
var c27 = $('.c27');
var c27a = $('.crni27a');
var be27a = $('#be27a');
var ce27a = $('#ce27a');

var b28 = $('.b28');                  
var b28a = $('.beli28a');             
var c28 = $('.c28');
var c28a = $('.crni28a');
var be28a = $('#be28a');
var ce28a = $('#ce28a');


var b29 = $('.b29');                  
var b29a = $('.beli29a');             
var c29 = $('.c29');
var c29a = $('.crni29a');
var be29a = $('#be29a');
var ce29a = $('#ce29a');


var b30 = $('.b30');                  
var b30a = $('.beli30a');             
var c30 = $('.c30');
var c30a = $('.crni30a');
var be30a = $('#be30a');
var ce30a = $('#ce30a');


var b31 = $('.b31');                  
var b31a = $('.beli31a');             
var c31 = $('.c31');
var c31a = $('.crni31a');
var be31a = $('#be31a');
var ce31a = $('#ce31a');

                                       //  }
var b32 = $('.b32');                  
var b32a = $('.beli32a');             
var c32 = $('.c32');
var c32a = $('.crni32a');
var be32a = $('#be32a');
var ce32a = $('#ce32a');

// Make the DIV element draggable:
var beli = $('#beli');
var beli1 = $('.beli')
var crni = $('#crni');
var crni1 = $('.crni')

dragElement(document.getElementById("be0a"));
dragElement(document.getElementById("ce0a"));
dragElement(document.getElementById("be25a"));
dragElement(document.getElementById("ce25a"));
dragElement(document.getElementById("be26a"));
dragElement(document.getElementById("ce26a"));
dragElement(document.getElementById("be27a"));
dragElement(document.getElementById("ce27a"));
dragElement(document.getElementById("be28a"));
dragElement(document.getElementById("ce28a"));
dragElement(document.getElementById("be29a"));
dragElement(document.getElementById("ce29a"));
dragElement(document.getElementById("be30a"));
dragElement(document.getElementById("ce30a"));
dragElement(document.getElementById("be31a"));
dragElement(document.getElementById("ce31a"));
dragElement(document.getElementById("be32a"));
dragElement(document.getElementById("ce32a"));

dragElement(document.getElementById("be1a"));
dragElement(document.getElementById("be2a"));
dragElement(document.getElementById("be3a"));
dragElement(document.getElementById("be4a"));
dragElement(document.getElementById("be5a"));
dragElement(document.getElementById("be6a"));
dragElement(document.getElementById("be7a"));
dragElement(document.getElementById("be8a"));
dragElement(document.getElementById("be9a"));
dragElement(document.getElementById("be10a"));
dragElement(document.getElementById("be11a"));
dragElement(document.getElementById("be12a"));
dragElement(document.getElementById("be13a"));
dragElement(document.getElementById("be14a"));
dragElement(document.getElementById("be15a"));
dragElement(document.getElementById("be16a"));
dragElement(document.getElementById("be17a"));
dragElement(document.getElementById("be18a"));
dragElement(document.getElementById("be19a"));
dragElement(document.getElementById("be20a"));
dragElement(document.getElementById("be21a"));
dragElement(document.getElementById("be22a"));
dragElement(document.getElementById("be23a"));
dragElement(document.getElementById("be24a"));
dragElement(document.getElementById("ce1a"));
dragElement(document.getElementById("ce2a"));
dragElement(document.getElementById("ce3a"));
dragElement(document.getElementById("ce4a"));
dragElement(document.getElementById("ce5a"));
dragElement(document.getElementById("ce6a"));
dragElement(document.getElementById("ce7a"));
dragElement(document.getElementById("ce8a"));
dragElement(document.getElementById("ce9a"));
dragElement(document.getElementById("ce10a"));
dragElement(document.getElementById("ce11a"));
dragElement(document.getElementById("ce12a"));
dragElement(document.getElementById("ce13a"));
dragElement(document.getElementById("ce14a"));
dragElement(document.getElementById("ce15a"));
dragElement(document.getElementById("ce16a"));
dragElement(document.getElementById("ce17a"));
dragElement(document.getElementById("ce18a"));
dragElement(document.getElementById("ce19a"));
dragElement(document.getElementById("ce20a"));
dragElement(document.getElementById("ce21a"));
dragElement(document.getElementById("ce22a"));
dragElement(document.getElementById("ce23a"));
dragElement(document.getElementById("ce24a"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "img")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "img").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
}
let score2 = 0;
let result2 = $('.display-result2')

let score = 0;
let result1 = $('.display-result1');


addEventListener('keydown', jedibelog0);

function jedibelog0(e) {
    // body...
    if (e.which == 40) {
        be0a.dblclick(function () {
            $('#be0a').hide(500);
             score++;
            result1.html(score)
             if (score>7) {
     alert('Winner is player 2')
}        

        });
    }
}
addEventListener('keyup', jedicrnog0);

function jedicrnog0(e) {
    // body...
    if (e.which == 38) {
        ce0a.dblclick(function () {
            $('#ce0a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1');
     
}        
        });
    }
}


addEventListener('keydown', jedibelog25);

function jedibelog25(e) {
    // body...
    if (e.which == 40) {
        be25a.dblclick(function () {
            $('#be25a').hide(500);
             score++;
            result1.html(score)
             if (score>7) {
     alert('Winner is player 2')
}        
        });
    }
}
addEventListener('keyup', jedicrnog25);

function jedicrnog25(e) {
    // body...
    if (e.which == 38) {
        ce25a.dblclick(function () {
            $('#ce25a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });
    }
}



addEventListener('keydown', jedibelog26);

function jedibelog26(e) {
    // body...
    if (e.which == 40) {
        be26a.dblclick(function () {
            $('#be26a').hide(500);
             score++;
            result1.html(score)
             if (score>7) {
     alert('Winner is player 2')
}        
        });
    }
}
addEventListener('keyup', jedicrnog26);

function jedicrnog26(e) {
    // body...
    if (e.which == 38) {
        ce26a.dblclick(function () {
            $('#ce26a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });
    }
}


addEventListener('keydown', jedibelog27);

function jedibelog27(e) {
    // body...
    if (e.which == 40) {
        be27a.dblclick(function () {
            $('#be27a').hide(500);
             score++;
            result1.html(score)
             if (score>7) {
     alert('Winner is player 2')
}        
        });
    }
}
addEventListener('keyup', jedicrnog27);

function jedicrnog27(e) {
    // body...
    if (e.which == 38) {
        ce27a.dblclick(function () {
            $('#ce27a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });
    }
}


addEventListener('keydown', jedibelog28);

function jedibelog28(e) {
    // body...
    if (e.which == 40) {
        be28a.dblclick(function () {
            $('#be28a').hide(500);
             score++;
            result1.html(score)
             if (score>7) {
     alert('Winner is player 2')
}        
        });
    }
}
addEventListener('keyup', jedicrnog28);

function jedicrnog28(e) {
    // body...
    if (e.which == 38) {
        ce28a.dblclick(function () {
            $('#ce28a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });
    }
}


addEventListener('keydown', jedibelog29);

function jedibelog29(e) {
    // body...
    if (e.which == 40) {
        be29a.dblclick(function () {
            $('#be29a').hide(500);
             score++;
            result1.html(score)
            if (score>7) {
     alert('Winner is player 2')
}        
        });

    }
}
addEventListener('keyup', jedicrnog29);

function jedicrnog29(e) {
    // body...
    if (e.which == 38) {
        ce29a.dblclick(function () {
            $('#ce29a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });

    }
}


addEventListener('keydown', jedibelog30);

function jedibelog30(e) {
    // body...
    if (e.which == 40) {
        be30a.dblclick(function () {
            $('#be30a').hide(500);
             score++;
            result1.html(score)
             if (score>7) {
     alert('Winner is player 2')
}        
        });
        
    }
}
addEventListener('keyup', jedicrnog30);

function jedicrnog30(e) {
    // body...
    if (e.which == 38) {
        ce30a.dblclick(function () {
            $('#ce30a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });
    }
}

addEventListener('keydown', jedibelog31);

function jedibelog31(e) {
    // body...
    if (e.which == 40) {
        be31a.dblclick(function () {
            $('#be31a').hide(500);
             score++;
            result1.html(score)
              if (score>7) {
     alert('Winner is player 2')
}        
        });

    }    
 }


addEventListener('keyup', jedicrnog31);

function jedicrnog31(e) {
    // body...
    if (e.which == 38) {
        ce31a.dblclick(function () {
            $('#ce31a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        
        });
    }
}

addEventListener('keydown', jedibelog32);

function jedibelog32(e) {
    // body...
    if (e.which == 40) {
        be32a.dblclick(function () {
            $('#be32a').hide(500);
            score++;
            result1.html(score)
            if (score>7) {
     alert('Winner is player 2')
}        
        });
        
        
    }    
}


addEventListener('keyup', jedicrnog32);

function jedicrnog32(e) {
    // body...
    if (e.which == 38) {
        ce32a.dblclick(function () {
            $('#ce32a').hide(500);
            score2++;
            result2.html(score2)
            if (score2>7) {
     alert('Winner is person1')
}        


        });
    }
}

