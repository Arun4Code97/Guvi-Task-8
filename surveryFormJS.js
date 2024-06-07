let stars =  document.getElementsByClassName("star");

function matchStar(n) {
	
    remove();
	
    for (let i = 0; i < n; i++) {
        if (n == 1) classNameVar = "colorchange";
        else if (n == 2) classNameVar = "colorchange";
        else if (n == 3) classNameVar = "colorchange";
        else if (n == 4) classNameVar = "colorchange";
        else if (n == 5) classNameVar = "colorchange";
        stars[i].className = "star " + classNameVar;
    }

}
 
function remove() {

    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
