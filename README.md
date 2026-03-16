# Project description
Building a responsive markdown editor

# How to run locally

# Feature list
- Has a textarea (Markdown input)
- Has a preview pane (HTML output)
- Used Vue 3
- Used marked.js
- Shows live preview
- Displays character counter (excluding HTML tags)
- Toggles light/dark theme
- Persists text using localStorage
- Persists theme using localStorage
- Responsive (stacked mobile / split desktop)

## AI Prompts I Used
- What is the difference between v-model and v-html.
- Why does flex: 1 make children equal size in a flex container, and what does "equal size" actually mean?
- Why do we need height: 100% on the parent container so that flex: 1 workds on children?
- I previsouly restored and updated input using manual JS with addEventListener and direct DOM updates; now I have to use mounted() and  watch in Vue. What's the difference? 
    - (After figuring out this part) Can you make a diagram of the equivalent parts between the two approaches? 
- How does a click event work in Vue.js?

# Milestone 1 Quiz 
    1. What is the purpose of git commit ?
        >It saves the current changes to your local repository with a message describing what was changed.
    2. What happens when you push to GitHub?
        >The committed changes from your local repository are uploaded to the remote repoitory on GitHub.
    3. Why should we commit multiple times instead of once at the end?
        >so that we can see the changes made and go back to previous versions
    4. What is the difference between local repository and remote repository?
        >local repository: the version of the project stored on the computer
        >remote repository: the version of the project stored online

# Milestone 2 Quiz
    1. What does display: flex do?
        >It turns an element into a flex container which allows child elements to be aligned in a row or column.
    2. What is a media query?
        >It applies styles only when certain conditions are met.
    3. Why should responsive design be handled in CSS, not JavaScript?
        >Since CSS is built for styling it is easier because it wouldn't require extra scripting.
    4. What happens if media query is placed before base styles?
        >The base style may override it, so the media query may not work as expected.

# Milestone 3 Quiz
    1. What is the difference between data and computed in Vue?
        >data stores reactive values
        >computed calculates values based on data
    2. Why should we not manipulate DOM manually in Vue?
        >Vue automatically updates the DOM for us.
    3. What does v-html do?
        >It renders HTML inside an element instead of plain text
    4. Why must we strip HTML before counting characters?
        >Because HTML tags would be counted as characters which would not be accurate if we want the count of our actual content.

# Milestone 4 Quiz
    1. What is localStorage?
        >localStorage lets you store data on the user's device and that data persists even after the page is closed or browser is restarted.
    2. When does mounted() run?
        >mounted() runs when the component is added to the page, so you can use to load saved data like text or theme so that it shows up right away. 
    3. What is a Vue watcher?
        >A Vue watcher watches a value and automatically runs code when it changes, like saving text or theme to localStorage.
    4. Why should theme state also be persisted?
        >So the site remembers the user’s theme and shows it the same way when they come back.

# Final Reflection Quiz
    1. How did you utilise AI to help you code the app, show some examples.
        > I used AI to help me understand concepts I was confused about. For example, I asked questions about using flex and Vue. I also used it to understand differences between Vue.js and JavaScript Dom manipulation. I asked about differences between v-model and v-html as well. I think asking about differences between things helps me understand them better because I have something else to compare it to.
    2. What part ofthe build was most challanging?
        >For me, the most challenging part was understanding how Vue handles reactivity compared to manual JavaScript DOM. I had just gotten used to getElementID/addEventListener, so switching to mounted() and watch required me readjust my thinking. 
    3. What is the benefit of using a framework such as Vue for forntend development
        >Using Vue is helpful because it automatially keeps the data and the page in sync. Instead of manually updating the DOM, you update the data and Vue handles the rest. It makes the code more organized and easier to manage.