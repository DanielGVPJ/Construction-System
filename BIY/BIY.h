/*
  BIY.h - Library to control Motor Shield.
  Created by Build-It-Yourself, June 26, 2015.
*/
#ifndef BIY_h
#define BIY_h

#include "Arduino.h"

class BIY
{
  public:
    BIY();
    void timerS();
    void spin(String motor, String direction);
    void stop(String motor);
  private:
    int _directionPin;
    int _brakePin;
    int _speedPin;
    int _directionStates [2];
    int _directionState;
    bool _genDirection;
    float _Time;
};

#endif