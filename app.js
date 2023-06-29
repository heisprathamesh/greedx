let check=()=>{

    var n1 = parseInt( document.querySelector("#n1").value);
    var n2 = parseInt( document.querySelector("#n2").value);
    var n3 = parseInt( document.querySelector("#n3").value);
    var n4 = parseInt( document.querySelector("#n4").value);
    var n5 = parseInt( document.querySelector("#n5").value);
    var n6 = parseInt( document.querySelector("#n6").value);


    let total = n1 +n2 +n3+n4+n5+n6;

    let subs = [n1, n2,n3,n4,n5,n6];

    let percent = total/(subs.length*100)*100;

    var grade= 0;
    if(percent<35){
        grade="Fail";
    }
    else if((percent>=35)&&(percent<=60)){
        grade="F";
    }
    else if((percent>=61)&&(percent<=70)){
        grade="D";
    }
    else if((percent>=71)&&(percent<=80)){
        grade="C";
    }
    else if((percent>=81)&&(percent<=90)){
        grade="B";
    }
    else if((percent>=91)&&(percent<=100)){
        grade="A"
    }
    else{
        grade="A+"
    }


    document.querySelector("#res1").innerHTML=(`Total Marks: ${total}`);
    document.querySelector("#res2").innerHTML=(`Percentage : ${percent.toFixed(2)}`);
    document.querySelector("#res3").innerHTML=(`Grade : ${grade}`);
    document.querySelector("#res4").innerHTML=(`hey!! don't let your grades let down your dreams!<br> bye bye👋🏻👊🏻`);
    _thenord();
    
}

let _thenord=()=>{
    var x =document.getElementById("result").style.display="flex";

}

var forms = document.querySelector(".btns");
forms.addEventListener("click", check);  