function getvalue(){
    var data =document.getElementsByName("Crop");
     var i;
     for(i=0;i<data.length;i++){
        {
         if(data[i].checked){
            document.getElementById("output1").innerHTML="pestisides required for  harvesting are:";
           
            if(data[i].value=='Wheat'){
                document.getElementById("output").innerHTML="Pre emergent herbicide Pendimethalin 8 - 8.5 mL/L of water in 160- 180 litres of water for one acre of wheat crop at 0-3 days after sowing ";
            }
            if(data[i].value=='Rice'){
                document.getElementById("output").innerHTML="Lambda-cyhalothrin, malathion and zeta-cypermethrin";
            }
            if(data[i].value=='Onion'){
                document.getElementById("output").innerHTML="Chlorpyrifos";
            }
            if(data[i].value=='Corn'){
                document.getElementById("output").innerHTML="carbaryl, cyhalothrin, cypermethrin, permethrin, orbifenthrin";
            }
            if(data[i].value=='Potato'){
                document.getElementById("output").innerHTML="Abamectin, Lambda-cyhalothrin, Dinotefuran, Imidacloprid, Thiamethoxam, Abamectin or Bifenthrin";
            }
        }
    }
 }

}