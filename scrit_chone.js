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
