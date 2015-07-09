#include <BIY.h>
#include <Servo.h>
/*************************************************
 * Public Constants
 *************************************************/

#define B0  31
#define C1  33
#define CS1 35
#define D1  37
#define DS1 39
#define E1  41
#define F1  44
#define FS1 46
#define G1  49
#define GS1 52
#define A1  55
#define AS1 58
#define B1  62
#define C2  65
#define CS2 69
#define D2  73
#define DS2 78
#define E2  82
#define F2  87
#define FS2 93
#define G2  98
#define GS2 104
#define A2  110
#define AS2 117
#define B2  123
#define C3  131
#define CS3 139
#define D3  147
#define DS3 156
#define E3  165
#define F3  175
#define FS3 185
#define G3  196
#define GS3 208
#define A3  220
#define AS3 233
#define B3  247
#define C4  262
#define CS4 277
#define D4  294
#define DS4 311
#define E4  330
#define F4  349
#define FS4 370
#define G4  392
#define GS4 415
#define A4  440
#define AS4 466
#define B4  494
#define C5  523
#define CS5 554
#define D5  587
#define DS5 622
#define E5  659
#define F5  698
#define FS5 740
#define G5  784
#define GS5 831
#define A5  880
#define AS5 932
#define B5  988
#define C6  1047
#define CS6 1109
#define D6  1175
#define DS6 1245
#define E6  1319
#define F6  1397
#define FS6 1480
#define G6  1568
#define GS6 1661
#define A6  1760
#define AS6 1865
#define B6  1976
#define C7  2093
#define CS7 2217
#define D7  2349
#define DS7 2489
#define E7  2637
#define F7  2794
#define FS7 2960
#define G7  3136
#define GS7 3322
#define A7  3520
#define AS7 3729
#define B7  3951
#define C8  4186
#define CS8 4435
#define D8  4699
#define DS8 4978

Servo servo1;
BIY motor;
int Asensor;
int Bsensor;
int servoActive = 0;
int motorAActive = 0;
int motorBActive = 0;
int servoDark = 0;
int servoLight = 0;
int servoPosition = 0;
int out=0;
int servoReading;
int reading;
int readingBase;
int doneReading;
int doingRead=1;
const int buzzerPin = 6;
const int buttonPin = 7;  
int buttonState = 0;
int serialCode [6];
int serialSensorA [3] = {0,0,0};
int serialSensorB [3] = {0,1,0};
int serialMotorA [3] = {1,0,0};
int serialMotorB [3] = {1,1,0};
int serialServo [3] = {1,0,1};
void setup() {
  // put your setup code here, to run once:
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);     
}

