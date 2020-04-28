let hedgy=document.querySelector(".hedgy");

hedgy.addEventListener("mouseover", function(e){
    e.stopPropagation();
    confetti.start()
    console.log("over");
});

hedgy.addEventListener("mouseout", function(e){
    e.stopPropagation();
    confetti.stop()
    console.log("over");
});