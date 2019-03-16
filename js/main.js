

function size_ons(){
    document.getElementById("demo").style.fontSize=document.getElementById("optionat").value;
}



function font_ons(){
    document.getElementById("demo").style.fontFamily=document.getElementById("optionat1").value;
}



function bold(){
    document.getElementById("demo").style.fontWeight="bold"; }
    

function italic(){
        if(document.getElementById("demo").style.fontStyle=="normal")
        {document.getElementById("demo").style.fontStyle="italic"}
        else{document.getElementById("demo").style.fontStyle="normal"}; }

        
function lined(){
    document.getElementById("demo").style.textDecoration="underline"; }