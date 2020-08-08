let name            = prompt("Siapakah nama anda?");
let greetingText    = document.getElementById("greetingText");
let images          = document.body.querySelectorAll(".flex-art-image");

for (let i=0;i<images.length;i++) {
    with (images[i]) {
        addEventListener('click', function(event) {
        window.open(getAttribute("src"), "_blank");
        })
    }
}

if (name != null) 
    greetingText.innerText  = "Selamat Datang, " + name + "!";
else 
    greetingText.innerText  = "Selamat Datang!";