---
title: About Mood
description: Not sure what to do at the beginning? Check here!
aside: false
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - Guide
    - Tutorial
    - Getting Started
    - Mood
    - Mental Health
    - Face
    - Mood
---

<img class='guide-img' src='/images/guide/hui1.webp' alt='Upper left corner UI'>

## {{ $frontmatter.title }}

Mood can be explained as: clarity, mental strength, mental health, happiness, or emotional state.  
Mood is divided into three states, determined by the mood value.  
The mood value ranges from 0 to 100.  
It is divided into three different numerical stages, where a high mood value corresponds to happy emotions, and a low mood value corresponds to sadness or depression.  
It also affects some cultivation facility event values,  
and some dialogue events, destiny events are influenced by this value,  
such as <MarkdownWrapper>||Little junior sister night attack event, going to the Nan Gong family falling horse event, Long Yuan giving secret book event||</MarkdownWrapper>, etc.

## How Mood Value Decreases

1. Participating in most cultivation facilities, working, diligent practice, etc., will decrease the mood value.
2. Encountering misfortune, pain, sadness, verbal attacks, internal injuries, or other events or dialogues will decrease the mood.

## How Mood Value Increases

1. Resting in the male disciple room, doing nothing, or wandering around the mountain or market, generally increases the mood value.
2. Eating in the male disciple room and restoring mood, the value increase depends on the type of food.
3. Folding paper can increase mood.
4. Interacting well with female characters can increase the mood value.
   For example, <MarkdownWrapper>||Little junior sister pat pat||</MarkdownWrapper>.
5. Some lucky plotlines, or events that improve mood, may increase the mood value.

## High Mood (Mood Value 66 ~ 100)

<MoodIcon :mood="`high`" :size="`medium`"></MoodIcon>
Also known as happy, joyful, cheerful  
Usually associated with successful events,  
During high mood, there are additional points available for ironing and martial arts training in the back mountain (5 points -> 5+3 points).

## Normal Mood (Mood Value 33 ~ 65)

<MoodIcon :size="`medium`"></MoodIcon>
Also known as calm

## Low Mood (Mood Value 0 ~ 32)

<MoodIcon :mood="`low`" :size="`medium`"></MoodIcon>
Also known as depressed, sad  
Usually associated with major failures, unsuccessful events,  
<MarkdownWrapper>||But when ironing at the Tang Sect, you will get money because of this, which is a rare exception.||</MarkdownWrapper>