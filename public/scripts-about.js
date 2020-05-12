const cardsAbout = document.querySelectorAll(".card-about")

for(let cards of cardsAbout){
    cards.addEventListener("click", function(){
        const videoAboutId = cards.getAttribute("id");
        console.log(videoAboutId);
        window.location.href = `/video?id=${videoAboutId}`;
    })
}