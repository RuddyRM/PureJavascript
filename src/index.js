import message from './message';
console.log(message);

const paragraph = document.createElement('p');
paragraph.innerHTML = message;
document.body.prepend(paragraph);

const header = document.createElement('h2');
header.innerHTML = "Fun with circle ci";
document.body.prepend(header);
