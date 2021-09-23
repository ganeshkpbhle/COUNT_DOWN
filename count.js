var text=document.getElementById('count-text');
var start=document.getElementById('start');
var reset=document.getElementById('reset');
var text1=document.getElementById('text');
var day=document.getElementById('day');
var Body=document.body;
var count=10;
var r=Math.random;
start.addEventListener('click',()=>{
text.innerHTML=count;count--;
start.style.visibility="hidden";
text1.style.visibility="hidden";
reset.disabled=true;
setTimeout(()=>{
    reset.style.visibility="visible";
    text.innerHTML=count;count--;
    setTimeout(()=>{
        random=Math.random();
        Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
        r().toFixed(1)+")";
        text.innerHTML=count;count--;
        setTimeout(()=>{
            random=Math.random();
            Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
            r().toFixed(1)+")";
            text.innerHTML=count;count--;
            setTimeout(()=>{
                random=Math.random();
                Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
                r().toFixed(1)+")";
                text.innerHTML=count;count--;
                setTimeout(()=>{
                    Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
                    r().toFixed(1)+")";
                    text.innerHTML=count;count--;
                    setTimeout(()=>{
                        Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
                        r().toFixed(1)+")";
                        text.innerHTML=count;count--;
                        setTimeout(()=>{
                            Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
                            r().toFixed(1)+")";
                            text.innerHTML=count;count--;
                            setTimeout(()=>{
                                Body.style.backgroundColor="rgba("+Math.round(random*255)+","+Math.round(random*255)+","+Math.round(random*255)+","+
                                r().toFixed(1)+")";
                                text.innerHTML=count;count--;
                                setTimeout(()=>{
                                    Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
                                    r().toFixed(1)+")";
                                    text.innerHTML=count;
                                    setTimeout(()=>{
                                        Body.style.backgroundColor="rgba("+Math.round(r()*255)+","+Math.round(r()*255)+","+Math.round(r()*255)+","+
                                        r().toFixed(1)+")";
                                        text.innerHTML="";
                                        day.innerHTML="Happy<br>Birthday"
                                    },800);
                                    reset.disabled=false;
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
});
reset.addEventListener('click',()=>{
    count=10;
    day.innerHTML="";
    start.style.visibility="visible";
    reset.style.visibility="hidden";
    text1.style.visibility="visible";
});