let para1 = document.createElement("p");
para1.innerText = "Hey I'm red and I am new para";
document.body.append(para1);  // or document.querySelector("body").append(para1)
para1.classList.add("red");


document.body.insertAdjacentHTML('beforeend', '<p class="red">Hey I\'m red and I am new para</p>');


document.body.innerHTML += '<p class="red">Hey I\'m red and I am new para</p>';
