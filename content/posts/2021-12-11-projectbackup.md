---
title: "How I backup old dev projects"
date: 2021-12-11T12:00:00-04:00
draft: false
---

# How I backup old dev projects

I just got a new Macbook (M1Pro - so stoked!) - and am now going through the exercise of backing up old files and projects from the old laptop. While I'd prefer to quickly copy everything and move on, my old `Developer` directory was over 90GB in size - which is ridiculous for the ~40 various little projects I spun up over time. 

I really only need to backup _my_ code, not `node_modules`, etc.

Here's a script to accomplish this - it recursively deletes all `node_modules` directories from the current working directory:

```bash
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```

I took this and extended it to other bloatful directories which I don't need to backup, things like `build` artifacts, `.gradle` caches, `Pods` dependencies, etc. As a mainly JS/TS & React Native developer, I used this set:

```bash
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'Pods' -type d -prune -exec rm -rf '{}' +
find . -name '.git' -type d -prune -exec rm -rf '{}' +
find . -name 'build' -type d -prune -exec rm -rf '{}' +
find . -name '.gradle' -type d -prune -exec rm -rf '{}' +
```

Which thinned the `Developer` directory from ~90GB down to ~80MB! 

I can easily zip up that directory and drop in Cloud Storage backup now :cheers:

Source:
https://stackoverflow.com/questions/42950501/delete-node-modules-folder-recursively-from-a-specified-path-using-command-line