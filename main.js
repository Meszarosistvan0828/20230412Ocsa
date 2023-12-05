var tét = 1000
var katt = 0;
var nulatet = 0
var egyenleg = 100000
var winner = 0;
function betolto()
{ egyenlegfrissito = setInterval(() => {
        document.getElementById("egyenleg").innerHTML = egyenleg
    }, 10);
    ossztetfrissito = setInterval(() => {
    var ossztet = 0;
    for(var i=0;i<tet.length;i++)
    {
    ossztet+=tet[i]
    }
    document.getElementById("ossztet").innerHTML = ossztet 
    }, 10);
}

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
tet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function Katt(x)
{   
        if(tét==1000)
        {
        alert("Válassza ki a tétet")
        }
        if(tét==0)
        {
            document.getElementById("sz"+x).innerHTML = x
            if(x==37)
            {
                document.getElementById("sz37").innerHTML ="1st 12"
            }
            if(x==38)
            {
                document.getElementById("sz38").innerHTML ="2st 12"
            }
            if(x==39)
            {
                document.getElementById("sz39").innerHTML ="3st 12"
            }
            if(x==40)
            {
                document.getElementById("sz40").innerHTML ="1-18"
            }
            if(x==41)
            {
                document.getElementById("sz41").innerHTML ="Even"
            }
            if(x==42)
            {
                document.getElementById("sz42").innerHTML =""
            }
            if(x==43)
            {
                document.getElementById("sz43").innerHTML =""
            }
            if(x==44)
            {
                document.getElementById("sz44").innerHTML ="Odd"
            }
            if(x==45)
            {
                document.getElementById("sz45").innerHTML ="19-36"
            }
            egyenleg+=tet[x]
            tet[x]=0
            document.getElementById("egyenleg").innerHTML = egyenleg
        }

    if(egyenleg!=0)
    {
        
        if(tét==20)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='tétcoin/csin20.png' class='coin'>"
            tet[x]+=20
            egyenleg-=20
            document.getElementById("egyenleg").innerHTML = egyenleg
        }
        else if(tét==50)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='tétcoin/csin50.png' class='coin'>"
            tet[x]+=50
            egyenleg-=50
            document.getElementById("egyenleg").innerHTML = egyenleg   
        }
        else if(tét==100)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='tétcoin/csin100.png' class='coin'>"
            tet[x]+=100
            egyenleg-=100
            document.getElementById("egyenleg").innerHTML = egyenleg   
    
        }
        else if(tét==250)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='tétcoin/csin250.png' class='coin'>"
            tet[x]+=250
            egyenleg-=250   
            document.getElementById("egyenleg").innerHTML = egyenleg   
        }
        else if(tét==500)
        {
            document.getElementById("sz"+x).innerHTML = "<img src='tétcoin/csin500.png' class='coin'>"
            tet[x]+=500
            egyenleg-=500
            document.getElementById("egyenleg").innerHTML = egyenleg   
    
        }
    }
    else
    {
        alert("Elfogyott az egyenleg")
        egyenleg=0
    }
    } 
zsalma=[1,2,3]
tet2=[0,0,0]
function st(zsalma)
{

}

var szamsor = ["0","32","15","19","4","21","2","25","17","34","6","27","13","36","11","30","8","23","10","5","24","16","33","1","20","14","31","9","22","18","29","7","28","12","35","3","26"]
var nyerszam = []

var nullalett = 0;
var meddigmenjen = 0;
var nyeremeny = 0;
var idozito = null;
var idozito2 = null;
elozotakaritas = 0;

function Porgetes()
{
    
    document.getElementById("slot").style.height = 100
    document.getElementById("winner").innerHTML= "0"
    document.getElementById("porgeto").innerHTML = ""
    document.getElementById("sz"+nyeremeny).style.border = "1px solid white"

    ossztet = 0;
    winner = 0;
    meddigmenjen = Math.floor(Math.random()*50)+10;
    idozito2=setInterval(() => {
    if(meddigmenjen == 0)
    {
        for (var i = 0; i < 46; i++) 
        {   
                document.getElementById("sz"+i).innerHTML= i
                if(i==37)
                {
                    document.getElementById("sz37").innerHTML ="1st 12"
                }
                if(i==38)
                {
                    document.getElementById("sz38").innerHTML ="2st 12"
                }
                if(i==39)
                {
                    document.getElementById("sz39").innerHTML ="3st 12"
                }
                if(i==40)
                {
                    document.getElementById("sz40").innerHTML ="1-18"
                }
                
                if(i==41)
                {
                    document.getElementById("sz41").innerHTML ="Even"
                }
                if(i==42)
                {
                    document.getElementById("sz42").innerHTML =""
                }
                if(i==43)
                {
                    document.getElementById("sz43").innerHTML =""
                }
                
                if(i==44)
                {
                    document.getElementById("sz44").innerHTML ="Odd"
                }
                
                if(i==45)
                {
                    document.getElementById("sz45").innerHTML ="19-36"
                }
        }
        document.getElementById("egyenleg").innerHTML = egyenleg
        clearInterval(idozito2)
    }    
}, 100);
    idozito = setInterval(()=>{
        let poz = Math.floor(Math.random()*szamsor.length);
        nyeremeny = szamsor[poz];
        document.getElementById("slot").innerHTML = '<img class="szamostema" src=porgetosdi/'+nyeremeny+'.png>';
        meddigmenjen--;

        if (meddigmenjen == 0)
        {   
        document.getElementById("slot").innerHTML = '<img class="nyertestema" src=porgetosdi/'+nyeremeny+'.png>';
        document.getElementById("sz"+nyeremeny).style.border= "5px solid gold"
        clearInterval(idozito)
        document.getElementById("porgeto").innerHTML = "<button onclick='Porgetes()'>Pörgetés</button>"
    console.log(winner += (tet[parseInt(nyeremeny)]*36))
    if(nyeremeny>0 && nyeremeny<13)
    {
        winner+=tet[37]*3
    }
    
    if(nyeremeny>12 && nyeremeny<25)
    {
        winner+=tet[38]*3
    }

    if(nyeremeny>24 && nyeremeny<37)
    {
        winner+=tet[39]*3
    }

    if(nyeremeny>0 && nyeremeny<19)
    {
        winner+=tet[40]*2
    }
    if(nyeremeny<19&&nyeremeny>37)
    {
        winner+=tet[45]*2
    }
    if(nyeremeny!=0)
    {
        if(nyeremeny%2==0)
        {
            winner+=tet[41]*2
        }
        else
        {
            winner+=tet[44]*2
        }
    }
    if(nyeremeny!=0)
    {
        if(nyeremeny==1 || nyeremeny==3 || nyeremeny==5 || nyeremeny==7 || nyeremeny==9 || nyeremeny==12 || nyeremeny==14 || nyeremeny==16 || nyeremeny==18 || nyeremeny==19 || nyeremeny==21 || nyeremeny==23 || nyeremeny==25 || nyeremeny==27 || nyeremeny==30 || nyeremeny==32 || nyeremeny==34 || nyeremeny==36)
        {
            winner+=tet[42]*2
        }
        else
        {
            winner+=tet[43]*2
        }
    }
    
document.getElementById("winner").innerHTML = winner

    console.log(winner)
    egyenleg+=winner
    for(var x = 0;x<=50;x++)
    {tet[x]=0}
        }
    },100)
}   