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