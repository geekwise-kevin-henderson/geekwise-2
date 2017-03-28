var content = document.getElementById('content'),
section = document.createElement('section'),
div = document.createElement('div'),
h2 = document.createElement('h2'),
p = document.createElement('p'),
img = document.createElement('img'),
distance = document.querySelector('#floater div p:nth-child[1] span'),
winH = document.querySelector('#floater div p:nth-child[2] span'),

img.href = 'https://www.unsplash.it/200/200';
dist = window.scrollY;
windowH = window.innerHeight;
distance.textContent = dist;
winH.textContent = windowH;
