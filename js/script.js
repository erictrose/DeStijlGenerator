console.log('Loading Script...');

window.onload = function any_function_name(){
    
    for(i=0;i<100;i++){
        
        var fillcolor;
        var heightnumber=Math.floor(Math.random()*200);
        var widthnumber=Math.floor(Math.random()*200);
        var colornumber=Math.floor(Math.random()*100);
        if(colornumber<=60){fillcolor="white"}
        else if(colornumber<=70){fillcolor="red"}
        else if(colornumber<=80){fillcolor="green"}
        else if(colornumber<=90){fillcolor="blue"}
        else {fillcolor="yellow"}

        console.log("creating div: height " +heightnumber +"; width " +widthnumber +"; color " +fillcolor);

        var heightconcat=heightnumber.toString() +'px';
        var widthconcat=widthnumber.toString() +'px';
        var wrapper = document.getElementById('wrapper');
        var div=document.createElement('div');
        
        div.style.background=fillcolor;
        div.setAttribute('class', 'block');
        div.style.height=heightconcat;
        div.style.width=widthconcat;
        
        wrapper.appendChild(div);
    }
};
console.log('...Script Loaded');