function getvalue(){
    var data =document.getElementsByName("season");
    var data1=document.getElementById("land").value;
     var i,j;
     console.log(data1)
     for(i=0;i<data.length;i++){
         if(data[i].checked){
            document.getElementById("output1").innerHTML="Total Amount needed to cultivate:";
           
            if(data[i].value=='paddy'){
                let r=(data1)*28219
                document.getElementById("output").innerHTML=r;
            }
            if(data[i].value=='wheat'){
                let r1=data1*12454
                document.getElementById("output").innerHTML=r1;
            }
            if(data[i].value=='barley'){
                let r2=data1*22449
                document.getElementById("output").innerHTML=r2;
            }
            if(data[i].value=='maize'){
                let r2=data1*15580
                document.getElementById("output").innerHTML=r2;
            }
            if(data[i].value=='bengalgram'){
                let r2=data1*6345
                document.getElementById("output").innerHTML=r2;
            }
            if(data[i].value=='sugarcane'){
                let r2=data1*29993
                document.getElementById("output").innerHTML=r2;
            }
          
     }
    }
 }