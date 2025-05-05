# Project 2 - Pokemon Team Creator

![Screenshot of App](/ScreenshotApp.png)
![ScreenshotApp](https://github.com/user-attachments/assets/a0e67ea2-b7cd-4b28-a1f3-6d0dda95ae40)

###### Screenshot of App

## Introduction:

'Which 6 Pokemon would you pick to be in your team?'

A topic that many people will discuss at one point when talking about Pokemon. Some people will add in their strongest Pokemons, the cutest Pokemons, their favourite Pokemon, or make a team filled with Pokemon of the same type. Think of this app as team builder, a fantasy football with Pokemon.

This React app would let you pick, search or generate a random Pokemon to add to your team. You can then save your team, show off your teams to your friends.

## Hierarchy of app

![App Hierarchy](/AppHierarchy.png)

**App** is the overall parent component. The following components are child components:

**Display** component handles the rendering of the image, this is what the user sees when they launch the app.

**Search** component retrieve the Pokemon via name, if the user already has in mind the Pokemon they want.

**Team** component stores the Pokemon users have selected. They may not have duplicates, the number of Pokemon cannot exceed 6 in total.

**Random** component generates a random Pokemon and replaces the Pokemon that is current in the display. Useful if users are spoilt for choice or want to see which random Pokemon they would get.

**Nav** component is responsible for linking the pages, the homepage and the team loadout page.

**Upload** component will save the user's team once they have selected 6 Pokemon to Airtable.

_Lifting state:_ Add to team function is passed to Display and Search. Info is updated and lifted back to parent, then passed as props to Team and Upload.

## Link to app:

https://github.com/jxy25/project2

## Technologies Used:

1. Javascript
1. HTML
1. CSS
1. Vite
1. Airtable

API used: PokeAPI

## Trello

https://trello.com/b/kQKHmB1j/project2

## .env:

VITE_AIRTABLE_KEY

VITE_AIRTABLE_BASEID

VITE_AIRTABLE_TABLEID

## Stretch Goals

Turn the Search function in the app to display on the main screen, rather than a separate image so it does not break immersion, and confuse users.

Allow user to retrieve their saved Pokemon teams, current they would have to regenerate their team composition when the page is refreshed.

Let users pick from all the Pokemon in the series. It is 2025 and there are 1000+ Pokemon already.

Some statistics would also enrich the user experience, such as showing what elements your team would be weak against, the number of times this Pokemon has been chosen, or show how many people picked the same 6 Pokemon as you.
