---
title: "The Flytrapps Story - Lessons Learned from a Failed Startup"
date: "2021-03-03T17:30:00-04:00"
---

Between 2017 and 2019 I worked with a close group of friends on a software startup named Flytrapps. We built multiple products (4 different apps in total) and received glowing user feedback, but were never able to find our way to revenue.

As all software startups do, we experimented and pivoted to find product-market fit. But what we also learned is: it's definitely possible to pivot too much.
As a team of experienced software engineers, we thought our speed of iteration would lead us to success. But we overlooked several crucial elements that ultimately led to our failure.

---

## The Story

The story of Flytrapps begins in early 2017 when my friend Brooks - the most avid NFL fan I know - brought an interesting idea to lunch. At this time, Tony Romo was a new announcer, and gained a reputation for predicting upcoming plays with wild accuracy. As the players lined up, Romo could identify formations, player movements, and would call it - eg - "This is going to be a run to the left". [It was wildly entertaining to watch](https://www.youtube.com/watch?v=uVCVawClpRI). Could we recreate this, but put the guessing power into the fan's hands at home, via an app? The idea was great. It would be an incredibly fun game. And there were endless opportunites to expand gamification and "fan engagement". Brooks, Ben, Jesse and I set out to take on the challenge.

![Ben, Brooks, Jesse, and Myself](/images/flytrapps-squad.jpg)

### App #1

We spent hours brainstorming the technical feasibility. Realtime apps are no problem. But syncing our app to the game on screen? This was an issue. When watching a live game, the TV delay could be anywhere from 10 seconds to 2 minutes. To accomplish the "play-calling" accurately, we would need to cut off guesses right when the snap happened. But the TV delay variability was longer than the length of a single play. We built an app to test what this delay experience felt like, played a few rounds with friends, and the delay inconsistencies were brutal. We needed a way to sync our app with the user's TV. But is _that_ possible? Maybe have a "calibration" period before the user starts? Or maybe do audio fingerprinting? Both are clunky and error prone. And besides, there were endless ways to cheat this system.
Ultimately, syncing our game perfectly with the user's TV was not reliably feasible as a standalone app.

So we pivoted.

### App #2

"This would technically work as an in-stadium experience" we said. "All realtime. No syncing required!"
When everyone has a 70" TV at home, there's increasingly less of a reason to attend games in person. The NFL needed a reason to get fans in-stadium, and we could be the ticket!
As long as in-stadium internet infrastructure was decent, it was feasible. The Vikings just built a new stadium and the Raiders had their $2 billion Vegas stadium upcoming. With state-of-the-art wifi, they'd need new experiences to showcase to fans. This was our niche.

We knew we needed to be legit to pitch NFL teams. They weren't going to stake their reputation on a startup without a name. So we incorporated. We formed "Flytrapps, LLC" as a legal entity in North Carolina, paid for a fresh logo and branding, and started working on demos and pitchdecks. [We created a second app named "HuddleUp".](https://www.youtube.com/watch?v=R6by3Km0Tio&feature=youtu.be&ab_channel=JustinPoliachik)

We leveraged our connections and got meetings with the NFL and several individuals. We got the standard response - "Looks cool, keep us updated on your progress."
As a team of three engineers and one product guy, we clearly didn't have the sales chops to push this. All we knew was how to build. So we continued building.

We needed a way to prove the concept with a crowd. Do we want to sneak into a Panthers game to run the app from the stands, gaining adoption via guerilla advertising? This sounded like an easy way to get sued out of existence. Plus the NFL season didn't start for 6 more months. However, the local baseball team's season recently started, and baseball's (slow) pace of play made it perfect for additional 2nd screen entertainment.

So we pivoted.

### App #3

The Wilmington Sharks, a local collegiate summer baseball team in the Coastal Plains League, had a growing fanbase of over 1000 fans per game. I played High School Baseball with the Sharks manager Carson, and grabbed lunch with him to chat about our idea. He graciously agreeded to let us run our app at a few games, help advertise it, and hand out Sharks gear as prizes for the winners. It would be a fun fan experience. Game on!

We started from scratch and built a new app called "BatterUp". Based on the original "play calling" concept, we modified it for baseball and added generic yes/no questions. We also added the ability to ask concurrent questions throughout each inning so multiple questions could be open at once. Leaderboards were added to let fans track their standings, gamify the experience, and create a platform for offering rewards to winners.
We built the app for iOS and Android using React Native, along with an admin console for web using React, connected using Firebase's Realtime DB. Working early mornings and late evenings, we hustled to design and build the solution in a couple months with the end of the Sharks' season as a looming deadline.

![BatterUp Live](/images/batterup-screenshots.png)

In June 2018 we brought a group of close friends and family to a Sharks game with a Beta version of BatterUp in hand. One person would run admin from their hotspot-connected laptop, prompting questions and providing answers, while the rest of us would play and compete for 1st place. It was a blast.

Questions ranged from basic baseball gameplay to wildly off-hand and situational. The admin had full control over question prompts, timing, and point differential - weighing the probability of each option to match the risked point total. If the user got the question correct, they'd get the points.

- "Will the next pitch be a strike?" - Yes (5), No (5).
- "Will the next batter get on base?" - Yes (10), No (5).
- "Will the next batter on deck take more than 2 practice swings?" - Yes (10), No (10).
- "When the inning ends, will a fielder toss the ball into the dirt pitchers circle?" - Yes (30), No (5). (Imagine our collective excitement when the ball rolled up to the mound, over, and BARELY stopped just short of the grass)
- "Will Brooks be able to get the attention of the 3rd base coach?" - Yes (20), No (20) (This one turned out to be undoubtedly "Yes")

It kept us fully engaged the entire game, and was the most fun we've had at a baseball game. The app was a smashing success.

We debugged and refined the app, submitted to the App Store and Play Store, and printed posters and marketing cards to prepare for our public launch. On July 28th 2018 we setup a table at the Sharks game to run admin for our app. Armed with a bag of swag curtosy of the Sharks, we gave out prizes for the top points at the end of each inning and engaged with the fans.

![BatterUp Poster Header](/images/batterup-header.png)

At the beginning of the game, we saw about 60 people playing along in the stands. At the end of each inning, the winner received in-app instructions to come pick up their prize, so we used this as an opportunity to chat and ask for user feedback. Every single person we talked to loved it. They couldn't put their phone down. We saw avid baseball fans playing. We saw kids who don't normally pay attention to baseball glued to their chairs awaiting the outcome of the next play. We even saw the actual players in the dugout using the app (and betting against their teammates) to compete on the BatterUp leaderboard. By the last inning, we still had 50+ participants. The engagement was astounding.

Ben, Brooks, Jesse and I left the Sharks game feeling victorious. We now only had the challenge of productizing and selling BatterUp.

![The BatterUp Crew running admin at a Sharks game](/images/batterup-crew.jpg)

As a fan engagement tool, BatterUp could attract users. But it required a dedicated human adminstrator to run the game from the stadium. For small teams, the cost to buy our system plus dedicating an employee to run a fan engagement game attracting ~50 fans is not worth it. The number of users alone is not enough to warrant significant adspace revenue. We _still_ didn't have the sales chops to push our unproven, zero-revenue product upstream to bigger teams. And we lacked the desire to go door-to-door selling the product for marginal revenue that wouldn't be worth the support costs (this was our side-gig after all).

So we pivoted.

And this was the worst pivot of all. We had a good product. We gave up at the first sign of struggle to find a buyer or investor. We gave up when it was going to require sales effort. We gave up when things got less fun and we weren't building anymore.

So we kept building.

### App #4

Our final pivot changed the trajectory of our unbuilt rocket. Instead of aiming for a modest niche in the sports entertainment industry, we aimed for the moon.

"What if we change BatterUp to be played by anyone, anywhere, and we don't just limit it to baseball. We let people predict _any_ live event."
Was it possible? It was a technical challenge too juicy to pass up. Would it be possible to create an app that gamifies any predictions? We'd limit the scope to yes/no only... and have the community upvote the best questions... and have the community provide realtime feedback to adjudicate the answers!

We built our 4th app. This one called "Happin". And we did some testing to prove the concept. But we still weren't sure if it would work - it was highly dependent on a large active community. And the rocket ship we were planning to build somehow lost its trajectory - instead of pointing somewhere solid, it pointed out into space. And suddenly, we had no idea where we were headed anymore.

We mutually decided to take a break and think about our overall strategy. And then life happened, and we never picked it back up.

---

## Lessons and Takeaways

### Focus

A common theme throughout our story was the desire to start over and build from scratch. While this is necessary in some cases, especially when iterating to find product-market fit, it needs to be balanced with a healthy amount of focus and perseverance. We were too eager to pivot until we found "the perfect" idea, rather than focusing on the aspects that were working and digging deeper. Perfection doesn't exists in the startup space. It's messy, and it requires a deep focus, grind, and perseverance on a single niche.

### Sales Skills are Important

We _severely_ underestimated the importance of Sales in our venture. As a team of three software engineers and one product analyst, we were able to execute and build anything, but had very little knowledge or experience about how to sell it. This led to multiple situations where our product showed promise, but we were literally unable to position ourselves so we could start generating revenue, project future growth, or establish a long-term business plan. Don't underestimate the importance of Sales!

### Don't Avoid the "Less Fun" Parts

As a highly capable team of Software Engineers, we were excited about building. But only a small part of a startup is actually building the product. We were less excited about the necessary business development, sales, networking, and pitching that was required in order to succeed. It can be easy to think "if we build it, they'll come", but this couldn't be further from the truth. The willingness to dig in your heels and grind until you find a channel to run is required to succeed.

---

Everything looks worse in retrospect. In reality, I had an amazing time working with a great group of guys. We built some cool stuff, had a ton of fun, and learned a lot of lessons on the way.

Cheers to the next one!