void loop() {
  // put your main code here, to run repeatedly:
  buttonState = digitalRead(buttonPin);
  if(motorAActive > 0){
    if(Asensor <= (analogRead(motorAActive)-50)){
      motor.spin("A","right");
    }
    else if(Asensor >= (analogRead(motorAActive)+50)){
      motor.spin("A","left");
    }
    else{
      motor.stop("A");
    }
  }
  if(motorBActive > 0){
    if(Bsensor <= (analogRead(motorBActive)-50)){
      motor.spin("B","right");
    }
    else if(Bsensor >= (analogRead(motorBActive)+50)){
      motor.spin("B","left");
    }
    else{
      motor.stop("B");
    }
  }
  if(servoActive > 0 && (analogRead(servoActive)>(servoPosition+60) || analogRead(servoActive)<(servoPosition-60)))
  {
    servo1.write(map(analogRead(servoActive),servoDark,servoLight,0,180));
    servoPosition = analogRead(servoActive);
  }
  if (buttonState == HIGH) {     
    // turn LED on:    
    delay(500);
    tone(buzzerPin,G7,100);  
    delay(100);
    tone(buzzerPin,D7,100);  
    delay(100);
    tone(buzzerPin,C7,100);
    Asensor = analogRead(2);
    Bsensor = analogRead(3);
    delay(500);
    out=0;
    while(out==0){
      if(Asensor >= (analogRead(2)+50) || Asensor <= (analogRead(2)-50)){
        reading = 2;
        out = 1;
      }
      else if(Bsensor >= (analogRead(3)+50) || Bsensor <= (analogRead(3)-50)){
        reading = 3;
        out = 1;
      }
    }
    
    delay(1000);
    readingBase=analogRead(reading);
    doneReading=0;
    while(doneReading<=5){
      if(doingRead == 1)
      {
        if(readingBase <= (analogRead(reading)-50)){
          serialCode[doneReading] = 1;
          doneReading++;
        doingRead=0;
        tone(buzzerPin,G7,100);  
        }
        else if(readingBase >= (analogRead(reading)+50)){
          serialCode[doneReading] = 0;
          doneReading++;
        doingRead=0;
        tone(buzzerPin,C7,100); 
        }
      }
      else if(readingBase <= (analogRead(reading)+50) && readingBase >= (analogRead(reading)-50)){
        doingRead=1;
      }
      Serial.println(doneReading);
    }
      Serial.print(serialCode[0]);
      Serial.print(serialCode[1]);
      Serial.print(serialCode[2]);
      Serial.print(serialCode[3]);
      Serial.print(serialCode[4]);
      Serial.println(serialCode[5]);
    int Sensorusing;
    int Moduleusing;
    if(serialCode[0] == serialSensorA[0] && serialCode[1] == serialSensorA[1] && serialCode[2] == serialSensorA[2]){
      Sensorusing = 2;
    }
    else if(serialCode[0] == serialSensorB[0] && serialCode[1] == serialSensorB[1] && serialCode[2] == serialSensorB[2]){
      Sensorusing = 3;
    }
    
    if(serialCode[3] == serialMotorA[0] && serialCode[4] == serialMotorA[1] && serialCode[5] == serialMotorA[2]){
      Moduleusing = 0;
    }
    else if(serialCode[3] == serialMotorB[0] && serialCode[4] == serialMotorB[1] && serialCode[5] == serialMotorB[2]){
      Moduleusing = 1;
    }
    else if(serialCode[3] == serialServo[0] && serialCode[4] == serialServo[1] && serialCode[5] == serialServo[2]){
      Moduleusing = 2;
    }
    else{
      Moduleusing = 3;
    }
    if(motorAActive == Sensorusing){
      motorAActive = 0;
    }
    else if(motorBActive == Sensorusing){
      motorBActive = 0;
    }
    else if(servoActive == Sensorusing){
      servo1.detach();
      servoActive = 0;
    }
    if(Moduleusing == 0){
      motorAActive = Sensorusing;
      tone(buzzerPin,C7,100);  
      delay(500);
      tone(buzzerPin,C7,100);  
      delay(500);
      tone(buzzerPin,C7,100);  
      delay(500);
      tone(buzzerPin,C7,100);  
      delay(300);
      tone(buzzerPin,C7,100);  
      delay(300);
      tone(buzzerPin,C7,100);  
      delay(300);
      tone(buzzerPin,C7,100);  
      delay(300);
      Asensor = analogRead(Sensorusing);
    }
    else if(Moduleusing == 1){
      motorBActive = Sensorusing;
      tone(buzzerPin,C7,100);  
      delay(500);
      tone(buzzerPin,C7,100);  
      delay(500);
      tone(buzzerPin,C7,100);  
      delay(500);
      tone(buzzerPin,C7,100);  
      delay(300);
      tone(buzzerPin,C7,100);  
      delay(300);
      tone(buzzerPin,C7,100);  
      delay(300);
      tone(buzzerPin,C7,100);  
      delay(300);
      Bsensor = analogRead(Sensorusing);
    }
    else if(Moduleusing == 2){
      servo1.attach(18);
      servoActive = Sensorusing;
        buttonState = digitalRead(buttonPin);
      while(buttonState == LOW){
        servoDark = analogRead(Sensorusing);
        buttonState = digitalRead(buttonPin);
      }
      tone(buzzerPin,C7,100);  
      delay(300);
        buttonState = digitalRead(buttonPin);
      while(buttonState == LOW){
        servoLight = analogRead(Sensorusing);
        buttonState = digitalRead(buttonPin);
      }
      tone(buzzerPin,G7,100);  
      delay(300);
    }
    tone(buzzerPin,C7,100);  
    delay(100);
    tone(buzzerPin,D7,100);  
    delay(100);
    tone(buzzerPin,E7,100);
    delay(100);
    tone(buzzerPin,F7,100);
    delay(100);
    tone(buzzerPin,G7,100);
  }
  Serial.print(analogRead(2));
  Serial.print("---");
  Serial.println(analogRead(3));
}

