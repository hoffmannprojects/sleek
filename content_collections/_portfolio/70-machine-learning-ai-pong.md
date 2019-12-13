---
# layout: post # should be set by default
title: "Two Machine Learning AIs playing Pong"
field: "PROGRAMMING (Unity, C#)"
featured-img: machine-learning-ai-pong
permalink: /:collection/machine-learning-ai-pong/
---

Two game AIs powered by an artificial neural network (ANN) entirely written in C# play the game of Pong against each other.

## Overview

- Written in C#
- Engine: Unity
- Platform: PC/Mac

## Details

- Two game AIs each use their own Brain-, ANN, Layer- and Neuron instances based on the same classes.
- The AIs learn to adjust the vertical paddle position by applying various amounts of force in order to hit the ball.
- Basic raycasting provides the AIs with information about the ball's curennt and future positions.
- Additional raycasting of the ball's path provides the Brains with information about changes in the ball's direction when bouncing off the top/bottom walls.

[View source code](https://github.com/hoffmannprojects/ANeuralNetworkThatPlaysPong){:target="_blank"} on Github