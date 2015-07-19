
jQuery.noConflict();
jQuery(document).ready(function($){

// Hidden elements

$(document).ready(function(){
	$("section article").find("#load").hide();
	$("#first").click();
	$("section article ul li audio").hide();
})

// Navbar, click

$("#first").click(function(){
	$(".setup").hide();
	$(".down").hide();
	$(".home").show();
	$(this).css({"text-decoration":"none","color":"#212121"});
	$("#second").css("color","#FFFFFF");
	$("#third").css("color","#FFFFFF");
})

$("#second").click(function(){
	$(".home").hide();
	$(".down").hide();
	$(".setup").show();
	$(this).css({"text-decoration":"none","color":"#212121"});
	$("#first").css("color","#FFFFFF");
	$("#third").css("color","#FFFFFF");
})

$("#third").click(function(){
	$(".home").hide();
	$(".setup").hide();
	$(".down").show();
	$(this).css({"text-decoration":"none","color":"#212121"});
	$("#second").css("color","#FFFFFF");
	$("#first").css("color","#FFFFFF");
})


// Upload button clicked


// set variables for time intervals

	var timeStartflash;
	var timeSensorA;
	var timeSensorB;
	var timeMotorA;
	var timeMotorB;
	var timeServo;
	var timeWait;
	var icon = 0;


// when Upload button clicked


	$("#up").click(function(){
		//alert("Hola");
		/*audio = new Audio();
		var ranumber = Math.floor((Math.random() * 7) + 1);
		audio.src="sounds/"+ranumber+".wav";
		audio.play();
			function pause(){
				audio.pause();
				clearInterval(pas);
			}
			var pas = setInterval(function(){pause()},3300);*/
		timeStartflash = setInterval(function(){flash();},300);
		icon++;
		show(icon);
	});

// function WAIT called after Flash

	function wait(){
		timeWait = setInterval(function(){Waitt();},300);
	}

// function SENSORSELECT called after Waitt

	function sensorSelect(){
		var sensor = $("#sr").val();
		if(sensor == "1"){
			timeSensorA = setInterval(function(){SensorA();},150);
		}
		else if(sensor == "2"){
			timeSensorB = setInterval(function(){SensorB();},150);
		}
	}

// function MODULESELECT called after Sensorselect

	function moduleSelect(){
		var module = $("#md").val();
		if(module == "a"){
			timeMotorA = setInterval(function(){MotorA();},150);
		}
		else if(module == "b"){
			timeMotorB = setInterval(function(){MotorB();},150);
		}
		else if(module == "c"){
			timeServo = setInterval(function(){Servo();},150);
		}
	}

// fucntion WAITT called after wait

	var waitGoing=0;
	function Waitt(){
		switch(waitGoing){
			case 0:
				break;
			case 1:
				clearInterval(timeWait);
				sensorSelect();
				waitGoing = -1;
				break;
		}
		waitGoing++;
	}

// function FLASH to calibrate sensors

	var Startflash=0;
	function flash(){
		switch(Startflash){
			case 0:
				$("#neutral").css("background-color","white");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				clearInterval(timeStartflash);							// exit function because timeStartFlash is cleared				
				wait();													// call function WAIT
				Startflash = -1;										// as timeStartFlash is cleared, when Startflash adds one, its going to be 0 again
				break;
		}
		Startflash++;
	}

// SENSOR A --> if Sensor selected is A

	var SensoraGoing=0;
	function SensorA(){
		switch(SensoraGoing){
			case 0:
				$("#neutral").css("background-color","black");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				break;
			case 2:
				$("#neutral").css("background-color","black");
				break;
			case 3:
				$("#neutral").css("background-color","grey");
				break;
			case 4:
				$("#neutral").css("background-color","black");
				break;
			case 5:
				$("#neutral").css("background-color","grey");
				break;
			case 6:
				clearInterval(timeSensorA);								// exit function
				moduleSelect();											// after indicating Sensor, call Modules
				SensoraGoing = -1;										 
				break;
		}
		SensoraGoing++;
		icon++;
		show(icon);
	}

// SENSOR B --> if Sensor selected is B


	var SensorbGoing=0;
	function SensorB(){
		switch(SensorbGoing){
			case 0:
				$("#neutral").css("background-color","black");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				break;
			case 2:
				$("#neutral").css("background-color","white");
				break;
			case 3:
				$("#neutral").css("background-color","grey");
				break;
			case 4:
				$("#neutral").css("background-color","black");
				break;
			case 5:
				$("#neutral").css("background-color","grey");
				break;
			case 6:
				clearInterval(timeSensorB);
				moduleSelect();
				SensorbGoing = -1;
				break;
		}
		SensorbGoing++;
		icon++;
		show(icon);
	}

// MOTOR A --> is Module selected (Module selected) is A

	var MotoraGoing=0;
	function MotorA(){
		switch(MotoraGoing){
			case 0:
				$("#neutral").css("background-color","white");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				break;
			case 2:
				$("#neutral").css("background-color","black");
				break;
			case 3:
				$("#neutral").css("background-color","grey");
				break;
			case 4:
				$("#neutral").css("background-color","black");
				break;
			case 5:
				$("#neutral").css("background-color","grey");
				break;
			case 6:
				clearInterval(timeMotorA);
				MotoraGoing = -1;
				icon = -1;
				break;
		}
		MotoraGoing++;
		icon++;
		show(icon);
	}

// MOTOR B --> is Module selected (Module selected) is B

	var MotorbGoing=0;
	function MotorB(){
		switch(MotorbGoing){
			case 0:
				$("#neutral").css("background-color","white");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				break;
			case 2:
				$("#neutral").css("background-color","white");
				break;
			case 3:
				$("#neutral").css("background-color","grey");
				break;
			case 4:
				$("#neutral").css("background-color","black");
				break;
			case 5:
				$("#neutral").css("background-color","grey");
				break;
			case 6:
				clearInterval(timeMotorB);
				MotorbGoing = -1;
				icon = -1;
				break;
		}
		MotorbGoing++;
		icon++;
		show(icon);
	}

// SERVO --> if Module selected (Module selected) is the Servo

	var ServoGoing=0;
	function Servo(){
		switch(ServoGoing){
			case 0:
				$("#neutral").css("background-color","white");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				break;
			case 2:
				$("#neutral").css("background-color","black");
				break;
			case 3:
				$("#neutral").css("background-color","grey");
				break;
			case 4:
				$("#neutral").css("background-color","white");
				break;
			case 5:
				$("#neutral").css("background-color","grey");
				break;
			case 6:
				clearInterval(timeServo);
				ServoGoing = -1;
				icon = -1;
				break;
		}
		ServoGoing++;
		icon++;
		show(icon);
	}

	function show(){
		if(icon != 0){
			$("section article").find("#up").hide();
			$("section article").find("#load").show();
		}
		else{
			$("section article").find("#load").hide();
			$("section article").find("#up").show();
		}
		switch(icon){
			case 1: 
				$("#load").css("color","#303F9F");
					break;
			case 2:
				$("#load").css("color","#FF9800");
					break;
			case 3:
				$("#load").css("color","#8BC34A");
					break;
			case 5:
				$("#load").css("color","#00BCD4");
					break;
			case 7:
				$("#load").css("color","#7C4DFF");
					break;
			case 9:
				$("#load").css("color","#303F9F");
					break;
			case 11:
				$("#load").css("color","#00BCD4");
					break;
			case 13:
				$("#load").css("color","#7C4DFF");
					break; 	
		}
	}
});
