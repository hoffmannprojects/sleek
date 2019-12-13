---
# layout: post # should be set by default
title: "Battle Tanks"
field: "PROGRAMMING (Unreal Engine, C++)"
featured-img: battle-tanks-01
permalink: /:collection/battle-tanks-01/
---

A third-person arena combat game against the AI with custom vehicle physics. Personal project.

## Overview

- Written in C++
- Engine: Unreal Engine
- Platform: PC
- Camera: third-person
- Character: tank with independent barrel and turret
- Controls: keyboard & mouse, game pad

## Details

- Developed a tank API in C++ that is shared by the player and the AI to constrain the AI to the same capabilities as the player for a balanced and natural experience
  - Used the component pattern for the tank to decouple the architecture, interfacing with blueprints for input and asset referencing
    - Implemented an aiming component utilizing projectile calculation
  - Used the observer pattern with dynamic multicast delegates to handle "death" of a tank
  - Customized Unreal Engine's gameplay framework for damage handling
- Implemented custom vehicle physics with suspension based on physics contraints
  - Created re-usable srungwheel component that gets spawned at runtime at predefined locations of the tank
- Set up particle effects for projectile trails and impacts

![Battle Tanks - ](/assets/img/portfolio/battle-tanks-03.jpg " ")

![Battle Tanks - ](/assets/img/portfolio/battle-tanks-07.jpg " ")

![Battle Tanks - ](/assets/img/portfolio/battle-tanks-08.jpg " ")

![Battle Tanks - ](/assets/img/portfolio/battle-tanks-06.jpg " ")

![Battle Tanks - ](/assets/img/portfolio/battle-tanks-02.jpg " ")
