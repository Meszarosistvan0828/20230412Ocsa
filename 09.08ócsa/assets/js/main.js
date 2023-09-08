var fossz = 0
var nossz = 0

var fk = 0
var nk = 0


function hozzad()
{
var adatok=[]


if(document.getElementById("ferfi").checked)
{
   xnem = "ferfi" 
}
else
{
    xnem = "nő"
}

    var obj = { 
    nem : xnem,
    eletkor : parseInt(document.getElementById("eletkor").value),   
    }
    adatok.push(obj)
    console.log(adatok)


for(var i = 0;i<adatok.length;i++)
{
    if(adatok[i].nem == "ferfi")
    {
        fossz+=1
        fk+=adatok[i].eletkor
    }
    else
    {
        nossz+=1
        nk+=adatok[i].eletkor
    }
}


    document.getElementById("fszam").innerHTML = fossz
    document.getElementById("fszam").value = ""

    
    document.getElementById("nszam").innerHTML = nossz
    document.getElementById("nszam").value = ""

    var fer = 0;
    var noi = 0;
    if (fossz != 0) fer = fk/fossz
    if (nossz !=0) noi = nk/nossz

    document.getElementById("fkor").innerHTML = fer

    document.getElementById("nkor").innerHTML = noi



    
    


console.log(fossz)
console.log(nossz)
console.log(fk)
console.log(nk)
 }
