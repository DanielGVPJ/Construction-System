/*
  BIY.h - Library to control Motor Shield.
  Created by Build-It-Yourself, June 26, 2015.
*/

#include "Arduino.h"
#include "BIY.h"

BIY::BIY() //Constructor
{
  pinMode(12, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(8, OUTPUT);
  _directionStates[0] == 0;
  _directionStates[1] == 0;
}

void BIY::timerS() //Future functionality for multitasking
{
  _Time= _Time+0.01;
}

void BIY::spin(String motor, String direction)
{
  if(motor == "A"){
    _directionState=0;
    _directionPin=12;
    _brakePin=9;
    _speedPin=3;
  }
  else if(motor == "B"){
    _directionState=1;
    _directionPin=13;
    _brakePin=8;
    _speedPin=11;
  }
  if(direction == "left"){
    _genDirection = LOW;
    if(_directionStates[_directionState] == 1){
      digitalWrite(_brakePin, HIGH);
      _directionStates[_directionState] = 0;
    }
  }
  else if(direction == "right"){
    _genDirection = HIGH;
    if(_directionStates[_directionState] == 0){
      digitalWrite(_brakePin, HIGH);
      _directionStates[_directionState] = 1;
    }
  }
  digitalWrite(_directionPin, _genDirection);
  digitalWrite(_brakePin, LOW);
  analogWrite(_speedPin, 60);
}

void BIY::stop(String motor)
{
  if(motor == "A")
  {
    _brakePin=9;
  }
  else if(motor == "B")
  {
    _brakePin=8;
  }
  digitalWrite(_brakePin, HIGH);
}