function getvalue(){
    var data =document.getElementsByName("season");
    var data1=document.getElementsByName("soil");
     var i,j;
     for(i=0;i<data.length;i++){
        for(j=0;j<data1.length;j++){
         if(data[i].checked && data1[j].checked){
            document.getElementById("output1").innerHTML="Crops that can be harvested are:";
           
            if(data[i].value=='summer' && data1[j].value=='alluvial'){
                document.getElementById("output").innerHTML="Paddy/Rice,Sugarcane,Cotton,Maize ";
            }
            if(data[i].value=='summer' && data1[j].value =='black'){
                document.getElementById("output").innerHTML="Soyabean,Groundnut,Sorghum,Cotton";
            }
            if(data[i].value=='summer' && data1[j].value=='RedandYellow'){
                document.getElementById("output").innerHTML="Paddy/Rice,Millets,Cotton,Groundnut ";
            }
            if(data[i].value=='summer' && data1[j].value=='loamy'){
                document.getElementById("output").innerHTML="Tomatoes,Peppers,Cucumbers,Squash,Watermelons, ";
            }
            
            if(data[i].value=='winter' && data1[j].value=='alluvial'){
                document.getElementById("output").innerHTML="Wheat,Barley,Oats,Rapseed,Mustard  ";
            }
            if(data[i].value=='winter' && data1[j].value=='black'){
                document.getElementById("output").innerHTML="Wheat,Barley,Gram,Mustard,Rapeseed ";
            }
            if(data[i].value=='winter' && data1[j].value=='RedandYellow'){
                document.getElementById("output").innerHTML="Wheat,Barley,Rapseed,Mustard,Gram,  ";
            }
            if(data[i].value=='winter' && data1[j].value=='loamy'){
                document.getElementById("output").innerHTML="Wheat(Winter wheat),Rapseed,Mustard,Barley,Oats";
            }
            if(data[i].value=='moonsoon' && data1[j].value=='alluvial'){
                document.getElementById("output").innerHTML="Paddy/Rice,Maize,Sugarcane,Turmeric,Tobacco";
            }
            if(data[i].value=='moonsoon' && data1[j].value=='black'){
                document.getElementById("output").innerHTML=" Paddy/Rice,Maize,Sorghum,Groundnut,Soyabean";
            }
            if(data[i].value=='moonsoon' && data1[j].value=='RedandYellow'){
                document.getElementById("output").innerHTML="Paddy/Rice,Maize,Sorghum,Turmeric,Groundnut ";
            }
            if(data[i].value=='moonsoon' && data1[j].value=='loamy'){
                document.getElementById("output").innerHTML="Paddy/Rice,Maize,Sorghum,Groundnut,Turmeric,  ";
            }
          
     }
    }
 }

}