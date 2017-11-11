$(document).ready(function() {    
    $("#myForm").on("submit", function(e) {
        e.preventDefault();
        var inputVal = $('#myInput').val();
        console.log(inputVal);
        
        var c = chars;
        var toConv = inputVal.toLocaleLowerCase();
        var threeLett = ["nga", "nge", "ngi", "ngo", "ngu", "cha", "che", "chi", "cho", "chu"];
        var charArray = [];

        while(toConv.length){
            var comp = toConv.substr(0, 3);
//            console.log("toConv orig:", toConv);
            if(threeLett.includes(comp)){
//                console.log("matches with three letter character");
//                console.log("3comp:", comp);
                toConv = toConv.substring(3);
                charArray.push(comp)
            } else{
//                console.log("no three letter character match, matching with two characters");
                comp = toConv.substr(0, 2);
                if(c[comp]){
//                    console.log("match found for two letter character");
                    toConv = toConv.substring(2);
                    charArray.push(c[comp]);
//                    console.log("2comp:", c[comp]);
                } else{
//                    console.log("no match found for two letter character, matching with one letter character");
                    comp = toConv.substr(0, 1);
                    toConv = toConv.substring(1);
                    charArray.push(comp);
//                    console.log("1comp:", comp);
                }
            }
        }

        console.log("charArray:", charArray);
        $('.panel-body').html("");

        for(var i = 0; i < charArray.length; i++){
            if(charArray[i] == " "){
                $('.panel-body').append("<span class='char char-space'></span>");
            } else{
                $('.panel-body').append("<span class='char char-"+ charArray[i] +"'data-toggle='tooltip' title=' "+ charArray[i] +" '></span>");
                $('[data-toggle="tooltip"]').tooltip(); 
            }
        }
        
    });
});