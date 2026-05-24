function login(){

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(
        username === "Dimpu"
        &&
        password === "19/06/2008"
    ){

        goToPage(2);

    }else{

        document.getElementById("error")
            .innerHTML =
            "❌ Wrong Username or Password";
    }
}

/* PAGE SWITCH */

function goToPage(pageNumber){

    document.querySelectorAll(".page")
        .forEach((page)=>{

            page.classList.remove("active");
        });

    document.getElementById(
        "page"+pageNumber
    ).classList.add("active");
}

/* MEMORY GAME */

const images = [

    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",

    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

/* SHUFFLE */

images.sort(()=>Math.random()-0.5);

/* GAME BOARD */

const gameBoard =
    document.getElementById("gameBoard");

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let matchedPairs = 0;

/* CREATE CARDS */

images.forEach((imageSrc)=>{

    const card =
        document.createElement("div");

    card.classList.add("card");

    card.innerHTML =
        `<img src="${imageSrc}">`;

    gameBoard.appendChild(card);

    /* CLICK EVENT */

    card.addEventListener("click",()=>{

        if(lockBoard) return;

        if(card===firstCard) return;

        if(card.classList.contains("matched"))
            return;

        /* SHOW IMAGE */

        card.classList.add("flipped");

        /* FIRST CARD */

        if(!firstCard){

            firstCard=card;

            return;
        }

        /* SECOND CARD */

        secondCard=card;

        const firstImage =
            firstCard.querySelector("img").src;

        const secondImage =
            secondCard.querySelector("img").src;

        /* MATCH CHECK */

        if(firstImage===secondImage){

            firstCard.classList.add("matched");

            secondCard.classList.add("matched");

            matchedPairs++;

            firstCard=null;

            secondCard=null;

            /* WIN CONDITION */

            if(matchedPairs===8){

                document.getElementById("result")
                    .innerHTML =
                    "🎉 You Won The Game ❤️";
            }

        }else{

            lockBoard=true;

            /* HIDE AFTER 1 SECOND */

            setTimeout(()=>{

                firstCard.classList.remove("flipped");

                secondCard.classList.remove("flipped");

                firstCard=null;

                secondCard=null;

                lockBoard=false;

            },1000);
        }
    });
});