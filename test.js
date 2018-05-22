    var map;
	var Wait;
	var color="red";
	var colorr="blue";
	var symbol="CIRCLE"
	var count=0;
	back_hex="e58141"
	angle="350"
	text="Stp"
	//fnfp_flag=-1


function setColorr(trailType)
{

	switch(trailType)
	{
		case 'brown':
				//alert(trailType);
				colorr="brown";
				angle="60";
				back_hex="e58141";
				break;
		case 'black':
				//alert(trailType);
				colorr="black";
				angle="330";
				back_hex="cddcd5";
				break;
		case 'red':
				//alert(trailType);
				colorr="red";
				angle="350";
				back_hex="ff0000";
				break;

		case 'yellow':
				//alert(trailType);
				colorr="yellow";
				angle="350";
				back_hex="FFFF00";
				break;


		case 'light_yellow':
				//alert(trailType);
				colorr="lightgoldenrodyellow";
				angle="350";
				back_hex="FAFAD2";
				break;



		case 'green':
				//alert(trailType);
				colorr="green";
				angle="350";
				back_hex="008000";
				break;

		case 'blue':
				//alert(trailType);
				colorr="darkblue";
				angle="350";
				back_hex="00008B";
				break;

		default:

	}
}
function setColor(trailType)
{

	switch(trailType)
	{
		case 'brown':
				//alert(trailType);
				color="brown";
				angle="60";
				back_hex="e58141";
				break;
		case 'black':
				//alert(trailType);
				color="black";
				angle="330";
				back_hex="cddcd5";
				break;
		case 'red':
				//alert(trailType);
				color="red";
				angle="350";
				back_hex="ff0000";
				break;

		case 'yellow':
				//alert(trailType);
				color="yellow";
				angle="350";
				back_hex="FFFF00";
				break;


		case 'light_yellow':
				//alert(trailType);
				color="lightgoldenrodyellow";
				angle="350";
				back_hex="FAFAD2";
				break;



		case 'green':
				//alert(trailType);
				color="green";
				angle="350";
				back_hex="008000";
				break;

		case 'blue':
				//alert(trailType);
				color="darkblue";
				angle="350";
				back_hex="00008B";
				break;

		default:

	}
}	var flag2 = 1;
	
	function colorv()
	{
		if(document.getElementById("colv").style.display =="block")
			document.getElementById("colv").style.display ="none"
		else
			document.getElementById("colv").style.display ="block"
	}
	function colore()
	{
		if(document.getElementById("cole").style.display =="block")
			document.getElementById("cole").style.display ="none"
		else
			document.getElementById("cole").style.display ="block"
	}
	function plot()
	{
		if(document.getElementById("plot").style.display =="block")
			document.getElementById("plot").style.display ="none"
		else
			document.getElementById("plot").style.display ="block"
	}
	function velocity()
	{
		if(document.getElementById("velocity").style.display =="block")
			document.getElementById("velocity").style.display ="none"
		else
			document.getElementById("velocity").style.display ="block"
	}
	function time1()
	{
		if(document.getElementById("ukhra").checked){
		if(document.getElementById("time").style.display =="block")
			document.getElementById("time").style.display ="none"
		else
			document.getElementById("time").style.display ="block"
		document.getElementById("tim").style.display = "none";
	}
		else if(document.getElementById("azone").checked)
		{
			if(document.getElementById("tim").style.display =="block")
				document.getElementById("tim").style.display ="none"
			else
				document.getElementById("tim").style.display ="block"		
			document.getElementById("time").style.display = "none";
		}
		if((!(document.getElementById("ukhra").checked)) && (!(document.getElementById("azone").checked)))
 		{
// 			document.getElementById("uploading").innerHTML="Take input again";
// 			document.getElementById("fileinput").value = '';
 			alert("Enter the ROUTE: Ukhra/A-Zone");
 			throw new Error('');
 		}

	}
	function root()
	{
		if(document.getElementById("root").style.display =="block")
			document.getElementById("root").style.display ="none"
		else
			document.getElementById("root").style.display ="block"
	}
	function func()
	{
		document.getElementById("select").style.display = "block";
		document.getElementById("sel").style.display = "none";
	}

	function func1()
	{
		document.getElementById("sel").style.display = "block";
		document.getElementById("select").style.display = "none";
	}
	function func2()
	{
		document.getElementById("select1").style.display = "block"
		document.getElementById("sel1").style.display = "none"
		document.getElementById("sel2").style.display = "none"
	}
	function func3()
	{
		document.getElementById("select1").style.display = "none"
		document.getElementById("sel1").style.display = "block"
		document.getElementById("sel2").style.display = "none"
	}
	function func4()
	{
		document.getElementById("select1").style.display = "none"
		document.getElementById("sel1").style.display = "none"
		document.getElementById("sel2").style.display = "block"
	}
	var lat=new Array("0");
	var long=new Array("0");
	var waitTime=new Array("0");
	var sDev=new Array("0");
	var waitProb=new Array("0");
	var stopNo=new Array("0");
	var avgV=new Array("0");
	var dis=new Array("0");
	var tt=new Array("0");
	var nos=new Array("0");
	var sDevv = new Array("0");
	var LatLong=new Array("0");
	var stopTime = new Array("0");
	var time = new Array("0");
	var t1 = new Array("0");
	var mar1 = new Array("0");
	var mar2 = new Array("0");
	var mar3 = new Array("0");
	var mar4 = new Array("0");
	var dis1 = new Array("0");
	var sd1 = new Array("0");
	var sd2 = new Array("0");
	var sd3 = new Array("0");
	var sd4 = new Array("0");
	var sd5 = new Array("0");

	var contents;
	var contents1;
	function upload() {
// 	  //alert(v)
// 	  //alert(document.getElementById("early").checked);
// 	  //alert(value)
//       document.getElementById("uploading").innerHTML="uploading....";
//       var myfile=document.getElementById("fileinput").files[0];
//       //alert(myfile.name)
//       //alert(myfile);
//       var r = new FileReader();
//       r.onload = function(e) {
// 	    var contents = e.target.result;
	
	var file;
	var file1;
	if(document.getElementById("e1").checked)
		file = 'http://localhost:8000/EarlyMorning/up_1.txt';
	else if(document.getElementById("e2").checked)
		file = 'http://localhost:8000/EarlyMorning/up_4.txt';
	else if(document.getElementById("e3").checked)
		file = 'http://localhost:8000/EarlyMorning/up_8.txt';
	else if(document.getElementById("e4").checked)
		file = 'http://localhost:8000/EarlyMorning/up_16.txt';
	else if(document.getElementById("e5").checked)
		file = 'http://localhost:8000/EarlyMorning/up_18.txt';
	else if(document.getElementById("e6").checked)
		file = 'http://localhost:8000/EarlyMorning/up_22.txt';
	else if(document.getElementById("e7").checked)
		file = 'http://localhost:8000/EarlyMorning/up_25.txt';
	else if(document.getElementById("e8").checked)
		file = 'http://localhost:8000/EarlyMorning/data e8.txt';
	else if(document.getElementById("b3").checked)
		file = 'http://localhost:8000/BusyHour/up_12.txt';
	else if(document.getElementById("b4").checked)
		file = 'http://localhost:8000/BusyHour/up_13.txt';
	else if(document.getElementById("b5").checked)
		file = 'http://localhost:8000/BusyHour/up_14.txt';
	else if(document.getElementById("b6").checked)
		file = 'http://localhost:8000/BusyHour/up_15.txt';
	else if(document.getElementById("b7").checked)
	{
		file = 'http://localhost:8000/BusyHour/data1.txt';
		file1 = 'http://localhost:8000/sd/sd-Copy.txt';
	}
	else if(document.getElementById("ea1").checked)
		file = 'http://localhost:8000/EMA/up_24.txt';
	else if(document.getElementById("ea2").checked)
		file = 'http://localhost:8000/EMA/up_29.txt';
	else if(document.getElementById("ea3").checked)
		file = 'http://localhost:8000/EMA/up_34.txt';
	else if(document.getElementById("ea4").checked)
		file = 'http://localhost:8000/EMA/up_38.txt';
	else if(document.getElementById("ea5").checked)
		file = 'http://localhost:8000/BusyHour/data1.txt';
	else if(document.getElementById("n3").checked)
		file = 'http://localhost:8000/norA/up_1.txt';
	else if(document.getElementById("n4").checked)
		file = 'http://localhost:8000/norA/up_2.txt';
	else if(document.getElementById("n5").checked)
		file = 'http://localhost:8000/norA/up_5.txt';
	else if(document.getElementById("n6").checked)
		file = 'http://localhost:8000/norA/up_6.txt';
	else if(document.getElementById("n7").checked)
		file = 'http://localhost:8000/norA/up_15.txt';
	else if(document.getElementById("n8").checked)
		file = 'http://localhost:8000/norA/up_16.txt';
	else if(document.getElementById("n9").checked)
		file = 'http://localhost:8000/norA/up_50.txt';
	else if(document.getElementById("n10").checked)
		file = 'http://localhost:8000/BusyHour/data1.txt';
	else if(document.getElementById("ba3").checked)
		file = 'http://localhost:8000/BHA/up_3.txt';
	else if(document.getElementById("ba4").checked)
		file = 'http://localhost:8000/BHA/up_4.txt';
	else if(document.getElementById("ba5").checked)
		file = 'http://localhost:8000/BHA/up_7.txt';
	else if(document.getElementById("ba6").checked)
		file = 'http://localhost:8000/BHA/up_8.txt';
	else if(document.getElementById("ba7").checked)
		file = 'http://localhost:8000/BHA/up_9.txt';
	else if(document.getElementById("ba8").checked)
		file = 'http://localhost:8000/BHA/up_10.txt';
	else if(document.getElementById("ba9").checked)
		file = 'http://localhost:8000/BHA/up_11.txt';
	else if(document.getElementById("ba10").checked)
		file = 'http://localhost:8000/BHA/up_12.txt';
	else if(document.getElementById("ba11").checked)
		file = 'http://localhost:8000/BHA/up_17.txt';
	else if(document.getElementById("ba12").checked)
		file = 'http://localhost:8000/BHA/up_18.txt';
	else if(document.getElementById("ba13").checked)
		file = 'http://localhost:8000/BHA/up_19.txt';
	else if(document.getElementById("ba14").checked)
		file = 'http://localhost:8000/BHA/up_21.txt';
	else if(document.getElementById("ba15").checked)
		file = 'http://localhost:8000/BHA/up_22.txt';
	else if(document.getElementById("ba16").checked)
		file = 'http://localhost:8000/BHA/up_23.txt';
	else if(document.getElementById("ba17").checked)
		file = 'http://localhost:8000/BHA/up_27.txt';
	else if(document.getElementById("ba18").checked)
		file = 'http://localhost:8000/BHA/up_28.txt';
	else if(document.getElementById("ba19").checked)
		file = 'http://localhost:8000/BHA/up_32.txt';
	else if(document.getElementById("ba20").checked)
		file = 'http://localhost:8000/BHA/up_33.txt';
	else if(document.getElementById("ba21").checked)
		file = 'http://localhost:8000/BHA/up_37.txt';	
	else if(document.getElementById("ba22").checked)
		file = 'http://localhost:8000/BHA/up_41.txt';
	else if(document.getElementById("ba23").checked)
		file = 'http://localhost:8000/BHA/up_43.txt';
	else if(document.getElementById("ba24").checked)
		file = 'http://localhost:8000/BHA/up_44.txt';
	else if(document.getElementById("ba25").checked)
		file = 'http://localhost:8000/BHA/up_45.txt';
	else if(document.getElementById("ba26").checked)
		file = 'http://localhost:8000/BHA/up_47.txt';
	else if(document.getElementById("ba27").checked)
		file = 'http://localhost:8000/BHA/up_48.txt';
	else if(document.getElementById("ba28").checked)
		file = 'http://localhost:8000/BHA/up_49.txt';
	else if(document.getElementById("ba29").checked)
		file = 'http://localhost:8000/BHA/up_50.txt';
	else if(document.getElementById("ba30").checked)
		file = 'http://localhost:8000/BusyHour/up_50.txt';
	var rawFile = new XMLHttpRequest();
	var rawFile1 = new XMLHttpRequest();
    rawFile.open("GET",file,false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState == 4)
        {
            if(rawFile.status == 200 || rawFile.status == 0)
            {
                contents = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    if(document.getElementById("b7").checked)
    {
    	rawFile1.open("GET",file1,false);
    	rawFile1.onreadystatechange = function ()
   	    {
       	 	if(rawFile1.readyState == 4)
        	{
            	if(rawFile1.status == 200 || rawFile1.status == 0)
            	{
                	contents1 = rawFile1.responseText;
            	}
        	}
    	}
    	rawFile1.send(null);
    	var tc = contents1.split("/");
		j=0;
		for(var i=0;i<tc.length;i++)
		{
			var latl=tc[i].trim().split(",");
			if(!isNaN(latl[0]) && latl.length>1)
			{
				if(j<=33)
				{
					sd1[j] = parseFloat(latl[0]);	
				}
				if(j<=32)
				{
					sd2[j] = parseFloat(latl[1]);	
				}
				if(j<=31)
				{
					sd3[j] = parseFloat(latl[2]);	
				}
				if(j<=30)
				{
					sd4[j] = parseFloat(latl[3]);	
				}
				if(j<=29)
				{
					sd5[j] = parseFloat(latl[4]);	
				}
				j++;
 	    	}
 	    }
    }

    	if((!(document.getElementById("ukhra").checked)) && (!(document.getElementById("azone").checked)))
 		{
// 			document.getElementById("uploading").innerHTML="Take input again";
// 			document.getElementById("fileinput").value = '';
 			alert("Enter the ROUTE: Ukhra/A-Zone");
 			throw new Error('');
 		}
 	   	if((!(document.getElementById("vertex").checked)) && (!(document.getElementById("edge").checked)))
 		{
// 			document.getElementById("uploading").innerHTML="Take input again";
// 			document.getElementById("fileinput").value = '';
 			alert("Enter the PLOT: Vertex/Edge");
 			throw new Error('Enter the PLOT: Vertex/Edge');
 		}
 		if((!(document.getElementById("early").checked)) && (!(document.getElementById("busy").checked)) && (!(document.getElementById("early1").checked)) && (!(document.getElementById("busy1").checked)) && (!(document.getElementById("normal").checked)))
 		{
// 			document.getElementById("uploading").innerHTML="Take input again";
// 			document.getElementById("fileinput").value = '';
 			alert("Enter the TIME: Early Morning/Busy Hours");
 			throw new Error('');
 		}

// 	    //alert(reader);
// 	    //alert('hii');
// 	    console.log(contents);
 	    parseContents(contents);
 	    
 	    /*t1[0] = parseFloat(tt[1])
 	    for (var i = 1; i <34; i++) {
 	    	t1[i]  = parseFloat(tt[i+1]) + parseFloat(t1[i-1]);
 	    }
 	    dis1[0] = parseFloat(dis[1]);
 	    for (var i =1; i <34 ; i++) {
 	    	dis1[i] = parseFloat(dis[i+1]) + parseFloat(dis1[i-1]);
 	    }
 	    for (var i=0;i<34;i++) {
 	    		mar1[i] = parseFloat(dis1[i]) / parseFloat(t1[i]);
 	    		mar1[i] = mar1[i]*3600;
 	    }
 	    for (var i =0; i <33;i++) {
 	    	mar2[i] = parseFloat(dis1[i+1] - dis1[0]) / parseFloat(t1[i+1] - t1[0]);
 	    	mar2[i] = mar2[i]*3600;
 	    }
 	    for (var i =0; i <32;i++) {
 	    	mar3[i] = parseFloat(dis1[i+2] - dis1[1]) / parseFloat(t1[i+2] - t1[1]);
 	    	mar3[i] = mar3[i]*3600;
 	    }
 	    for (var i =0; i <31;i++) {
 	    	mar4[i] = parseFloat(dis1[i+3] - dis1[2]) / parseFloat(t1[i+3] - t1[2]);
 	    	mar4[i] = mar4[i]*3600;
 	    }*/
 	    //alert(mar4[1]);
 	    heat();
 	    heat1();
 	    //graph(avgV,tt,dis);
// 	    //document.getElementById("cont").innerHTML=fileContent;

// 	    document.getElementById("uploading").innerHTML="File uploaded: "+myfile.name;
// 	    document.getElementById("fileinput").value = '';
    }

//       r.readAsText(myfile);
// }
	function heat1()
	{
		document.getElementById("h1").style.display = "block";
		document.getElementById("h2").style.display = "block";
		document.getElementById("scale").style.display = "block";
	}
	function heat()
	{
		$.getScript('d3.min.js',function(){
			var colorMap1 = d3.interpolateRgb(
          d3.rgb('#ffff7f'),
          d3.rgb('#cc0000')
        );

        var a = 0;
        d3.select("#heat1")
            .selectAll("div")
            .data(avgV)
            .enter()
            .append("div")
            .style("background-color", function(d) {
                    return colorMap1(d/45);
            }).text(function(d) {
                return a + "-" + ++a;
            }).style("font-size", "10px")
            .style("color", "black")
            .style("text-align", "center");

        var a = 1;
        var b = 1;
        d3.select("#heat4")
            .selectAll("div")
            .data(sd1)
            .enter()
            .append("div")
            .style("background-color", function(d) {
                    return colorMap1(d/200);
            }).text(function(d) {
                return b + "-" + ++a;
            }).style("font-size", "10px")
            .style("color", "black")
            .style("text-align", "center");

            var a = 2;
        var b = 2;
        d3.select("#heat5")
            .selectAll("div")
            .data(sd2)
            .enter()
            .append("div")
            .style("background-color", function(d) {
                    return colorMap1(d/200);
            }).text(function(d) {
                return b + "-" + ++a;
            }).style("font-size", "10px")
            .style("color", "black")
            .style("text-align", "center");

            var a = 3;
        var b = 3;
        d3.select("#heat6")
            .selectAll("div")
            .data(sd3)
            .enter()
            .append("div")
            .style("background-color", function(d) {
                    return colorMap1(d/200);
            }).text(function(d) {
                return b + "-" + ++a;
            }).style("font-size", "10px")
            .style("color", "black")
            .style("text-align", "center");

        var a = 4;
        var b = 4;
        d3.select("#heat2")
            .selectAll("div")
            .data(sd4)
            .enter()
            .append("div")
            .style("background-color", function(d) {
                    return colorMap1((d/200));
            }).text(function(d) {
            	return b + "-" + ++a;
            }).style("font-size", "10px")
            .style("color", "black")
            .style("text-align", "center");


        var a = 5;
        var b = 5;
        d3.select("#heat7")
            .selectAll("div")
            .data(sd5)
            .enter()
            .append("div")
            .style("background-color", function(d) {
                    return colorMap1((d/200));
            }).text(function(d) {
            	return b + "-" + ++a;
            }).style("font-size", "10px")
            .style("color", "black")
            .style("text-align", "center");

        d3.select("#heat3")
            .selectAll("div")
            .data([0,3,8,13,18,23,28,33,38,43,45,50])
            .enter()
            .append("div")
            .style("background-color", function(d) {
            		if(d==0 || d==50)
            			return "black";
                    return colorMap1(d/45);
            }).text(function(d){
            	if(d==0)
            		return "1<";
            	if(d==50)
            		return ">45";
            }).style("text-align","center")
              .style("color","white")


        d3.select("#heat8")
            .selectAll("div")
            .data([0,25,50,75,100,125,150,175,200,230,250])
            .enter()
            .append("div")
            .style("background-color", function(d) {
            		if(d==0 || d==250)
            			return "black";
                    return colorMap1(d/200);
            }).text(function(d){
            	if(d==0)
            		return "1<";
            	if(d==250)
            		return ">230";
            }).style("text-align","center")
              .style("color","white")
		});
	}


	/*function avgraph()
	{
		flag2=1;	
		graph(avgV,tt,dis);
		document.getElementsByClassName("class1").style.display = "block";
		document.getElementsByClassName("class2").style.display = "none";
		document.getElementsByClassName("class3").style.display = "none";
	}
	function timgraph()
	{
		flag2=2;	
		graph(avgV,tt,dis);
		document.getElementsByClassName("class2").style.display = "block";
		document.getElementsByClassName("class1").style.display = "none";
		document.getElementsByClassName("class3").style.display = "none";
	}
	function disgraph()
	{
		flag2=3;	
		graph(avgV,tt,dis);
		document.getElementsByClassName("class3").style.display = "block";
		document.getElementsByClassName("class2").style.display = "none";
		document.getElementsByClassName("class1").style.display = "none";
	}*/

function parseContents(contents)
{
	//alert(document.getElementById(early).checked);
	var totalContent=contents.split("/");

	/*var polyOptions = {
	    strokeColor: 'green',
	    strokeOpacity: 1.0,
	    strokeWeight: 3
	  }*/
	//var f_size=totalContent.length
	//alert(totalContent.length)
	//alert(totalContent[0])
	var flag=0;
	j=0;
	for(var i=0;i<totalContent.length;i++)
	{
			var latlong=totalContent[i].trim().split(",");
			if(!isNaN(latlong[1]) && latlong.length>1)
			{
			    	lat[j]=parseFloat(latlong[1]);
			    	long[j]=parseFloat(latlong[2]);
			    	stopNo[j]=parseInt(latlong[0]);
			    	
			    	if(document.getElementById("e8").checked || document.getElementById("b7").checked){
			    		waitProb[j]=parseFloat(latlong[9]).toFixed(2);
			    		sDev[j]=parseFloat(latlong[10]).toFixed(2);
			    		sDevv[j]=parseFloat(latlong[7]).toFixed(2);
			    		stopTime[j]=parseFloat(latlong[8]).toFixed(2);
			    	}
			    	else
			    	{
			    		time[j] = latlong[7];
			    		stopTime[j]=parseFloat(latlong[8]).toFixed(2);
			    		waitTime[j] = parseFloat(latlong[9]).toFixed(2);
			    	}
			    	dis[j]=parseFloat(latlong[3]).toFixed(2);
			    	tt[j]=parseFloat(latlong[5]).toFixed(2);
			    	nos[j]=parseInt(latlong[6]);
			    	
			    	if((document.getElementById("vel").value)!=''){
			    		var v = parseInt(parseFloat(latlong[4]).toFixed(2));
			    		var ar = (document.getElementById("vel").value).split('-');
			    		if(v>=parseInt(ar[0]) && v<=parseInt(ar[1])){
			    			avgV[j] = parseFloat(latlong[4]).toFixed(2);
			    			flag=1;
			    			plotLine(lat,long,stopTime[j],waitProb[j],sDev[j],stopNo[j],avgV[j],dis[j],tt[j],nos[j],sDevv[j],waitTime[j],time[j],j,flag);
			    		}
			    		else{
				    		avgV[j] = parseFloat(latlong[4]).toFixed(2);
			    			flag=0;
			    			plotLine(lat,long,stopTime[j],waitProb[j],sDev[j],stopNo[j],avgV[j],dis[j],tt[j],nos[j],sDevv[j],waitTime[j],time[j],j,flag);
			    		}
			    	}
			    	else
			    	{
			    		avgV[j] = parseFloat(latlong[4]).toFixed(2);
			    		plotLine(lat,long,stopTime[j],waitProb[j],sDev[j],stopNo[j],avgV[j],dis[j],tt[j],nos[j],sDevv[j],waitTime[j],time[j],j,flag);
			    	}
			    	plotCluster(lat,long,stopTime[j],waitProb[j],sDev[j],stopNo[j],avgV[j],dis[j],tt[j],nos[j],sDevv[j],waitTime[j],time[j],j);
			    	j++;
        	    }
		}
	//alert(Long: +long+  length: +long.length);

}

function plotCluster(lat,long,st,wp,sd,stopNo,av,dis,tt,nos,sdd,wt,t,k)
{


	var latlong = new google.maps.LatLng(lat[k],long[k]);
	map.setCenter(latlong);

	//var contents="Lat: "+ lat+ "Long: "+long+" Speed:"+speed+" Theta: "+Theta+" C Bearing:"+ Baring;
	if(document.getElementById("e8").checked || document.getElementById("b7").checked || document.getElementById("ea5").checked || document.getElementById("n10").checked || document.getElementById("b30").checked )
		var contents="<b>Stop: #"+stopNo+"</b><p><b>Lat:</b>"+lat[k]+"&nbsp;<b>Long:</b>"+long[k]+"&nbsp;<br><b>StopTime:</b>"+st+"sec &nbsp;<b>WaitProb:</b>"+wp+"&nbsp;<b>StandardDeviation</b>:"+sd;
	else
		var contents="<b>Stop: #"+stopNo+"</b><p><b>Lat:</b>"+lat[k]+"&nbsp;<b>Long:</b>"+long[k]+"&nbsp;<br><b>StopTime:</b>"+st+"sec &nbsp;<b>WaitTime:</b>"+wt+"sec";
	var infowindow = new google.maps.InfoWindow({
      content: contents
  });
		var lab = new Array("0");
		for (var i = 0; i < 35; i++) {
			lab[i] = i+1;
		}
		var marker = new google.maps.Marker({
		  	position:latlong,
		  	draggable:false,
		  	//icon:{ path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, fillColor:color,  fillOpacity: 1.8,scale: 5.5,strokeColor:color,strokeWeight: 3},
		  	animation: google.maps.Animation.DROP,
		  	label: lab[count++].toString(),
		  	map:map
	    });
	    //marker.setVisible(false);
		google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
	})
}
function plotLine(lat,long,st,wp,sd,stopNo,av,dis,tt,nos,sdd,wt,t,k,flag)
{
	var latlong = new google.maps.LatLng(lat[k],long[k]);
	map.setCenter(latlong);
	if(document.getElementById("e8").checked || document.getElementById("b7").checked)
		var items = "<p><b>AverageVelocity: </b>"+av+"Km/hr&nbsp;<b>Distance: </b>"+dis+"Km&nbsp;<b>TravelTime: </b>"+tt+"sec&nbsp;<b>No.OfStops: </b>"+nos+"&nbsp;<b>StandardDeviation: </b>"+sdd;
	else
		var items = "<p><b>AverageVelocity: </b>"+av+"Km/hr&nbsp;<b>Distance: </b>"+dis+"Km&nbsp;<b>TravelTime: </b>"+tt+"sec&nbsp;<b>No.OfStops: </b>"+nos+"&nbsp;<b>StopTimeAtEachStop: </b>"+t;
	var iw = new google.maps.InfoWindow({
		content: items
	});
	var colour;
	if(flag==1){
		colour = "#DC143C";
		weight = 5;
	}
	else{
		colour = colorr;
		weight = 3;
	}
	if(k>0 && (document.getElementById("edge").checked))
	{
		/*var smarker = new google.maps.Marker({
			position: latlong
		});
		var ll = new google.maps.LatLng(lat[k-1],long[k-1]);
		var emarker = new google.maps.Marker({
			position: ll
		});*/
		var line = new google.maps.Polyline({
   	   	   path: [
        	new google.maps.LatLng(lat[k-1], long[k-1]),
        	new google.maps.LatLng(lat[k], long[k])
    		],
    	strokeColor: colour,
    	strokeOpacity: 1.0,
    	strokeWeight: weight,
    	animation: google.maps.Animation.DROP,
    	map: map
});
		google.maps.event.addListener(line, 'click', function() {
			//iw.position = event.latLng
			iw.open(map,line);
		})

	}
}

/*function graph(av,time,distance)
{
	var array = [];
	for (var i = 34; i >= 0; i--) {
		if(flag2==1){
			array.push({		
				name: i+1,
				value: parseFloat(av[i])
			})			
		}
		else if(flag2==2){
			array.push({		
				name: i+1,
				value: parseFloat(time[i])
			})			
		}
		else if(flag2==3){
			array.push({		
				name: i+1,
				value: parseFloat(distance[i])
			})			
		}
	}
	var graphdef = {
 	   	categories : ['uvCharts'],
    	dataset : {
        'uvCharts' : array
    }
}
		var chart = uv.chart('PercentBar', graphdef);
}*/

function initialize() {

        geocoder = new google.maps.Geocoder();


        var myOptions = {
          center: new google.maps.LatLng(22.546,88.354),
          zoom: 19,
		  scaleControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
    }
 