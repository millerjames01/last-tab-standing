# Last Tab Standing

![Last Tab Standing Screenshot](https://user-images.githubusercontent.com/3317059/148871434-7d7a5040-224a-4a5b-8827-f5ec8a26d0fc.png)


This is a first demo project I've done to practice developing web applications in JavaScript.

**Last Tab Standing** is a simple web game where you score by keeping the game open in a tab.
The longer you keep the tab open, the higher you climb up the leaderboard.

The backend is written with [Express](https://expressjs),
and the user interactions reach the server with [Socket.io](https://socket.io/).

## How to run

To run this project, you'll need `npm` 
([install info. here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

In the central directory run:

    node app.js

Then, open your browser and visit [localhost:3000](http:/localhost:3000).

## Project Structure

The project has a super simple structure.

The server-side is written in the `app.js` file.

The client-side is written in the `index.html` file, 
with the client interactions written in a script at the bottom of the file.

There are a brief `package.json` and `package-lock.json` to handle the dependencies,
and there is a public directory to store a few image assets for the page,
including the clock and the website favicon.

## Ideas for Future Improvement

This project was written to familiarize myself with the basics of Express and Socket.io.
Needless to say, there are definitely some limitations to the simplicity of the site's design.
Here are some ideas that I might implement in the future or any future learners might try developing on their own:

* A dedicated database to store the site leaderboard. As it stands, it's just stored in-memory.
* Sealing the Socket.io connection. Right now, users can spoof multiple players through the browser console.
* Syncing the clock animation to the stop. Now, the animation stops when the tab exits and it desyncs with the time.
* Refactoring with jQuery. It was left out to keep overhead low, but it might make the DOM manipulation cleaner and easier.

## Contact
If you have any questions about how the site functions or ideas for suggestion, feel free to reach out to me on here or at
[miller.james01@gmail.com](mailto:miller.james01@gmail.com).
