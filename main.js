var tét = 1000
var katt = 0;
var nulatet = 0
var egyenleg = 10000

document.getElementById("egyenleg").innerHTML = egyenleg

function tétlevesz()
{
    tét = 0

    document.getElementById("levesz").style.backgroundColor = "red"

    document.getElementById("gomb20").style.backgroundColor = "white"
    document.getElementById("gomb50").style.backgroundColor = "white"
    document.getElementById("gomb100").style.backgroundColor = "white"
    document.getElementById("gomb250").style.backgroundColor = "white"
    document.getElementById("gomb500").style.backgroundColor = "white"

}

function tét20()
{
    tét = 20;

    document.getElementById("levesz").style.backgroundColor = "white"

    document.getElementById("gomb20").style.backgroundColor = "yellowgreen"
    document.getElementById("gomb50").style.backgroundColor = "white"
    document.getElementById("gomb100").style.backgroundColor = "white"
    document.getElementById("gomb250").style.backgroundColor = "white"
    document.getElementById("gomb500").style.backgroundColor = "white"
}
function tét50()
{
    tét = 50

    document.getElementById("levesz").style.backgroundColor = "white"

    document.getElementById("gomb20").style.backgroundColor = "white"
    document.getElementById("gomb50").style.backgroundColor = "yellowgreen"
    document.getElementById("gomb100").style.backgroundColor = "white"
    document.getElementById("gomb250").style.backgroundColor = "white"
    document.getElementById("gomb500").style.backgroundColor = "white"
}
function tét100()
{
    tét = 100
    
    document.getElementById("levesz").style.backgroundColor = "white"

    document.getElementById("gomb20").style.backgroundColor = "white"
    document.getElementById("gomb50").style.backgroundColor = "white"
    document.getElementById("gomb100").style.backgroundColor = "yellowgreen"
    document.getElementById("gomb250").style.backgroundColor = "white"
    document.getElementById("gomb500").style.backgroundColor = "white"
}
function tét250()
{
    tét = 250

    document.getElementById("levesz").style.backgroundColor = "white"

    document.getElementById("gomb20").style.backgroundColor = "white"
    document.getElementById("gomb50").style.backgroundColor = "white"
    document.getElementById("gomb100").style.backgroundColor = "white"
    document.getElementById("gomb250").style.backgroundColor = "yellowgreen"
    document.getElementById("gomb500").style.backgroundColor = "white"
}
function tét500()
{
    tét = 500;

    document.getElementById("levesz").style.backgroundColor = "white"

    document.getElementById("gomb20").style.backgroundColor = "white"
    document.getElementById("gomb50").style.backgroundColor = "white"
    document.getElementById("gomb100").style.backgroundColor = "white"
    document.getElementById("gomb250").style.backgroundColor = "white"
    document.getElementById("gomb500").style.backgroundColor = "yellowgreen"
}
tet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function Katt(x)
{   
        if(tét==1000)
        {
        alert("Válassza ki a tétet")
        }
        if(tét==0)
        {
            document.getElementById("sz"+x).innerHTML = x
            egyenleg+=tet[x]
            tet[x]=0
            document.getElementById("egyenleg").innerHTML = egyenleg
        }

    if(egyenleg!=0)
    {
        
        if(tét==20)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='20coin.pwng' class='coin'>"
            tet[x]+=20
            egyenleg-=20
            document.getElementById("egyenleg").innerHTML = egyenleg
        }
        else if(tét==50)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='50coin.png' class='coin'>"
            tet[x]+=50
            egyenleg-=50
            document.getElementById("egyenleg").innerHTML = egyenleg   
        }
        else if(tét==100)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='100coin.png' class='coin'>"
            tet[x]+=100
            egyenleg-=100
            document.getElementById("egyenleg").innerHTML = egyenleg   
    
        }
        else if(tét==250)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='250coin.png' class='coin'>"
            tet[x]+=250
            egyenleg-=250   
            document.getElementById("egyenleg").innerHTML = egyenleg   
        }
        else if(tét==500)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='500coin.png' class='coin'>"
            tet[x]+=500
            egyenleg-=500
            document.getElementById("egyenleg").innerHTML = egyenleg   
    
        }
    }
    else
    {
        alert("Elfogyott az egyenleg")
        egyenleg =0
    }
    } 
var szamsor = ["0","32","15","19","4","21","2","25","17","34","6","27","13","36","11","30","8","23","10","5","24","16","33","1","20","14","31","9","22","18","29","7","28","12","35","3","26"]
var nyerszam = []
var s = document.getElementById("asd123").innerHTML
var nullalett = 0;
function general()
{
    for(var i = 0;i<5;i++)
    {
        document.getElementById("porgo"+i).innerHTML = "<img src='"+szamsor[i]+".png' class='porgoszamok'>"    
    }
}

function Porgetes()
{
    general()
    
}



   // for (var i = 0; i <=szamsor.length+10000;i++) {
        //x = Math.floor(Math.random() * 37);
       // nyerszam+=x
      //  nyerszam+=","
    //}

    //var kezdoszam = Math.floor(Math.random() * 37);
    //if(szamsor[kezdoszam]==0){   document.getElementById("asd123").innerHTML += "<div class='col-md-1 zero'>"+szamsor[kezdoszam]+"</div>"}
    //else if(szamsor[kezdoszam]%2==0)
    //{
      //  document.getElementById("asd123").innerHTML += "<div class='col-md-1 piros'>"+szamsor[kezdoszam]+"</div>"
    //}
    //else
   // {
      //  document.getElementById("asd123").innerHTML += "<div class='col-md-1 fekete'>"+szamsor[kezdoszam]+"</div>"
    //}