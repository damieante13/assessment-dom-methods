//console.log("damiean Rocks")

const button = document.createElement("button")

button.setAttribute("name", "easy-btn")
button.setAttribute("height", "30px")
button.setAttribute("width", "30px")
button.textContent= " EASY "

document.body.append(button)

const divElement=document.createElement("main")
divElement.setAttribute("id", "main")

document.body.append(divElement)

const image = document.createElement("img")

image.setAttribute("src", "atk-da-block.jpg" );
image.setAttribute("height", "393");
image.setAttribute("width", "500");
image.setAttribute("alt", "Attack the Block");
image.setAttribute("class", "image")

divElement.append(image)

link = document.createElement("a");
link.setAttribute("class", "link");
link.setAttribute("href", "https://www.marvel.com/movies/avengers-infinity-war");
link.textContent="Avengers Assemble"

divElement.append(link)