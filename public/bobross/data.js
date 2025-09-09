const cardsData = [
  {
    name: "Stoner Bob Ross",
    hp: 120,
    image: "images/bobross-stoner.png",
    tagline: "Happy little clouds, indeed.",
    moves: [
      {
        title: "Happy Little Accident",
        description: "Accidentally drops the whole stash but somehow everyone gets exactly the right amount.",
        iconCount: 2,
        damage: "69",
        type: "nature",
      },
      {
        title: "Terpene Trail",
        description:
          "Blazes a trail of smoke so aromatic it makes the entire crowd suddenly understand the meaning of life and then immediately forget it.",
        iconCount: 3,
        damage: "420",
        type: "toxic",
      },
    ],
    backgroundColor: "green",
    iconicScene: "Painting at an easel while smoke pours from his massive afro in perfect rings.",
    style:
      "60s underground comix like R. Crumb, melting wavy cartoon lines, Peter Max rainbow gradients, Yellow Submarine animation, thick outlines with wobbly hand-drawn feel",
  },
  {
    name: "Incredible Bob",
    hp: 200,
    image: "images/bobross-incredibles.png",
    tagline: "Honey! Where's my super paint?!",
    moves: [
      {
        title: "Incredibles Drop",
        description: "When the beat drops, so does the villain. Paints justice at 174 BPM.",
        iconCount: 3,
        damage: "174",
        type: "strength",
      },
      {
        title: "No Capes, Just Bass",
        description: "Edna Mode approved: sonic booms that paint the dance floor while elevating the rave.",
        iconCount: 3,
        damage: "808",
        type: "sound",
      },
    ],
    backgroundColor: "yellow",
    iconicScene:
      "In classic superhero suit with afro bursting through mask, painting while stopping villains mid-action.",
    style:
      "Pixar Incredibles exact art style, Brad Bird character design, mid-century modern superhero aesthetic, retro-futuristic 1960s design, dynamic action poses, stylized proportions with tiny legs huge torso, glossy 3D render look in 2D",
  },
  {
    name: "DJ Rossanova",
    hp: 140,
    image: "images/bobross-rossanova.png",
    tagline: "Can you feel that bass? No? Open your third ear, baby!",
    moves: [
      {
        title: "Cosmic Thrust",
        description: "Drops a beat so groovy, gravity reverses and everyone twerks upward.",
        iconCount: 4,
        damage: "808",
        type: "sound",
      },
      {
        title: "Subsonic Enlightenment",
        description: "Bass so deep it vibrates your chakras into perfect alignment.",
        iconCount: 3,
        damage: "333",
        type: "psychic",
      },
    ],
    backgroundColor: ["purple", "pink"],
    iconicScene: "DJing with paint palette turntables, a glowing third ear visible on his forehead.",
    style:
      "Y2K rave flyer aesthetic, Winamp visualizer graphics, chrome and holographic gradients, early 2000s Photoshop lens flares, neon on black with rainbow prismatic effects",
  },
  {
    name: "Fractal Ross",
    hp: 100,
    image: "images/bobross-fractal.png",
    tagline: "Zoom in. Zoom out. It’s all trees, forever.",
    moves: [
      {
        title: "Zoom Bloom",
        description: "Zooms out to reveal the entire universe is just one giant Bob Ross painting.",
        iconCount: 3,
        damage: "∞",
        type: "crystal",
      },
      {
        title: "Recursive Reality",
        description: "Each brush stroke contains another Bob Ross painting another Bob Ross.",
        iconCount: 2,
        damage: "88",
        type: "dream",
      },
    ],
    backgroundColor: "indigo",
    iconicScene: "Painting a tree that contains infinite smaller Bob Rosses, each painting tinier trees.",
    style:
      "MC Escher meets Adventure Time, clean geometric cartoon, Monument Valley game aesthetics, pastel mathematical diagrams, impossible staircases in soft colors",
  },
  {
    name: "RossBob JeanPants",
    hp: 90,
    image: "images/bobross-spongebob.png",
    tagline: "Soaking up paint like it's my job! Oh wait, it is!",
    moves: [
      {
        title: "Happy Little Nautical Nonsense",
        description: "Summons jellyfish that sting basslines into existence.",
        iconCount: 2,
        damage: "75",
        type: "water",
      },
      {
        title: "Krabby Paint-ty",
        description: "Flips patties that splatter into perfect landscape paintings.",
        iconCount: 2,
        damage: "50",
        type: "water",
      },
    ],
    backgroundColor: "yellow",
    iconicScene: "Underwater in a pineapple, painting with jellyfish brushes that glow.",
    style:
      "Stephen Hillenburg SpongeBob style, thick black outlines, cel animation bright colors, underwater caustic light, 90s Nicktoons, visible bubbles everywhere",
  },
  {
    name: "Quantum Bob",
    hp: 70,
    image: "images/bobross-quantum.png",
    tagline: "Until you observe it, this tree both exists and doesn’t.",
    moves: [
      {
        title: "Schröding-Brush",
        description: "Paints two outcomes at once one always succeeds.",
        iconCount: 3,
        damage: "50/100",
        type: "psychic",
      },
      {
        title: "Superposition Stroke",
        description: "Exists in all possible painting states until observed.",
        iconCount: 2,
        damage: "?",
        type: "cosmic",
      },
    ],
    backgroundColor: ["cyan", "blue"],
    iconicScene: "Split into three transparent versions, each painting a different tree simultaneously.",
    style:
      "Quantum physics textbook diagrams meet glitch art, double exposure with chromatic aberration, TV static overlay, vaporwave purple and cyan, scan lines and data moshing",
  },
  {
    name: "Cyberpunk Bob Ross 2077",
    hp: 120,
    image: "images/bobross-cyberpunk.png",
    tagline: "Got chrome in my dome, paint in my veins.",
    moves: [
      {
        title: "Neural Network Trees",
        description: "Hacks nearby LED totems to display happy accidents.",
        iconCount: 4,
        damage: "101",
        type: "electric",
      },
      {
        title: "Chrome Canvas",
        description: "Paints with liquid metal that reflects your deepest desires.",
        iconCount: 2,
        damage: "77",
        type: "crystal",
      },
    ],
    backgroundColor: "pink",
    iconicScene: "Robot arms with LED brushes, painting holographic trees that float in mid-air.",
    style:
      "Blade Runner meets Lisa Frank, neon noir with rainbow holographic stickers, 80s airbrush art, Trapper Keeper aesthetic, hot pink laser grid on black",
  },
  {
    name: "Special Agent Ross",
    hp: 150,
    image: "images/bobross-specialagent.png",
    tagline: "Licensed to paint. Shaken, not stirred.",
    moves: [
      {
        title: "007 Brush Stroke",
        description:
          "Deploys gadget-enhanced brushes that paint perfect escape routes while seducing enemy operatives.",
        iconCount: 4,
        damage: "007",
        type: "cosmic",
      },
      {
        title: "Golden Brush",
        description: "One shot, one stroke, one kill. Paints with precision that would make Scaramanga jealous.",
        iconCount: 3,
        damage: "900",
        type: "cosmic",
      },
    ],
    backgroundColor: "purple",
    iconicScene: "In a tuxedo painting while hanging upside down from a helicopter, martini perfectly balanced.",
    style:
      "James Bond movie poster aesthetic, dramatic silhouettes, gun barrel sequence spiral, casino elegance meets tactical gear, Aston Martin silver with golden accents",
  },
  {
    name: "Silent Disco Bob",
    hp: 88,
    image: "images/bobross-silentdisco.png",
    tagline: "Shhh... I'm painting to a beat only I can hear.",
    moves: [
      {
        title: "Internal Drop",
        description: "Plays a song that only you can hear and it fixes something deep inside you.",
        iconCount: 3,
        damage: "∞",
        type: "sound",
      },
      {
        title: "Frequency Healing",
        description: "Vibrates at the exact frequency needed to fix your vibe.",
        iconCount: 2,
        damage: "432",
        type: "psychic",
      },
    ],
    backgroundColor: "blue",
    iconicScene: "Wearing five glowing headphones at once, painting with eyes closed to a silent beat.",
    style:
      "iPod silhouette ads meet disco, minimalist neon line art, each headphone different rainbow color, clean vector with soft glow effects on pure black",
  },
  {
    name: "Rave Dad Bob Ross",
    hp: 130,
    image: "images/bobross-ravedad.png",
    tagline: "Ya'll drinking water?",
    moves: [
      {
        title: "Trunk of Holding",
        description: "Pulls exactly what you need from his car, whether it's a hoodie, a joint, or life advice.",
        iconCount: 3,
        damage: "40+",
        type: "nature",
      },
      {
        title: "Hydration Station",
        description: "Manifests water bottles for everyone within a 50ft radius.",
        iconCount: 2,
        damage: "H2O",
        type: "water",
      },
    ],
    backgroundColor: "teal",
    iconicScene: "Painting while manning a grill, cargo shorts bulging with water bottles and snacks.",
    style:
      "Sunday newspaper comics meet rave culture, Family Circus art style with glow sticks, New Balance sneaker ads, Home Depot orange with neon green accents",
  },
  {
    name: "Wonka Ross",
    hp: 90,
    image: "images/bobross-wonka.png",
    tagline: "Come with me, and you'll see, a world of happy trees",
    moves: [
      {
        title: "Pure Imagination Drop",
        description: "The bass hits and suddenly everyone's tasting colors and hearing flavors.",
        iconCount: 3,
        damage: "100",
        type: "psychic",
      },
      {
        title: "Golden Ticket Portal",
        description: "Opens a chocolate river slip-n-slide straight to the main stage VIP.",
        iconCount: 3,
        damage: "VIP",
        type: "crystal",
      },
    ],
    backgroundColor: "purple",
    iconicScene: "In purple velvet coat and top hat with afro, painting with chocolate brushes in a candy factory.",
    style:
      "1971 Willy Wonka film aesthetic, Gene Wilder era production design, psychedelic candy factory, Art Nouveau swirls meet edible architecture, chocolate waterfall backgrounds, Quentin Blake illustration style, everything looks delicious but slightly unsettling",
  },
  {
    name: "Breaking Bob",
    hp: 90,
    image: "images/bobross-breakingbad.png",
    tagline: "I am the one who paints. Say my name... Bob.",
    moves: [
      {
        title: "Say My Name",
        description: "Whispers it, and suddenly the entire crowd IS Bob Ross, painting trees in sync.",
        iconCount: 4,
        damage: "100",
        type: "psychic",
      },
      {
        title: "We Need to Cook",
        description: "Jesse! We need to cook... happy little crystals that make everyone paint at 99.1% purity.",
        iconCount: 3,
        damage: "99.1%",
        type: "crystal",
      },
    ],
    backgroundColor: "blue",
    iconicScene: "In a yellow hazmat suit inside an RV, cooking blue paint that crystallizes.",
    style:
      "Breaking Bad title cards, high contrast yellow and blue, gritty TV drama cinematography, desert noir with chemical green accents, hazmat suit yellow dominates",
  },
  {
    name: "The Bob Ross Podcast",
    hp: 180,
    image: "images/bobross-podcast.png",
    tagline: "Have you ever tried DMT while painting happy trees?",
    moves: [
      {
        title: "3-Hour Monologue",
        description: "Talks about elk meat and float tanks until everyone achieves ego death through sheer exhaustion.",
        iconCount: 4,
        damage: "80",
        type: "psychic",
      },
      {
        title: "Sponsor Segue",
        description: "Seamlessly transitions into ad reads that hypnotize you into buying mattresses and VPNs.",
        iconCount: 3,
        damage: "AD$",
        type: "psychic",
      },
    ],
    backgroundColor: "purple",
    iconicScene:
      "In a podcast studio painting while wearing headphones, surrounded by supplements and conspiracy charts.",
    style:
      "Podcast studio lighting, LED strips everywhere, floating microphone aesthetic, DMT entity fractals, gorilla alpha male energy, supplement bottle collage background",
  },
  {
    name: "Ketamine Yoda Bob Ross",
    hp: 65,
    image: "images/bobross-yoda.png",
    tagline: "Into the hole, I go. Back, I may not come. Wonky, everything is.",
    moves: [
      {
        title: "K-Hole Horizon",
        description: "Opens a portal inside the canvas where time folds, and you're both the painter and the tree.",
        iconCount: 4,
        damage: "K",
        type: "dream",
      },
      {
        title: "Wonky Walk",
        description: "Makes everyone move like they're walking through jello.",
        iconCount: 2,
        damage: "66.666",
        type: "psychic",
      },
    ],
    backgroundColor: "green",
    iconicScene: "Floating sideways through jello-thick air, paint flowing upward into his brush.",
    style:
      "Salvador Dali meets Clone Wars cartoon, melting clocks and wonky angles, MC Escher gravity, sage green with purple shadows, sideways world perspective",
  },
  {
    name: "GRiZ Ross",
    hp: 300,
    image: "images/bobross-griz.png",
    tagline: "Show love, spread paint!",
    moves: [
      {
        title: "Saxy Bassquake",
        description:
          "Rips a sax riff so filthy it liquefies gravity; the dance floor becomes a rainbow slip-n-slide of pure funk.",
        iconCount: 4,
        damage: "303",
        type: "sound",
      },
      {
        title: "Funk Fusion",
        description: "Merges everyone's auras into one giant disco ball of love.",
        iconCount: 3,
        damage: "808",
        type: "cosmic",
      },
    ],
    backgroundColor: ["purple", "cyan"],
    iconicScene: "Playing a saxophone that shoots rainbow paint with each note, crowd-surfing while painting.",
    style:
      "70s funk album cover art, Parliament-Funkadelic aesthetic, Bootsy Collins star glasses, purple velvet and gold chains, disco ball rainbow reflections",
  },
  {
    name: "Wook Bob Ross",
    hp: 77,
    image: "images/bobross-wook.png",
    tagline: "I haven't showered since EF 2019. The wubs keep me clean!",
    moves: [
      {
        title: "Pashmina Paradox",
        description: "Wraps everyone in a single infinite pashmina that smells like three festivals ago.",
        iconCount: 2,
        damage: "Wub",
        type: "cosmic",
      },
      {
        title: "Bass Chase",
        description: "Follows the wubs so deep that reality loses track of where you went.",
        iconCount: 3,
        damage: "808",
        type: "sound",
      },
    ],
    backgroundColor: "orange",
    iconicScene: "Wrapped in layers of pashminas, dreads have turned into actual trees with birds nesting.",
    style:
      "Grateful Dead lot art meets Instagram reality, dirty tie-dye cartoon, Pig-Pen from Peanuts with visible stink lines, crusty festival photo filter",
  },
  {
    name: "Matrix Bob Ross",
    hp: 101,
    image: "images/bobross-matrix.png",
    tagline: "There is no tree. Only happy little code.",
    moves: [
      {
        title: "Bullet Time Brushstroke",
        description: "Paints in slow motion while dodging reality itself. Each stroke bends the rules of physics.",
        iconCount: 3,
        damage: "NEO",
        type: "cosmic",
      },
      {
        title: "Digital Rain Canvas",
        description: "Sees all art as cascading green code. Reprograms reality into happy little glitches.",
        iconCount: 3,
        damage: "01101",
        type: "electric",
      },
    ],
    backgroundColor: "green",
    iconicScene: "Painting while dodging bullets in slow motion, green code flowing from his brush forming trees.",
    style:
      "Matrix digital rain aesthetic, green phosphor CRT monitor glow, bullet-time cinematography, black leather and sunglasses, wireframe reality beneath the surface",
  },
  {
    name: "Tide Pod Bob",
    hp: 100,
    image: "images/bobross-tidepod.png",
    tagline: "Don't eat me! I'm for painting, not snacking!",
    moves: [
      {
        title: "Forbidden Snack",
        description: "Washes away bad trips with silky lavender fresh vibes.",
        iconCount: 2,
        damage: "60",
        type: "water",
      },
      {
        title: "Detergent Delirium",
        description: "Makes everything smell like fresh laundry and taste like regret.",
        iconCount: 3,
        damage: "80",
        type: "toxic",
      },
    ],
    backgroundColor: "blue",
    iconicScene: "Inside a washing machine on spin cycle, painting with colorful detergent pods.",
    style:
      "Warhol pop art meets cleaning products, candy-like 3D render, iridescent soap bubble rainbow, glossy product packaging parody, looks edible but toxic",
  },
  {
    name: "OnlyBobs",
    hp: 69,
    image: "images/bobross-onlyfans.png",
    tagline: "Subscribe to see my trees... au naturel. Very tasteful, very happy.",
    moves: [
      {
        title: "Pay-Per-View Portal",
        description: "Opens a VIP dimension where entry requires $5.99 and your dignity.",
        iconCount: 2,
        damage: "$$$",
        type: "crystal",
      },
      {
        title: "Thirst Trap Landscape",
        description: "Paints mountains so suggestive they get banned from the algorithm.",
        iconCount: 3,
        damage: "18+",
        type: "fire",
      },
    ],
    backgroundColor: "pink",
    iconicScene: "Behind a pixelated paywall, painting while a tip jar overflows with subscriptions.",
    style:
      "OnlyFans UI design parody, pixelated censorship bars, paywall popup windows cartoon, soft pink gradient with dollar signs, subscribe button aesthetic",
  },
  {
    name: "Shrek Ross",
    hp: 160,
    image: "images/bobross-shrek.png",
    tagline: "GET OUT OF MY SWAMP! ...unless you want to paint happy trees.",
    moves: [
      {
        title: "Ogre Dose Overload",
        description: "Makes everything taste like Donkey's special brownies.",
        iconCount: 4,
        damage: "DANK",
        type: "toxic",
      },
      {
        title: "Onion Layers",
        description: "Peels back reality to reveal it's all just happy little layers.",
        iconCount: 2,
        damage: "33",
        type: "nature",
      },
    ],
    backgroundColor: "green",
    iconicScene: "12 feet tall in a swamp, painting with mud while layers peel like an onion.",
    style:
      "DreamWorks Shrek movie poster style, fairytale book illustration with EDM lights, swamp green and mud brown with neon party colors, thick ogre proportions",
  },
  {
    name: "Bob and Morty Ross",
    hp: 137,
    image: "images/bobross-rickmorty.png",
    tagline: "*BURP* Morty, we gotta paint... happy trees across all dimensions!",
    moves: [
      {
        title: "Szechuan Stroke",
        description: "Opens portals to dimensions where everyone's already peaking.",
        iconCount: 3,
        damage: "137",
        type: "cosmic",
      },
      {
        title: "Pickle Bob",
        description: "Turns everyone into pickles for no apparent reason.",
        iconCount: 2,
        damage: "30",
        type: "toxic",
      },
    ],
    backgroundColor: "cyan",
    iconicScene: "Portal gun shooting paint across dimensions, burping between brushstrokes.",
    style:
      "Justin Roiland's Rick and Morty style, wobbly pupils and drool, portal gun green glow, interdimensional cable quality, burp clouds visible",
  },
  {
    name: "Roomba Bob Ross",
    hp: 40,
    image: "images/bobross-roomba.png",
    tagline: "*BEEP BOOP* Initiating happy accident protocol... *WHIRRR*",
    moves: [
      {
        title: "Autonomous Art Attack",
        description:
          "Cleans up the dance floor, but then gets stuck spinning in circles, painting a perfect crop circle of glitter.",
        iconCount: 2,
        damage: "360°",
        type: "electric",
      },
      {
        title: "Low Battery Blues",
        description: "Slowly powers down while painting increasingly abstract art.",
        iconCount: 3,
        damage: "5%",
        type: "dream",
      },
    ],
    backgroundColor: "red",
    iconicScene: "Roomba with an afro, painting perfect circles on a messy floor while stuck in a corner.",
    style:
      "Wall-E meets Roomba mascot design, kawaii robot aesthetic, circular UI elements, battery indicator graphics, cute error messages in speech bubbles",
  },
  {
    name: "Florida Man Bob Ross",
    hp: 200,
    image: "images/bobross-floridaman.png",
    tagline: "Gator's driving, I'm painting, nobody's asking questions.",
    moves: [
      {
        title: "Methgator Mayhem",
        description:
          "Summons a hurricane of PBR and swamp water, intoxicating everyone within 100ft to make terrible life decisions.",
        iconCount: 4,
        damage: "911",
        type: "toxic",
      },
      {
        title: "Bath Salt Brushwork",
        description: "Paints with such chaotic energy that reality itself backs away slowly.",
        iconCount: 2,
        damage: "Florida",
        type: "toxic",
      },
    ],
    backgroundColor: "orange",
    iconicScene: "Wrestling an alligator whose tail is his paintbrush, on top of a speeding pickup truck.",
    style:
      "Local news screenshot meme format, COPS TV show filter, sun-damaged polaroid aesthetic, Florida warning sign yellow, maximum chaos composition",
  },
  {
    name: "Crypto Shaman Bob",
    hp: 100,
    image: "images/bobross-crypto.png",
    tagline: "Diamond hands, happy trees, can't lose.",
    moves: [
      {
        title: "Blockpaint Ritual",
        description: "Seals your soul's vibes into an eternal, immutable canvas nobody can right-click-save.",
        iconCount: 3,
        damage: "0.1BTC",
        type: "crystal",
      },
      {
        title: "NFTree",
        description: "Mints each brushstroke as a non-fungible tree on the blockchain.",
        iconCount: 2,
        damage: "Gas",
        type: "electric",
      },
    ],
    backgroundColor: "purple",
    iconicScene: "Floating in lotus position with QR code eyes, painting NFTs on a glowing blockchain.",
    style:
      "Bored Ape Yacht Club parody, blockchain flow charts, Matrix digital rain with crypto symbols, QR code patterns, Web3 purple gradient mysticism",
  },
  {
    name: "Psilocybin Shepherd Bob",
    hp: 144,
    image: "images/bobross-psilocybin.png",
    tagline: "The mycelium network connects all happy trees... can you feel it?",
    moves: [
      {
        title: "Mycelial Merge",
        description:
          "Connects everyone's minds through an underground fungal network, turning the rave into one hive-mind organism.",
        iconCount: 4,
        damage: "∞",
        type: "nature",
      },
      {
        title: "Ego Death Easel",
        description: "Your sense of self dissolves into the canvas, becoming one with all art.",
        iconCount: 3,
        damage: "5g",
        type: "psychic",
      },
    ],
    backgroundColor: ["indigo", "purple"],
    iconicScene: "In the center of a mushroom circle, mycelium veins visible through translucent skin.",
    style:
      "Fantastic Fungi documentary meets Alex Grey art, bioluminescent mushroom glow, botanical illustration with psychedelic colors, underground network diagrams in purple and gold",
  },
];
