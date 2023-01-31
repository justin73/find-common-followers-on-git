# Find common followers on Git

a simple web app which accepts two GitHub usernames and displays a list of their common followers (ie, the people who follow both users)

Context: the GitHub user follower API has pagination feature so that means we cannot get all the followers on one try. so for all the user follower tables, I've enabled the infinite scroll and the common follower table once activated will automatically update as your scroll the user followers tables

NOTE: if your requests get errored out and with the error of running out of limits or bad credentials, please generate your own github token and add it in axios to the `getFollowers.api.js` file as part of the "headers"

Example

```
   {
     headers: {
       // here to paste your own github token
       Authorization: `token {YOUR_PERSONAL_TOKEN}`
     }
   }
```

DEV NOTE: Due to time limit, the current status only includes the happy path and some mininal UI elements, there is no time left to polish the UI as well as adding unit tests. 

List of things to continue
- [ ] Polish UI
- [ ] Add unit tests
- [ ] Better error handling mechanism

## Preivew

### Normal state

![Screenshot 2023-01-30 at 10 18 28 PM](https://user-images.githubusercontent.com/3356603/215654425-a2c581cc-84fa-48c8-be5e-0b3ecae373bc.png)

### Form validation

#### Required field

![Screenshot 2023-01-30 at 10 14 43 PM](https://user-images.githubusercontent.com/3356603/215653934-15bbef45-3ed6-48d2-902b-d41a75150551.png)

#### Forbid two idential usernames

![Screenshot 2023-01-30 at 10 14 34 PM](https://user-images.githubusercontent.com/3356603/215653936-d14ae222-7b26-42b4-9212-04dde3832029.png)

#### Error Handling

![Screenshot 2023-01-30 at 10 02 15 PM](https://user-images.githubusercontent.com/3356603/215653750-7b0aa595-0c1c-48f6-9114-7238e48cafb1.png)

## Run it locally

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm run dev
```

And then open <http://localhost:3000> to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |

## Credits

Vite Template React is built and maintained by [Safdar Jamal](https://safdarjamal.github.io).
