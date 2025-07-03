function quiz(){
    let answer = prompt("What's your favorite color?")
    if(answer === "green"){
        document.querySelector(".result").innerText ="+20 points, you are right!"
    } else{document.querySelector(".result").innerText ="-20 you suck!"

    }
}function quiz2(){
    let answer = prompt("How old are you?")
    if(answer === "12"){
        document.querySelector(".result2").innerText ="+20 points, you are right!"
    } else{document.querySelector(".result2").innerText ="-20 you suck!"

    }
} 

 function quiz3(){
    let answer = prompt("do you like Dragon Ball?")
    if(answer === "yes"){
        document.querySelector(".result3").innerText ="+20 points, you are right!"
    } else{document.querySelector(".result3").innerText ="-20 you suck!"

    }
} 

 function quiz4(){
    let answer = prompt("what pet do you have?")
    if(answer === "dog"){
        document.querySelector(".result4").innerText ="+20 points, you are right!"
    } else{document.querySelector(".result4").innerText ="-20 you suck!"
    }    
}  
         function quiz5(){
    let answer = prompt("are you straight")
    if(answer === "yes"){
        document.querySelector(".result5").innerText ="YOU ARE AMAZING!"
    } else{document.querySelector(".result5").innerText ="I HATE YOU!"
  
    }
 }
