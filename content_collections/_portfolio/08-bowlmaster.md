---
#layout: # should be set by default
title: "Space Bowling"
field: "PROGRAMMING (Unity, C#)"
featured-img: bowlmaster
permalink: /:collection/bowlmaster/
---
![Scoring](/assets/img/portfolio/bowlmaster-01.jpg "Scoring a ball.")

3D bowling in space. The main challenge was the implementation of the scoring system compliant with official ten-pin bowling rules. Personal project. 

## Details:
- Implemented architecture, fully compliant with official ten-pin bowling rules, using test-driven development (TDD) with unity testing tools:
  - GameManager class holds game state. 
  - GameManager requests next appropriate action from static action system class.
  - GameManager requests current score from static scoring system class.
  - Realtime scoring system takes possible bonuses from future attempts into account.
- Animations with sub-state machines.
- Manipulation of Unity's physics engine.
- Touch control system with swipe input for launching the ball.
- Camera chases the ball until in front of the pins.

- Written in C#
- Engine: Unity
- Platform: PC/Mac, Android/iOS

![First ball](/assets/img/portfolio/bowlmaster-02.jpg "Scoring the first ball.")
Scoring the first ball...

![Second ball](/assets/img/portfolio/bowlmaster-03.jpg "Scoring the second ball of a frame.")
...the second ball adds to a frame score.

![Hitting a spare 1](/assets/img/portfolio/bowlmaster-04.jpg "Hitting a spare.")
The first ball of the frame hit nine pins, now we hit this last pin with the second ball of the frame...

![Hitting a spare 2](/assets/img/portfolio/bowlmaster-05.jpg "Rewarded a spare.")
...which adds up to a spare.

![Last frame](/assets/img/portfolio/bowlmaster-06.jpg "Last frame.")
The last frame is special. Had we managed to bowl a strike or spare with the first two balls, a bonus ball would have been rewarded.