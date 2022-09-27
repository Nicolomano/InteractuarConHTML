const nombres =[];
let cantidad = 7;


while (nombres.length != cantidad) {
    let entrada = prompt("ingrese nombre");
    nombres.push(entrada.toUpperCase());
}

for (const item of nombres) {
    let ul = document.getElementById("nombres")
    let li = document.createElement("li");
    li.innerHTML= item;
    ul.append(li);
}