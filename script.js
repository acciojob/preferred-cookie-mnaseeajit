// //your JS code here. If required.
//  let form = document.getElementById("form");

// form.addEventListener("submit",(e)=>{
// 	e.preventDefault();
// 	 let fontSize = document.getElementById("fontsize").value;
// 	 let fontColor = document.getElementById("fontcolor").value;

// 	 document.cookie = `fontsize = ${fontSize}`;
// 	document.cookie = `fontcolor = ${fontColor}`;

// 	applyUserPreference();
// })

// function applyUserPreference(){
// 	let fontSize = getCookie("fontsize");
// 	let fontcolor = getcookie("fontcolor");

// 	if(fontSize){
// 		document.body.style.fontSize = fontSize + 'px';
// 	}

// 	if(fontcolor){
// 		document.body.style.color = fontcolor;
// 	}
// }

// function getCookie(name){
// 	const cookies = document.cookie.split(";");

// 	for(let i = 0;i<cookies.length;i++)
// 		{
// 			cont cookie = cookies[i].split("=");
// 			if(cookie[0] === name){
// 				return decodeURIComponent(cookie[1]);
// 			}
// 		}
// 	return null;
// }

// applyUserPreference();

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fontSize = document.getElementById("fontsize").value;
    let fontColor = document.getElementById("fontcolor").value;

    document.cookie = `fontsize=${fontSize}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`;
    document.cookie = `fontcolor=${fontColor}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`;

    applyUserPreference();
});

function applyUserPreference() {
    let fontSize = getCookie("fontsize");
    let fontColor = getCookie("fontcolor");

    if (fontSize) {
        document.body.style.fontSize = fontSize + 'px';
    }

    if (fontColor) {
        document.body.style.color = fontColor;
    }
}

function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0].trim() === name) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return null;
}

applyUserPreference();
