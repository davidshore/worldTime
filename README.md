# Build a Clock

In today's assignment we're going to practice using state in React by building a clock

## How to complete this assignment

### Project setup

In the terminal, "cd" into the folder of your project and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm run dev`.

### Part one - create a clock in App.jsx

1. Use `new Date().toLocaleTimeString()` as clock state to show the current time.
2. Use `setInterval` to update state every 1000 ms. `setInterval` should be called inside `useEffect`.

### Part two - create a clock component

1. Move your clock into a component and give your clock two props: `city` and `timeZone`.
2. Use the `city` prop to show the city title of the clock and the `timeZone` prop to show time at that timezone.

### :books: Reading List

- [JavaScript Date toLocaleString()](https://www.w3schools.com/jsref/jsref_tolocalestring.asp)

---

### :sos: How to get help

Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your team.
3. Ask your fellow students in Slack.
4. Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should understand more about state in React.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Make a button which, when pressed, pauses the clock.
1. Make another button which makes the clock run again.
1. Use CSS to make the clock look fancy.
1. Use CSS to make the clock look different based on the time of day.
