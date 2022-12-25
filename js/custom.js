let player = document.querySelector(".player");
let playeroneinput = document.querySelector(".playeroneinput")
let playertwoinput = document.querySelector(".playertwoinput")
let playeronebtn =document.querySelector(".playeronebtn")
let playertwobtn =document.querySelector(".playertwobtn")
let playeroneeror =document.querySelector(".playeroneeror")
let playertwoeror =document.querySelector(".playertwoeror")
let playerone =document.querySelector(".playerone")
let playertwo = document.querySelector(".playertwo")
let remain = document.querySelector(".remain")


let playernumber;
let chancenumber = 3

playeronebtn.addEventListener("click",function(e){
      e.preventDefault()
      if(playeroneinput.value){
       if(playeroneinput.value - 10){
            if(playeroneinput.value > 0 && playeroneinput.value <10 ){
                    playeroneeror.innerHTML =""
                    playernumber = playeroneinput.value
                    player.innerHTML ="player two"
                    playertwo.style.display = "block"
                    playerone.style.display = "none"


            }else{
               playeroneeror.innerHTML = "please type number 1 to 10"
            }
       }else{
             playeroneeror.innerHTML = "please type number not string"
       }
      }else{
        playeroneeror.innerHTML = "please give input value"
       
      }
})
playertwobtn.addEventListener("click",function(e){
      e.preventDefault()
      if(playertwoinput.value){
       if(playertwoinput.value - 10){
            if(playertwoinput.value > 0 && playertwoinput.value <10 ){
                    playertwoeror.innerHTML =""
                    chancenumber --
                    if(chancenumber !== 0){
                        if(playernumber == playertwoinput.value){
                            playertwoeror.innerHTML="player two winner"
                            playertwoeror.style.color = "green"
                           }else{
                              chance.innerHTML = chancenumber
                           }
                    }else{
                        playertwoeror.innerHTML="player one winner"
                      chance.innerHTML ="Game Over " 
                      playertwoeror.style.color = "green"
                    }
                   
            }else{
               playertwoeror.innerHTML = "please type number 1 to 10"
            }
       }else{
             playertwoeror.innerHTML = "please type number not string"
       }
      }else{
        playertwoeror.innerHTML = "please give input value"
       
      }
})