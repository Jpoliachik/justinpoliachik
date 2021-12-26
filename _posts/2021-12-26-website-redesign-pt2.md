---
title: "justinpoliachik.com Redesign - Part 2 (Development)"
date: "2021-12-26T12:00:00-04:00"
---

I'm rebuilding my personal website! [See Part 1 for the design phase](/posts/2021-12-24-website-redesign/)

At this point I have a wireframe I like, and I'm handing it off from Design Justin to Developer Justin. Here's the mockup of what we're building:

![justinpoliachik.com v4](/images/site-redesign-4.png)

The old site used [Hugo](https://gohugo.io/) to statically generate and publish markdown files. The new site needs to do much more, and I need full control without relying on templates. So, what frameworks should I use? Lets review my requirements first:

### Requirements

- Static site generation is a must. I want it to fit the existing S3 deployment strategy, and avoid any and all server management.
- Due to time constraints, I don't want to use anything _too_ foreign and learn from scratch. I'm very familiar and quick building in React, so I'm leaning that direction (although not a dealbreaker).
- Must be able to add new content easily, without writing code. Hugo's Markdown generation was great, I'd like to mimic this system if possible.

### Tools

Seeing [Matt Lim](https://www.mattlim.me/) using NextJS for his site made me realize Next isn't just a server-side rendering framework. It is also excellent at [static site generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) too. I've heard the hype and know it's great (the docs are incredible too, always a great sign), so I was excited to try it out!

For styling, I've heard _incessant_ praise for [Tailwind](https://tailwindcss.com/) on Dev Twitter lately, so I figured I'd check it out. And yes - I immediately fell in love. Opinionated and well thought-out tools that remove decision points (like naming css classes) are a godsend. I can't imagine writing CSS manually ever again.

The plan:

- React and NextJS with static site generation
- TailwindCSS for styling
- Typescript (this is always my default now, no reason _not_ to use it!)

### The Buildout

NextJS's [Getting Started guide](https://nextjs.org/docs/getting-started) and then the [Blog Starter project](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) were a perfect 1-2 combo. The blog starter was _exactly_ what I needed to build dynamic markdown blog posts, so I did a lot of copypasta here, got the project setup and was rolling. Next's [`getStaticProps`](https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops) was a cool & elegant way to inject build-time data - like our preprocessed list of Markdown files in the `_posts` directory here.

While learning Tailwind from scratch, I kept a [cheatsheet](https://nerdcave.com/tailwind-cheat-sheet) open at all times, but got comfortable quickly and made easy progress with no issues.

I honestly can't remember the last time I had this great of an experience learning new tools. Both Next and Tailwind had amazing documentation, worked exactly how I expected without hitches, and were incredibly elegant solutions. This stack is where it's at, let me tell ya.

### Animated Greeting

I added a fun animated greeting by randomly cycling through phrases every few seconds. [react-text-transition](https://github.com/WinterCore/react-text-transition) was a quick drop-in component that accomplished exactly what I was looking for. I love how it turned out!
![greeting animation](/images/justinpoliachik-greeting.gif)

Accomplished via

```
useEffect(() => {
  const intervalId = setInterval(
    () => setIndex((index) => index + 1),
    4000 // every 4 sec
  );
  return () => clearTimeout(intervalId);
}, []);
```

and rendering

```
<div className="text-3xl md:text-5xl font-serif font-bold flex flex-row">
  <TextTransition inline={true} text={greetings[index % greetings.length]} springConfig={presets.slow} />
  <div>, I'm Justin!</div>
</div>
```

### P5js using NextJS

The last technical challenge was the generative art component.

I've been working on a collection of p5js sketches and wanted to include a dynamically drawn header. [react-p5](https://github.com/Gherciu/react-p5) seemed to be the easiest method.

But importing `react-p5` naively into my component threw `ReferenceError: window is not defined` errors. This is because Next doesn't actually run on the browser, so it has no `window` reference. To fix this, Next supports [Dynamic Imports](https://nextjs.org/docs/advanced-features/dynamic-import), allowing us to load `react-p5` at runtime rather than build-time. Very cool!

```
const P5AbstractWaves = dynamic(() => import("./P5AbstractWaves"), { ssr: false });
```

I calculate the parent component dimensions in `useLayoutEffect` (because p5 requires explicit dimensions), and use a hacky `shouldRenderSketch` boolean in state to dismount / remount the component, allowing the user to "Redraw".

![gen art block](/images/justinpoliachik-genartblock.gif)

[Full code for GenArtBlock.tsx component on GitHub](https://github.com/Jpoliachik/justinpoliachik/blob/master/components/GenArtBlock.tsx)

---

And that's it!

This was a fun holiday project, and I'm really happy with the results!

[See the full project code on GitHub](https://github.com/Jpoliachik/justinpoliachik)
