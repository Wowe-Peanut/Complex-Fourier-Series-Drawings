# Complex-Fourier-Series-Drawings

Hi there! This was based on a 3b1b video about approxmating the graphs of different shapes using a bunch of spinning vectors. All code is my own but I did take inspiration from The Coding Train's video of fourier series in order to learn how to use the sketch.js library. The math used in this project is outlined completely in 3b1b's video on the matter so I highly recommend watching it. Grant, as usual, does an exceptional job out making the complicated math much more approachable and intuitive. 

The code reads in an SVG path and turns it into a giant piecewise function of bezier curves in order to perform some integrals latter on. It then spits out vectors in the form: [frequency, real, imaginary]. Which I then copy/paste to my JS code which draws the vectors and sends them spinning, tracing the tip of the final vector as it goes. Note that in order for the program to work as intended, the SVG must contain ONLY 1 single, continuous, looping path. Any breaks in the line will cause the line to snap, ruining the drawing.

I tried to replicate the visuals of 3b1b's animations as I really liked the look of them (white arrow, black background, yellow path... etc). Here are a few examples:

Anime Girl:

![animegirl](https://user-images.githubusercontent.com/47678647/180617179-4ae811cd-5afd-4027-8858-db66235d7714.PNG)

Sova (Valorant):

![SOVA worked!](https://user-images.githubusercontent.com/47678647/180617208-eec6a582-f1a8-466f-86ed-82b1c2870931.PNG)

My Face (Had ice packs on from wisdom teeth surgery):

![ryan graph](https://user-images.githubusercontent.com/47678647/180617226-a661fc38-3220-4cc7-9187-0c73e00285ab.PNG)



3b1b Video: https://www.youtube.com/watch?v=r6sGWTCMz2k&t=1006s&ab_channel=3Blue1Brown

The Coding Train Video: https://www.youtube.com/watch?v=Mm2eYfj0SgA&ab_channel=TheCodingTrain
