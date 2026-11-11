# Task: Finish the Todo List

Time: about 10 minutes. Work on your own. You may use MDN and the React docs. Please do not use AI tools.
Think aloud while you work.

## Setup

1. Fork this repo and clone your fork.
2. Create a branch: `git checkout -b feat/<your-name>`
3. Run `npm install`, then `npm run dev` to see the app.
4. Run `npm test` to see the tests. Right now they fail.

## What to do

All changes go in `src/App.jsx`. Look for the `TODO` comments.

1. **List:** render every task as an `<li>` using `.map()`. Use a `key`.
2. **Conditional:** show "✅" for done tasks and "⬜" for the others.
3. **State and event:** add a "Mark done" button to each task. Clicking it toggles `done` for that task only.
4. **Stretch (only if you have time):** show "X of Y done" in the page. Then un-skip the last test.

## Rules

- Do not edit `src/App.test.jsx` (except un-skipping the stretch test).
- Run `npm test` before and after your changes.

## Submit

1. Commit with a clear message.
2. Push your branch to your fork.
3. Open a Pull Request to this repo. Fill in the PR template.
