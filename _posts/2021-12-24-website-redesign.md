---
title: "justinpoliachik.com Redesign"
date: "2021-12-24T12:00:00-04:00"
---

It's time to redesign my personal website.
Why?
![justinpoliachik.com Before](/images/2021-12-24-website-redesign-origsite.jpg)

- It's boring! I'm much more creative and visual than the current site reflects.
- With Hugo static site genration, I can only post Markdown files with limited ability to customize and add richer content. I'd like to add p5js generative art components and other media.
- No separation between short quick posts, and long-form content (project case studies, for example)

### Why Now?

- I'm inspired by seeing other personal sites, and in this new remote-first world I want to be open and inviting for others to connect with.
- I want to flex my design muscles a bit. This is a good exercise to solve problems for myself, learn Figma, and post about my process.
- Expand my opportunities - I want to stand out as both an engineer and designer.

## The Design

### Addressing the Problems:

#### Boringness

Fix 'boringness' at its core with content, not pure "visual flair".
Introducing more varieties of content - blog posts, projects, artwork, and a personal touch - should make it more interesting.

#### Reflecting my personality

- Add a good profile pic, a fun blurb, and some splashes of color.
- Important to keep things fluid and not too rigid.
- Needs to feel friendly and approachable - make people want to reach out and connect! Do this by being transparent and fun.

#### Multiple media types

- Support posts with text, images, videos, code snippets, and custom widgets (eg p5js).
- I also need it to be incredibly easy to write and edit posts - this is paramount. Remove all hurdles to quickly adding content. Make simple posts easy, and make complex posts possible.
- Some content (blog posts) will be strictly dated and posted chronologically. Other content (long-running projects) won't. Have a place for both.

### Inspiration

These are some of the personal websites I love, and drew inspiration from:

- Matt Lim - [mattlim.me](https://www.mattlim.me/) - great 'projects' section. clean, simple layout with sprinkles of personal touch.
- Cole Townsend - [twnsnd.co](https://twnsnd.co/) - love the personal and authentic vibe. love the simple header.
- Paige Bailey - [dynamicwebpaige.github.io/info](https://dynamicwebpaige.github.io/info/) - amazing guiding principles.
- Aileen Shin - [aileen.co](https://www.aileen.co/) - beautiful project images.

### MVP Needs:

- Intro blurb
  - Image, short intro, quick links to socials
- Projects
  - List of projects with an image, details, and links.
  - May link to external website, or to own post.
- Chronological list of posts
  - Place to include all old posts, plus new
  - I like writing in Markdown - hopeful for a way to use this, but add custom components if needed.
- Keep it simple, but extensible for future iteration!

### Nice to Have (Future)

- Filterable posts by tags
  - I work on a lot of different types of things, would be cool to be able to isolate each.
- Embedded Twitter or Instagram content
- Live metrics - where I am, what I'm working towards, data-driven progress

- How to balance projects with posts?
  - Which is more important - showing the latest post, or showing a list of my bigger projects?
  - What would my current list of projects be?
    - Better - not really a 'project' though - I can't show any screenshots or project details. I basically only want to list that I currently work there, and maybe a short sentence or two on area of focus.
    - Telios
    - one second everyday
    - justin.makes.things
    - Flooded
    - Graveyard
      - LifterRun
      - BatterUp
  - List projects first, then Posts. GitHub has 'pinned' repos - something like that?

# Development Phase

Top little blurb doesn't do much. Lets get rid of it.

Referencing https://github.com/vercel/next.js/tree/canary/examples/blog-starter for the NextJS dynamic Markdown stuff
