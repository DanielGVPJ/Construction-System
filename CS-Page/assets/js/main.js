/*
	Photon by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

	});

})(jQuery);

$(document).ready(function(){
	var timeStartflash;
	var timeSensorA;
	var timeSensorB;
	var timeMotorA;
	var timeMotorB;
	var timeServo;
	var timeWait;
	$("#up").click(function(){
		timeStartflash = setInterval(function(){flash();},300);
	});
	function wait(){
		timeWait = setInterval(function(){Waitt();},300);
	}
	function sensorSelect(){
		var sensor = $(".sr").val();
		if(sensor == "1"){
			timeSensorA = setInterval(function(){SensorA();},150);
		}
		else if(sensor == "2"){
			timeSensorB = setInterval(function(){SensorB();},150);
		}
	}
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
	var Startflash=0;
	function flash(){
		switch(Startflash){
			case 0:
				$("#neutral").css("background-color","white");
				break;
			case 1:
				$("#neutral").css("background-color","grey");
				clearInterval(timeStartflash);
				wait();
				Startflash = -1;
				break;
		}
		Startflash++;
	}
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
				clearInterval(timeSensorA);
				moduleSelect();
				SensoraGoing = -1;
				break;
		}
		SensoraGoing++;
	}
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