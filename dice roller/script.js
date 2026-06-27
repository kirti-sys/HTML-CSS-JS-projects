function rollDice(){
    const numOfdice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];

    for(let i=0;i<numOfdice;i++)
    {
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="diceimages/${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent=`dice: ${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}