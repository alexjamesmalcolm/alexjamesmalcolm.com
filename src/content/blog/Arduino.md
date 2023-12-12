---
share: "true"
---


I have a Rosemary plant that my parents gave to me before they moved away to California. I could choose to take care of it, but this is an opportunity for automation. I decided to buy an Arduino Nano ESP32, a cheap pump off Amazon, and some moisture and pH sensors.

The first problem that I ran into is that I tried to use the USB-C to USB-C cable that came with my Macbook M1. I was unable to find the ESP32 in the Arduino IDE. I promptly gave up for many months. After a breakup that freed me up to look into my old hobby projects, chiefly this one, I returned to the project and immediately found the [answer on Stack Overflow](https://stackoverflow.com/questions/63202897/arduino-ide-is-not-showing-any-port-macos).

I kindly asked ChatGPT for a hello world program to test my new board
```C++
const int ledPin = 13; // Pin number where the LED is connected

void setup() {
	pinMode(ledPin, OUTPUT); // Set the LED pin as an output
}

void loop() {
	digitalWrite(ledPin, HIGH); // Turn on the LED
	delay(1000); // Wait for 1 second
	digitalWrite(ledPin, LOW); // Turn off the LED
	delay(1000); // Wait for 1 second
}
```

And it's working! We've got an Arduino Nano ESP32 with a blinking orange LED.

The ESP32 is a WiFi enabled board so the next step was to test if it was able to connect to the WiFi and sent an HTTP request to my web server.

I want a time series database to push the sensor readings into. I first tried [Prometheus](https://prometheus.io/) but since it works by pulling data from your data sources instead of allowing it to be pushed I wasn't interested.

After looking at many time series database solutions and scratching my head I gave up and spun up another [Postgres](https://www.postgresql.org/) on [Railway](https://railway.app/). I should be able to connect directly with the database from my ESP32, how hard can it be?