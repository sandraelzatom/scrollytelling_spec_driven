# Hobbies Scrollytelling Project
**Live Site:** [https://sandraelzatom.github.io/scrollytelling_spec_driven/).

This is a small scrollytelling project I put together for the assignment. I used the "Spec-Driven" workflow we talked about to see how it changes the way AI handles a codebase. I ended up choosing my main hobbies—reading, football, and singing—as the content for the slides.

### How I built this
I started by forking the template and looking through the source code to see how the Next.js components were pulling data. Instead of just asking an AI to "make me a site," I tried to stick to the process:

* **The Spec:** I wrote a quick spec in the docs folder to outline the three hobby slides.
* **The Content:** I updated the data in `src/app/page.tsx`. I had to make sure the object structure stayed the same so the Framer Motion animations didn't break when I swapped the text.
* **The Tech:** It’s running on Next.js and deployed via GitHub Actions. 

### What’s inside
* **Slide 1:** A bit about my love for reading and getting lost in books.
* **Slide 2:** The energy of playing football and the team aspect of it.
* **Slide 3:** My interest in singing and music.

It was interesting to see how much faster it is to build a "complex" UI when you're directing the AI with a specific plan rather than just guessing. 
