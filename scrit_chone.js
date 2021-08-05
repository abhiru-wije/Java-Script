function ageInDays(){
    let birthyear = prompt("What year you were born? ");
    let ageInDateAmount = (2021 - birthyear) *365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are '+ ageInDateAmount + ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
 
};

function reset() {
    document.getElementById('ageInDays').remove();
}
function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
    div.appendChild(image);
}