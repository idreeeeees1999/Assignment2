$(function(){

    $("#button").click(handelbtn);

});


function handelbtn(){
    console.log("btn active");
 

    var chocolateMilk={ carbo:26,calories:208};
    var LowFatMilk={ carbo:12, calories:121};
    var Pudding ={ carbo:30,calories:161};
    var SkimMilk={ carbo:12,calories:86};
    var YogurtFruitFlavored ={ carbo:42,calories:226};
    var Yogurt={ carbo:34,calories:230};
    var arr=[];
    var carbo=0;
    var calories =0;








// calories calculation


    if($("#Chocolate-milk").is(':checked')){
        arr[0]=chocolateMilk;
        

    }
    
    if($("#Low-fat-milk").is(':checked')){

        if(arr[0]== null){
        arr[0]=LowFatMilk;
        
        }
        else{
            arr[1]=LowFatMilk;
      
        }

    }




    if($("#Pudding").is(':checked')){
        
        if(arr[0] == null){
        arr[0]=Pudding;
        
       
        }
        else if(arr[1]==null){
        arr[1]=Pudding;
       
        }
        else{
        arr[2]=Pudding;
         
            
        }
    }




    if($("#Skim-milk").is(':checked')){
        if(arr[0] == null){
        arr[0]=SkimMilk;
    
            
        }
        else if(arr[1]==null){
        arr[1]=SkimMilk;
       
            
        }
        else if(arr[2]==null){
        arr[2]=SkimMilk;
      
        }
        else{
        arr[3]=SkimMilk;
      
        }

    }




    if($("#Yogurt-fruit-flavored").is(':checked')){
        if(arr[0]==null){
        arr[0]=YogurtFruitFlavored;
       
        
        }
        else if(arr[1]==null){
        arr[1]=YogurtFruitFlavored;
  
        
        }
        else if(arr[2]==null){
        arr[2]=YogurtFruitFlavored;
       
        
        }
        else if(arr[3]==null){
        arr[3]=YogurtFruitFlavored;
      
        
        }
        else{
        arr[4]=YogurtFruitFlavored;
    
        }
    }





    if($("#Yogurt").is(':checked')){
        if(arr[0]==null){
        arr[0]=Yogurt;
        
        }
        else if(arr[1]==null){
        arr[1]=Yogurt;
           
        }
        else if(arr[2]==null){
        arr[2]=Yogurt;
         
        }
        else if(arr[3]==null){
        arr[3]=Yogurt;
         
        }
        else if(arr[4]==null){
        arr[4]=Yogurt;
        
        }
        else{
        arr[5]=Yogurt;
        
        }


    }
  









    for(var i=0; i<arr.length ;i++){
        calories += arr[i].calories;
         carbo += arr[i].carbo;
    }



    $("#calories").empty();
    $("#calories").append("Calories: "+calories);
    $("#carbo").empty();
    $("#carbo").append("Carbohydrates: "+carbo);

  









  

}