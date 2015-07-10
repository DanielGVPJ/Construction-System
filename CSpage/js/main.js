// Upload button clicked






jQuery.noConflict();
jQuery(document).ready(function($){

// set variables for time intervals

	var timeStartflash;
	var timeSensorA;
	var timeSensorB;
	var timeMotorA;
	var timeMotorB;
	var timeServo;
	var timeWait;

// when Upload button clicked


	$("#up").click(function(){
		timeStartflash = setInterval(function(){flash();},300);
	});

// function WAIT called after Flash

	function wait(){
		timeWait = setInterval(function(){Waitt();},300);
	}

// function SENSORSELECT called after Waitt

	function sensorSelect(){
		var sensor = $(".sr").val();
		if(sensor == "1"){
			timeSensorA = setInterval(function(){SensorA();},150);
		}
		else if(sensor == "2"){
			timeSensorB = setInterval(function(){SensorB();},150);
		}
	}

// function MODULESELECT called after Sensorselect

	function moduleSelect(){
		var module = $(".md").val();
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
				break;
		}
		MotoraGoing++;
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
				break;
		}
		MotorbGoing++;
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
				break;
		}
		ServoGoing++;
	}
});
