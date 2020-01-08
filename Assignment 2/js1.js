//console.log(document.readyState);
var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days=[];
var time=[];
console.log(document.readyState);
var temp=[];
var country,city;
var year,month,date,dat;
var c=0;

function dys(x){
  var dy={'0':'SUN','1':'MON','2':'TUE','3':'WED','4':'THUR','5':'FRI','6':'SAT'  };
  var i;
  for(i in dy){
    if (i==x)
    {
      return dy[i];
    }
  }
}

function conv(x){
  return (Math.floor(x/86400)+4)%7;
}


function call()
{
c=1;
var x=document.getElementById("searchplace").value;
console.log(document.readyState);
fetch(`http://openweathermap.org/data/2.5/weather?q=${x}&appid=b6907d289e10d714a6e88b30761fae22`).then(res=>res.json()).then(res=>{
  console.log(res);
  console.log(document.readyState);
  var str=  JSON.stringify(res);
  console.log(Object.keys(res));
  console.log(Object.values(res));
  var day=[],a=[];
  var dat=new Date(res.dt * 1000);
  var year=dat.getFullYear();
  var month=months[dat.getMonth()];
  var date=dat.getDate();
  var city=res.name;
  this.city=city;
  var country=res.sys.country;
  this.country=country;
  this.year=year;
  this.month=month;
  this.dat=dat;
  this.date=date;
  var i;
  var datt,fd;
  for(i=0;i<7;i++)
  {
    datt=(res.dt-(((i-i-i))*24*60*60*1000));
    //fd=datt.getDate();
    a.push(datt);

    day.push(conv(datt));
  }
  for(i=0;i<7;i++)
  {
    if(i==0|| i==4||i==5){
    temp.push((res.main.temp-i*0.5478*0.04567).toFixed(2));}
    else {

      temp.push((res.main.temp+i*0.3458*0.2864).toFixed(2));
    }
  }
  for(i=0;i<7;i++)
  {
    days.push(dys(day[i]));
  }

  this.days=days;
  this.temp=temp;
  console.log(days);
  console.log(a)
  st();
})

}
function st(){
  console.log(document.getElementById("d1").innerHTML);
  console.log(days);
  document.getElementById('d1').childNodes[0].textContent=days[1];
  document.getElementById('d2').childNodes[0].textContent=days[2];
  document.getElementById('d3').childNodes[0].textContent=days[3];
  document.getElementById('d4').childNodes[0].textContent=days[4];
  document.getElementById('d5').childNodes[0].textContent=days[5];
  document.getElementById('d6').childNodes[0].textContent=days[6];
  document.getElementById('t1').childNodes[0].textContent=temp[1];
  document.getElementById('t2').childNodes[0].textContent=temp[2];
  document.getElementById('t3').childNodes[0].textContent=temp[3];
  document.getElementById('t4').childNodes[0].textContent=temp[4];
  document.getElementById('t5').childNodes[0].textContent=temp[5];
  document.getElementById('t6').childNodes[0].textContent=temp[6];
  console.log(date,month,year);
  console.log(city,country);
  document.getElementById('day').childNodes[0].textContent=days[0];
  document.getElementById('date').childNodes[0].textContent=date;
  document.getElementById('month').childNodes[0].textContent=month;
  document.getElementById('year').childNodes[0].textContent=year;
  document.getElementById('city').childNodes[0].textContent=city;
  document.getElementById('country').childNodes[0].textContent=country;
  document.getElementById('current').childNodes[0].textContent=temp[0];
temp.length=0;
days.length=0;
}
