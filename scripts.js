function search_file() { 
  let input = document.getElementById('searchbar').value;
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('card'); 
  
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
} 

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const intro = document.createElement('p');
intro.textContent = 'something something something';


app.appendChild(container);
app.appendChild(intro);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(part => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = part.title;

      const information = document.createElement('p')
      information.textContent = `User ID: ${part.userId}, ID: ${part.id}`

      const p = document.createElement('p');
      p.textContent = `${part.body}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(information);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();