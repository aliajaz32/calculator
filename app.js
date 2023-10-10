function number(num){
    
    document.getElementById('inputarea').value += num  ; 
    
}
 







function equals(){
     
    var num = document.getElementById('inputarea').value ;
    var calculated = eval(num);
    document.getElementById('inputarea').value = calculated; 

}



function ac (){
    document.getElementById('inputarea').value="";
}
function backspace(){
    var num = document.getElementById('inputarea').value 
    document.getElementById('inputarea').value = num.slice(0,num.length-1); 
}
