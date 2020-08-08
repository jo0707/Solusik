let name            = prompt("Siapakah nama anda?")
let greetingText    = document.getElementById("greetingText")

if (name != null || name != '') 
    greetingText.innerText  = "Selamat Datang, " + name + "!"
else greetingText.innerText  = "Selamat Datang!"