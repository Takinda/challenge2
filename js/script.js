function sendrate(){
    document.getElementById("main").style.display = "none"; 
    document.getElementById("thankyou").style.display = "block";
};
function ratenum(){
    var ele = document.getElementsByName('rate');

    for(i=0;i<ele.length;i++){
        if(ele[i].click){
        document.getElementById("res").innerHTML = ele[i].value;
        }
        
    }
}