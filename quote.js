const words = ["Websites promote you 24/7: No employee will do that. - Paul Cookson",
"If you're already a front-end developer, well, pretend you're also wearing a pirate hat. - Ethan Marcotte",
"We don't just build websites, we build websites that SELLS. - Christopher Dayagdag",
"The true ENTREPRENEUR is a risk taker, not an excuse maker. - VDEXTERS",
"Website without visitors is like a ship lost in the horizon. - Dr. Christopher Dayagdag",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
"It is during our darkest moments that we must focus to see the light. - Aristotle"];
const randomindex = Math.floor(Math.random()*words.length); 
console.log(randomindex);
const quote = document.querySelector(".quote")
quote.textContent = `${words[randomindex]}`

const red = document.querySelector(".red1")
const blue = document.querySelector(".blue1")
const green = document.querySelector(".green1")
const violet = document.querySelector(".violet1")

red.addEventListener("click",function(){
    quote.classList.add("red");
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("violet");

});

blue.addEventListener("click",function(){
    quote.classList.add("blue");
    quote.classList.remove("red");
    quote.classList.remove("green");
    quote.classList.remove("violet");

});

green.addEventListener("click",function(){
    quote.classList.add("green");
    quote.classList.remove("blue");
    quote.classList.remove("red");
    quote.classList.remove("violet");

});

violet.addEventListener("click",function(){
    quote.classList.add("violet");
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("red");
});




