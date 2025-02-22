import { PlanetType } from './analytics';

interface PlanetInfo {
    title: string;
    description: string;
    traits: string[];
    nurture: string;
    emoji: string;
}

export const planetData: Record<PlanetType, PlanetInfo> = {

    "sun": {
        "title": "Chosen Family Anchor",
        "description": "Your forever person—whether blood-related or forged by time. They witness your growth, celebrate your wins, and sit with you in darkness without judgment.",
        "traits": ["Lifelong", "Sacred", "Unconditional"],
        "nurture": "Protect this bond fiercely. Prioritize quality time, even when life gets busy.",
        "emoji": "☀️"
    },
    "mercury": {
        "title": "Fast-Paced Spark",
        "description": "A whirlwind connection that exploded into your life recently. Every conversation crackles with energy—you're addicted to their spontaneity and fresh perspectives.",
        "traits": ["Electric", "Unscripted", "Growth-Inducing"],
        "nurture": "Avoid forcing depth too soon. Let curiosity drive the bond.",
        "emoji": "💫"
    },
    "venus": {
        "title": "Soul Mirror",
        "description": "They reflect your deepest self. Sharing fears, secrets, and dreams feels as natural as breathing. Vulnerability is your language.",
        "traits": ["Intuitive", "Healing", "Safe"],
        "nurture": "Protect this space fiercely—avoid one-sided emotional labor.",
        "emoji": "💖"
    },
    "earth": {
        "title": "Home Base",
        "description": "The friend who knows your coffee order, childhood traumas, and weirdest quirks. Distance or silence can't erode this bond—it's your psychological safe zone.",
        "traits": ["Omnipresent", "Reciprocal", "Non-Judgmental"],
        "nurture": "Update them on your evolution—don't let assumptions harden.",
        "emoji": "🌍"
    },
    "mars": {
        "title": "Thrill Catalyst",
        "description": "Your 'yes' person. They push you to skydive, start that podcast, or text your crush. Together, you redefine limits—but burnout lurks if unchecked.",
        "traits": ["Audacious", "Competitive", "Impulsive"],
        "nurture": "Balance adrenaline with grounding check-ins.",
        "emoji": "🔥"
    },
    "jupiter": {
        "title": "Social Glue",
        "description": "The friend who turns coffee runs into parties. They introduce you to everyone, host legendary dinners, and make strangers feel like old friends.",
        "traits": ["Expansive", "Generous", "Energizing"],
        "nurture": "Nurture one-on-one moments to avoid surface-level traps.",
        "emoji": "⚡"
    },
    "saturn": {
        "title": "Context Companion",
        "description": "Your work wife/gym buddy/class ally. The bond thrives in a specific setting—effortless rapport exists, but it's rarely nurtured beyond shared spaces.",
        "traits": ["Convenient", "Low-Stakes", "Supportive"],
        "nurture": "Graduate to personal topics to test deeper potential.",
        "emoji": "🪐"
    },
    "uranus": {
        "title": "Chaos Maven",
        "description": "A friendship ruled by absurdity. You bond over conspiracy theories, 3AM clown makeup tutorials, or inventing fake personas at Target. Norms need not apply.",
        "traits": ["Unhinged", "Imaginative", "Unapologetic"],
        "nurture": "Lean into the weird—but set boundaries if chaos becomes overwhelming.",
        "emoji": "⚛️"
    },
    "neptune": {
        "title": "Ethereal Kindred",
        "description": "A soul-tether that defies geography. You reunite after months and dive into existential debates like no time passed. Presence isn't needed—your energies just align.",
        "traits": ["Transcendent", "Philosophical", "Episodic"],
        "nurture": "Send voice notes reacting to their niche Instagram stories.",
        "emoji": "🌊"
    },
    "pluto": {
        "title": "Frozen Flame",
        "description": "A friendship preserved in amber. You've outgrown each other, but the memories ache with sweetness. They shaped you, and that version of you still loves them.",
        "traits": ["Nostalgic", "Bittersweet", "Transformative"],
        "nurture": "Honor the past, but don't cling to revived closeness.",
        "emoji": "❄️"
    },
    "comet": {
        "title": "Cyclical Spark",
        "description": "A relationship that reignites in intense bursts—a summer of daily calls, then radio silence for a year. The connection never dies, but it's never consistent.",
        "traits": ["Fluctuating", "Nostalgic", "Passionate"],
        "nurture": "Enjoy the highs without expecting permanence.",
        "emoji": "☄️"
    },
    "moon": {
        "title": "Quiet Gravitas",
        "description": "A friend who needs no maintenance. You share parallel lives, exchanging memes or cryptic texts every few months. Their existence alone comforts you.",
        "traits": ["Autonomous", "Effortless", "Centering"],
        "nurture": "A 'this made me think of you' ping holds immense power here.",
        "emoji": "🌙"
    },
    "cluster": {
        "title": "Collective Euphoria",
        "description": "Your ride-or-die squad. Inside jokes, group vacations, and shared griefs bind you. Individually, you might drift—but together, you're unstoppable.",
        "traits": ["Synergistic", "Ritualistic", "Loyal"],
        "nurture": "Plan annual traditions to counteract member turnover.",
        "emoji": "🌌"
    },
    "satellite": {
        "title": "Ambient Acquaintance",
        "description": "The barista who remembers your order, your LinkedIn congratulator, your dog-walk small-talk buddy. Pleasant but plasticky—no desire to escalate.",
        "traits": ["Disposable", "Fleeting", "Non-Intrusive"],
        "nurture": "A smile suffices—don't overinvest.",
        "emoji": "🛰️"
    },
    "forge": {
        "title": "Evolution Architect",
        "description": "A mentor, accountability partner, or friend who challenges your limits. They don't coddle—they push you to grow, even when it stings.",
        "traits": ["Transformative", "Direct", "Visionary"],
        "nurture": "Stay open to hard truths—but don't tolerate toxicity disguised as 'help'.",
        "emoji": "⚒️"
    },
    "niche": {
        "title": "Passion Twin",
        "description": "A bond built on hyper-specific obsessions—modular synths, 14th-century tapestries, competitive axe-throwing. Your connection exists in its own universe.",
        "traits": ["Geeky", "Immersive", "Narrow"],
        "nurture": "Plan events around your niche—don't force outside interests.",
        "emoji": "🎯"
    },
    "static": {
        "title": "Frienemy Voltage",
        "description": "A relationship laced with rivalry, jealousy, or unresolved tension. You love them, hate them, and tolerate them—often in the same hour.",
        "traits": ["Volatile", "Competitive", "Unsustainable"],
        "nurture": "Weigh their emotional ROI—sometimes cutting cords is self-care.",
        "emoji": "⚡"
    },
    "dust": {
        "title": "Background Radiation",
        "description": "People you tolerate but don't truly like: obligatory family friends, your partner's annoying coworker, that clingy neighbor. Zero interest in deepening ties.",
        "traits": ["Shallow", "Transactional", "Draining"],
        "nurture": "Politeness is a shield—keep interactions brief and non-committal.",
        "emoji": "💨"
    }
}
;
export const rankings ={
    "sun": {
      "emotionalDepth": "high",
      "interactionFrequency": "high",
      "spontaneity": "low",
      "contextDependence": "low",
      "growthChallenge": "average"
    },
    "mercury": {
      "emotionalDepth": "average",
      "interactionFrequency": "average",
      "spontaneity": "high",
      "contextDependence": "low",
      "growthChallenge": "average"
    },
    "venus": {
      "emotionalDepth": "high",
      "interactionFrequency": "average",
      "spontaneity": "average",
      "contextDependence": "low",
      "growthChallenge": "low"
    },
    "earth": {
      "emotionalDepth": "high",
      "interactionFrequency": "high",
      "spontaneity": "low",
      "contextDependence": "low",
      "growthChallenge": "low"
    },
    "mars": {
      "emotionalDepth": "average",
      "interactionFrequency": "average",
      "spontaneity": "high",
      "contextDependence": "low",
      "growthChallenge": "high"
    },
    "jupiter": {
      "emotionalDepth": "low",
      "interactionFrequency": "high",
      "spontaneity": "average",
      "contextDependence": "high",
      "growthChallenge": "low"
    },
    "saturn": {
      "emotionalDepth": "low",
      "interactionFrequency": "high",
      "spontaneity": "low",
      "contextDependence": "high",
      "growthChallenge": "low"
    },
    "uranus": {
      "emotionalDepth": "average",
      "interactionFrequency": "average",
      "spontaneity": "high",
      "contextDependence": "low",
      "growthChallenge": "average"
    },
    "neptune": {
      "emotionalDepth": "high",
      "interactionFrequency": "low",
      "spontaneity": "low",
      "contextDependence": "low",
      "growthChallenge": "low"
    },
    "pluto": {
      "emotionalDepth": "high",
      "interactionFrequency": "low",
      "spontaneity": "low",
      "contextDependence": "low",
      "growthChallenge": "average"
    },
    "comet": {
      "emotionalDepth": "average",
      "interactionFrequency": "low",
      "spontaneity": "high",
      "contextDependence": "low",
      "growthChallenge": "average"
    },
    "moon": {
      "emotionalDepth": "high",
      "interactionFrequency": "low",
      "spontaneity": "low",
      "contextDependence": "low",
      "growthChallenge": "low"
    },
    "cluster": {
      "emotionalDepth": "average",
      "interactionFrequency": "high",
      "spontaneity": "average",
      "contextDependence": "high",
      "growthChallenge": "low"
    },
    "satellite": {
      "emotionalDepth": "low",
      "interactionFrequency": "average",
      "spontaneity": "average",
      "contextDependence": "high",
      "growthChallenge": "low"
    },
    "forge": {
      "emotionalDepth": "high",
      "interactionFrequency": "average",
      "spontaneity": "average",
      "contextDependence": "low",
      "growthChallenge": "high"
    },
    "niche": {
      "emotionalDepth": "average",
      "interactionFrequency": "average",
      "spontaneity": "average",
      "contextDependence": "high",
      "growthChallenge": "low"
    },
    "static": {
      "emotionalDepth": "high",
      "interactionFrequency": "average",
      "spontaneity": "high",
      "contextDependence": "low",
      "growthChallenge": "low"
    },
    "dust": {
      "emotionalDepth": "low",
      "interactionFrequency": "low",
      "spontaneity": "low",
      "contextDependence": "high",
      "growthChallenge": "low"
    }
  }
  

// Update the type definition to allow optional properties
export const combinations: Record<PlanetType, Partial<Record<PlanetType, { title: string; description: string; tip: string }>>> = {
    sun: {
        sun: {
            title: "A Radiant Bond ☀️☀️",
            description: "This friendship is built on mutual warmth, reliability, and an effortless connection. Both sides see each other as a constant presence, someone they can always count on for support and celebration. The challenge is making sure the relationship doesn't become stagnant—there's so much trust that it's easy to take each other for granted.",
            tip: "Be intentional about deepening the friendship. Check in even when things are going well, and find ways to keep inspiring each other."
        },
        moon: {
            title: "Cosmic Balance ☀️🌙",
            description: "One side sees this as an energizing force, while the other provides quiet reflection and emotional depth. This creates a friendship that thrives on contrast—one brings excitement, the other brings perspective. Sometimes, differences in energy levels can cause friction, but when balanced, it results in a deep and harmonious connection.",
            tip: "Respect each other's natural rhythms. Find activities that allow for both lively conversation and meaningful silence."
        },
        venus: {
            title: "Warm Embrace ☀️💖",
            description: "One person feels like a source of joy and motivation, while the other offers deep emotional support and care. This friendship flourishes when both sides appreciate what the other brings—enthusiasm meets empathy, adventure meets understanding. The challenge is ensuring that one side doesn't feel emotionally drained while the other doesn't feel unheard.",
            tip: "Check in on emotional balance. Celebrate the fun moments, but also make space for honest conversations."
        },
        mercury: {
            "title": "Dynamic Duo ☀️💫",
            "description": "This friendship thrives on fast-paced conversations, shared curiosity, and a natural ability to keep up with each other's thoughts. One side might bring more stability, while the other keeps things fresh with new ideas. The risk? Burning out or getting distracted by too many directions.",
            "tip": "Make time for follow-through. Excitement is great, but deepening the friendship requires moments of consistency too."
        },
        mars: {
            "title": "Power Pair ☀️🔥",
            "description": "A friendship full of energy, movement, and shared ambition. Whether it's pushing each other to be better, taking on challenges together, or simply hyping each other up, this bond is built on action. However, differences in approach can sometimes lead to frustration—one might want to slow down when the other is ready to charge ahead.",
            "tip": "Use your motivation for each other wisely. Support different approaches rather than competing for control."
        },
        jupiter: {
            "title": "Expansive Joy ☀️🌟",
            "description": "A friendship that feels limitless, full of big dreams and big laughter. One side might push for new experiences, while the other sees the potential in everything. The challenge is making sure these grand ideas turn into real moments rather than just endless plans.",
            "tip": "Take action on shared goals. Whether it's a trip, a project, or a tradition, make sure your dreams don't just stay as ideas."
        },
        saturn: {
            "title": "Timeless Bond ☀️⭐",
            "description": "One side brings steady warmth, while the other values stability and consistency. This friendship feels solid and unshakable, even if there are long gaps in communication. The challenge is that stability can sometimes feel like distance—one side might crave more excitement, while the other prefers to keep things predictable.",
            "tip": "Balance familiarity with new experiences. A friendship that lasts doesn't have to stay the same forever."
        },
        uranus: {
            "title": "Unexpected Sparks ☀️🌀",
            "description": "A connection that thrives on unpredictability. One side sees the friendship as a steady presence, while the other keeps it fresh with surprises and unconventional ideas. This keeps things exciting but can sometimes feel ungrounded if expectations aren't clear.",
            "tip": "Embrace spontaneity but set some anchors. Reliable check-ins or traditions can keep things from feeling too chaotic."
        },
        neptune: {
            "title": "Dream Weavers ☀️🌊",
            "description": "A friendship built on inspiration and imagination. One side brings clarity and direction, while the other sees limitless possibilities. This makes for a deeply creative bond, but it can sometimes be frustrating if one person is more practical while the other stays lost in ideas.",
            "tip": "Encourage dreams but bring them into reality. Support each other's creative or personal projects in tangible ways."
        },
        pluto: {
            "title": "Eclipsed Connection ☀️🌑",
            "description": "A relationship that goes through phases of deep transformation. One side may see it as a bright, steady bond, while the other experiences intense personal changes. This can create moments of distance, but it also leads to growth when both sides remain patient.",
            "tip": "Be open about how the friendship is evolving. Not every shift means losing the connection—sometimes, it just means finding a new dynamic."
        },
        comet: {
            "title": "Cyclical Magic ☀️☄️",
            "description": "A friendship that comes and goes but always reignites with the same energy. One side sees it as a constant source of warmth, while the other appears in bursts of excitement before fading out again. This works well if both people accept the rhythm, but it can be frustrating if expectations aren't aligned.",
            "tip": "If the pattern works for both of you, embrace it. If not, be honest about what you need."
        },
        "cluster": {
            "title": "Galactic Radiance ☀️🌌",
            "description": "A friendship that thrives within a larger social group. One side sees the relationship as deeply personal, while the other views it as part of a bigger collective. This can create a dynamic where one person wants more one-on-one time, while the other is comfortable keeping things in a shared space.",
            "tip": "If one-on-one time matters, make it a priority. Friendships within groups can still have depth when nurtured individually."
        },
        "earth": {
            "title": "Roots & Rays ☀️🌍",
            "description": "A friendship that balances passion with stability. One side keeps things exciting, while the other ensures that the connection stays grounded. This creates a relationship that feels both steady and full of possibility, though it can lead to occasional friction if perspectives on pace differ.",
            "tip": "Appreciate the different speeds. The balance between adventure and steadiness is what makes this work."
        },
        "satellite": {
            "title": "Orbiting Trust ☀️🛰️",
            "description": "One side sees the friendship as a guiding light, while the other values the perspective they bring from a distance. This means trust is strong, but communication might not always be frequent. If both sides understand that the bond remains strong regardless of time apart, this works well—but if expectations differ, it can create feelings of neglect.",
            "tip": "Make time to check in. Even long-distance or low-maintenance friendships benefit from small moments of connection."
        }
    },
    moon: {

        "moon": {
            "title": "Lunar Symphony 🌙🌙",
            "description": "This friendship flows effortlessly, built on mutual understanding and unspoken connection. Both sides naturally tune into each other's emotions, making communication feel almost intuitive. However, the risk is that unspoken thoughts can turn into assumptions—it's important to voice feelings openly.",
            "tip": "Lean into your natural understanding, but remember to communicate openly to avoid unspoken tensions."
        },
        "venus": {
            "title": "Gentle Tides 🌙💖",
            "description": "One person nurtures with warmth, while the other brings calm and emotional depth. This friendship ebbs and flows naturally, full of care and subtle gestures of affection. The challenge is making sure emotions don't become overwhelming or one-sided.",
            "tip": "Make time for heartfelt conversations and small gestures of care—they mean the world to both of you."
        },
        "mercury": {
            "title": "Night Whispers 🌙💫",
            "description": "One side thrives on deep emotions, while the other brings quick wit and lively conversation. This creates a friendship where meaningful exchanges happen in quiet moments, often filled with insightful thoughts and late-night musings.",
            "tip": "Encourage each other's thoughts and creativity—your best ideas come in quiet moments together."
        },
        "mars": {
            "title": "Moonlit Adventures 🌙🔥",
            "description": "One person seeks excitement and action, while the other provides a thoughtful, steady presence. This friendship thrives on contrast—one pushes forward, while the other offers perspective and emotional grounding. The challenge is finding a pace that suits both sides.",
            "tip": "Balance action with reflection—Mars pushes you forward, while you provide perspective."
        },
        "jupiter": {
            "title": "Cosmic Growth 🌙🌟",
            "description": "One side expands possibilities and seeks adventure, while the other ensures emotional depth and meaning. Together, this creates a friendship that encourages both personal growth and shared experiences. However, too much idealism without grounding can make plans feel distant.",
            "tip": "Dream big together, but also ground each other's ideas in reality to make them happen."
        },
        "saturn": {
            "title": "Steady Reflection 🌙⭐",
            "description": "One side is deeply introspective, while the other provides structure and wisdom. This friendship is built on reliability and thoughtful counsel, offering a safe space for vulnerability and trust. The challenge is making sure it doesn't become too rigid or overly serious.",
            "tip": "Lean on each other for wisdom and stability—this friendship thrives when built on mutual trust."
        },
        "uranus": {
            "title": "Eccentric Harmony 🌙🌀",
            "description": "One side values deep emotions, while the other thrives on unpredictability and change. This makes for a dynamic, exciting friendship where comfort meets the unexpected. The challenge is making sure the bond remains stable despite shifts in energy.",
            "tip": "Let each other be unique—your differences make your bond exciting and refreshing."
        },
        "neptune": {
            "title": "Mystic Connection 🌙🌊",
            "description": "This friendship feels like a dream—full of intuition, creativity, and a deep emotional bond. Conversations flow naturally, often without the need for many words. The challenge is staying connected to reality, as both sides may get lost in their own worlds.",
            "tip": "Ground your connection with real-world actions—fantasy is beautiful, but memories are made in reality."
        },
        "pluto": {
            "title": "Hidden Depths 🌙🌑",
            "description": "A friendship rooted in transformation, deep trust, and silent understanding. One side may experience intense personal changes, while the other provides quiet support. This bond is powerful but requires patience, as emotions can run deep and unspoken.",
            "tip": "Don't be afraid to share your emotions fully—Pluto understands the depths of your heart."
        },
        "comet": {
            "title": "Phases of Wonder 🌙☄️",
            "description": "Like the moon's phases, this friendship experiences cycles of closeness and distance. Each reunion is filled with renewed energy and deep conversations. The challenge is trusting that distance doesn't mean disconnection.",
            "tip": "Appreciate the natural ebb and flow—distance never weakens your bond, it just makes reunions sweeter."
        },
        "cluster": {
            "title": "Celestial Ties 🌙🌌",
            "description": "One side finds comfort in deep personal connections, while the other enjoys being part of a larger shared space. This creates a friendship that blends emotional intimacy with social connection, though one person may occasionally crave more one-on-one time.",
            "tip": "Help the group stay connected by creating deep, personal moments within the collective dynamic."
        },
        "earth": {
            "title": "Grounded Dreams 🌙🌍",
            "description": "One side provides emotional depth, while the other offers stability and practicality. This makes for a supportive, trusting friendship where feelings are understood and actions are reliable. The challenge is making sure emotions don't become overwhelming for the more grounded side.",
            "tip": "Balance your emotions with action—Earth helps you stay present, while you remind them to feel deeply."
        },
        "satellite": {
            "title": "Orbiting Support 🌙🛰️",
            "description": "One side sees the friendship as a steady presence, while the other values the perspective they bring from a distance. This means trust is strong, but communication might not always be frequent. The key is knowing the bond remains intact even through space and time apart.",
            "tip": "Check in on each other even from a distance—your quiet support means more than words."
        }
    },
    venus: {
        "venus": {
            "title": "Kindred Hearts 💖💖",
            "description": "This friendship is full of love, warmth, and deep emotional connection. Both value closeness, affection, and mutual care, creating a bond that feels like home.",
            "tip": "Express your appreciation often—your bond thrives on love, support, and small acts of kindness."
        },
        "mercury": {
            "title": "Charming Chemistry 💖💫",
            "description": "One sees the friendship as deep and emotionally rich, while the other keeps things light, witty, and full of engaging conversation. The contrast keeps things interesting, balancing heart and mind.",
            "tip": "Keep the conversations flowing, but also make space for emotional depth—words are powerful, but feelings matter too."
        },
        "mars": {
            "title": "Magnetic Bond 💖🔥",
            "description": "One brings passion and adventure, the other brings warmth and emotional depth. Together, this friendship is an exciting push-and-pull, where different energies create a dynamic and fulfilling connection.",
            "tip": "Balance passion with patience—your energy together is electric, but remember to appreciate the quiet moments too."
        },
        "jupiter": {
            "title": "Joyful Expansion 💖🌟",
            "description": "One sees the friendship as an emotionally fulfilling connection, while the other thrives on shared experiences, big dreams, and an optimistic outlook. The mix of heart and adventure makes for an inspiring duo.",
            "tip": "Encourage each other's dreams, but also bring them to life through action—your optimism can move mountains."
        },
        "saturn": {
            "title": "Loyal Devotion 💖⭐",
            "description": "One values warmth and emotional connection, while the other sees the friendship as steady, reliable, and built on deep trust. What starts as different approaches turns into an unshakable bond.",
            "tip": "Cherish reliability, and remind each other to enjoy life's beauty—you balance each other perfectly."
        },
        "uranus": {
            "title": "Unconventional Harmony 💖🌀",
            "description": "One appreciates deep emotional bonds, while the other thrives on unpredictability and freedom. This friendship is ever-changing and full of surprises, yet somehow, it always works.",
            "tip": "Embrace the unexpected—your best memories come from breaking routine and enjoying life's surprises together."
        },
        "neptune": {
            "title": "Ethereal Connection 💖🌊",
            "description": "One sees the friendship as a dreamy, deeply emotional bond, while the other experiences it as an intuitive, almost magical connection. Reality may blur between imagination and feeling, creating a beautifully unique dynamic.",
            "tip": "Ground your connection with real-world actions—your bond is beautiful, but make sure to nurture it outside of dreams too."
        },
        "pluto": {
            "title": "Intense Devotion 💖🌑",
            "description": "One experiences this as a deep and affectionate friendship, while the other sees it as a powerful and transformative connection. The result is an unbreakable bond that evolves over time.",
            "tip": "Allow each other space to evolve—your friendship is strong enough to withstand change and come out even deeper."
        },
        "comet": {
            "title": "Fleeting Romance 💖☄️",
            "description": "One sees this as a deeply affectionate bond, while the other experiences it as fast-moving and full of excitement. Whether the connection is long-term or brief, it leaves a lasting impression.",
            "tip": "Enjoy the intensity of your connection, but don't hold on too tightly—some friendships are meant to shine brightly, even if briefly."
        },
        "cluster": {
            "title": "Heart of the Group 💖🌌",
            "description": "One experiences this as a close and personal bond, while the other sees it as part of a larger friendship circle. The mix creates a dynamic where warmth and social energy blend effortlessly.",
            "tip": "Keep bringing people together, but don't forget to nurture one-on-one connections too—your warmth is a gift to all."
        },
        "earth": {
            "title": "Rooted Affection 💖🌍",
            "description": "One sees the friendship as deeply emotional and affectionate, while the other values its stability and grounded nature. The blend of love and reliability makes this a lasting connection.",
            "tip": "Appreciate steady presence—it may not always be flashy, but it's the foundation of something truly lasting."
        },
        "satellite": {
            "title": "Distant Affection 💖🛰️",
            "description": "One experiences this as an affectionate, close-knit bond, while the other sees it as something that can withstand distance and time apart. No matter the space between, the connection remains strong.",
            "tip": "Check in often—distance doesn't weaken your bond, but small gestures keep it strong over time."
        }
    },
    mercury: {
        "mercury": {
            "title": "Witty Sparring 💫💫",
            "description": "This friendship thrives on rapid-fire conversation, playful debates, and endless curiosity. Both enjoy quick thinking, clever humor, and keeping each other on their toes.",
            "tip": "Keep challenging each other's ideas—it keeps your connection fresh and intellectually stimulating."
        },
        "mars": {
            "title": "Energetic Exchange 💫🔥",
            "description": "One brings quick wit and clever ideas, while the other brings action and bold energy. This friendship moves fast, full of excitement, brainstorming, and spontaneous plans.",
            "tip": "Balance thinking with doing—Mars pushes you to act, while you help refine their plans."
        },
        "jupiter": {
            "title": "Big Ideas, Big Laughs 💫🌟",
            "description": "One enjoys fast-paced, thought-provoking conversations, while the other thrives on grand ideas and boundless optimism. Together, every discussion feels like an adventure waiting to happen.",
            "tip": "Dream big together, but also follow through—your ideas can become reality with the right action."
        },
        "saturn": {
            "title": "Grounded Wisdom 💫⭐",
            "description": "One enjoys quick thinking and adaptability, while the other values structure and long-term planning. This friendship balances spontaneity with steady wisdom, keeping both grounded yet open-minded.",
            "tip": "Learn from Saturn's stability while helping them stay open to new perspectives."
        },
        "uranus": {
            "title": "Revolutionary Minds 💫🌀",
            "description": "One loves clever problem-solving, while the other craves innovation and breaking the rules. This friendship is full of wild ideas, unexpected insights, and a shared love of shaking things up.",
            "tip": "Embrace the unconventional—your best ideas come from pushing past limits together."
        },
        "neptune": {
            "title": "Mystical Musings 💫🌊",
            "description": "One sees the world through logic and curiosity, while the other views it through dreams and intuition. Together, this friendship blends imagination with intellect, creating deep and fascinating conversations.",
            "tip": "Balance facts with feelings—your different approaches create a unique and enriching perspective."
        },
        "pluto": {
            "title": "Strategic Depth 💫🌑",
            "description": "One dissects ideas with sharp intellect, while the other seeks deep, hidden truths. This friendship is built on intense discussions, uncovering layers of meaning, and seeing beyond the surface.",
            "tip": "Use your insight wisely—together, you can navigate life's complexities like no one else."
        },
        "comet": {
            "title": "Spontaneous Sparks 💫☄️",
            "description": "One thrives on quick, clever interactions, while the other embraces fleeting but exhilarating moments. This friendship is full of witty exchanges, unexpected reunions, and bursts of excitement.",
            "tip": "Make an effort to stay in touch—your quick connection is incredible, but consistency will deepen it."
        },
        "cluster": {
            "title": "Social Catalyst 💫🌌",
            "description": "One enjoys sharp, engaging conversations, while the other thrives on group dynamics and lively discussions. Together, they bring energy, humor, and connection to any social setting.",
            "tip": "Use your gift of connection to foster deeper bonds within the group."
        },
        "earth": {
            "title": "Mind & Heart 💫🌍",
            "description": "One loves intellectual stimulation, while the other values emotional stability. This friendship blends quick-witted conversations with deep, grounding support, creating a well-rounded connection.",
            "tip": "Appreciate Earth's patience—it helps ground your fast-moving mind in meaningful ways."
        },
        "satellite": {
            "title": "Long-Distance Laughter 💫🛰️",
            "description": "One keeps the friendship alive with humor and quick check-ins, while the other ensures it remains steady despite time and distance. No matter how long between conversations, it always picks up seamlessly.",
            "tip": "Keep the connection alive with spontaneous check-ins—your friendship is too fun to fade."
        }
    },
    mars: {
        "mars": {
            "title": "Brothers in Arms 🔥🔥",
            "description": "This friendship is built on high-energy adventures, competition, and an unstoppable drive. Both thrive on challenges and pushing each other to be their best.",
            "tip": "Turn competition into motivation—support each other's ambitions rather than seeing them as rivalries."
        },
        "jupiter": {
            "title": "The Powerhouse Duo 🔥🌟",
            "description": "One brings bold action, the other brings grand vision. Together, this friendship is all about big dreams, risk-taking, and pushing boundaries in pursuit of something greater.",
            "tip": "Encourage each other's ambitions, but also stay grounded—big plans need solid execution."
        },
        "saturn": {
            "title": "Strength & Discipline 🔥⭐",
            "description": "One is full of fiery energy, always ready to act, while the other takes a patient, strategic approach. This friendship thrives when passion is tempered with wisdom.",
            "tip": "Listen to Saturn's advice—they help you pace your energy and avoid burnout."
        },
        "uranus": {
            "title": "Rebellious Allies 🔥🌀",
            "description": "One thrives on action and thrill-seeking, while the other craves innovation and shaking things up. Together, this friendship is about breaking rules, embracing change, and chasing the next big adventure.",
            "tip": "Channel your rebellious streak into creative innovation rather than reckless impulses."
        },
        "neptune": {
            "title": "Dreams & Drive 🔥🌊",
            "description": "One is all about action and intensity, while the other brings deep emotions and creativity. This friendship finds balance when passion fuels imagination, and dreams turn into reality.",
            "tip": "Let Neptune inspire your imagination while you help them turn visions into reality."
        },
        "pluto": {
            "title": "Unbreakable Bond 🔥🌑",
            "description": "One thrives on raw intensity, the other seeks deep emotional transformation. This friendship is built on trust, loyalty, and the ability to navigate life's biggest challenges together.",
            "tip": "Use your shared intensity for good—support each other through life's biggest transformations."
        },
        "comet": {
            "title": "Explosive Chemistry 🔥☄️",
            "description": "One brings relentless energy, the other thrives on fast-moving connections. This friendship is all about spontaneous adventures, unexpected reunions, and unforgettable moments.",
            "tip": "While spontaneity is great, a little consistency can turn this into a lifelong connection."
        },
        "cluster": {
            "title": "The Life of the Party 🔥🌌",
            "description": "One thrives on leading the charge with boldness and enthusiasm, while the other enjoys the collective energy of a group. Together, they keep the momentum going and the fun alive.",
            "tip": "Make sure to uplift others in the group—your energy can either inspire or overpower."
        },
        "earth": {
            "title": "Grounded Fire 🔥🌍",
            "description": "One is all about ambition and drive, while the other provides steady, grounding support. This friendship balances relentless pursuit with emotional care and stability.",
            "tip": "Appreciate Earth's patience—it keeps you from burning out in your relentless pursuits."
        },
        "satellite": {
            "title": "Distant Flames 🔥🛰️",
            "description": "One is always on the move, full of energy, while the other stays connected even across distance. This friendship may go through long gaps, but every reconnection feels just as strong.",
            "tip": "Check in regularly—a simple message can keep the fire alive across any distance."
        }
    },
    jupiter: {
        "jupiter": {
            "title": "Endless Horizons 🌟🌟",
            "description": "This friendship is fueled by adventure, big dreams, and a constant push to expand limits. Both thrive on grand ideas, philosophical discussions, and an ever-growing curiosity about life.",
            "tip": "Embrace each other's grand ideas, but remember to ground them with actionable steps."
        },
        "saturn": {
            "title": "Wisdom & Wonder 🌟⭐",
            "description": "One sees limitless possibilities, the other values careful planning. This friendship works when optimism meets structure, allowing dreams to take shape with practical execution.",
            "tip": "Saturn's realism isn't negativity—it's the structure that helps your dreams take flight."
        },
        "uranus": {
            "title": "Visionary Minds 🌟🌀",
            "description": "One dreams of boundless expansion, while the other thrives on breaking norms. Together, this friendship is a whirlwind of groundbreaking ideas, unconventional adventures, and bold new perspectives.",
            "tip": "Support each other's wild ideas—together, you can redefine what's possible."
        },
        "neptune": {
            "title": "Dream Weavers 🌟🌊",
            "description": "One is driven by endless curiosity, the other by deep imagination. This friendship thrives on creative exploration, idealistic conversations, and a shared belief in limitless possibilities.",
            "tip": "Balance inspiration with action—turn dreams into reality together."
        },
        "pluto": {
            "title": "Transformation & Growth 🌟🌑",
            "description": "One encourages expansion and positivity, while the other seeks depth and transformation. This friendship pushes both to evolve, bringing light to difficult changes and meaning to grand pursuits.",
            "tip": "Be patient with Pluto's intensity—your light helps them through their darkest moments."
        },
        "comet": {
            "title": "Epic Encounters 🌟☄️",
            "description": "One thrives on movement, the other embraces serendipity. This friendship is full of chance reunions, spontaneous trips, and experiences that feel like fate keeps bringing you together.",
            "tip": "Embrace the unpredictable nature of this bond—each reunion is an opportunity for new adventures."
        },
        "cluster": {
            "title": "The Ultimate Social Duo 🌟🌌",
            "description": "One shines as the charismatic leader, the other thrives in shared group energy. This friendship is about bringing people together, spreading optimism, and creating unforgettable moments.",
            "tip": "Use your influence to uplift others—your energy can inspire entire communities."
        },
        "earth": {
            "title": "Grounded Growth 🌟🌍",
            "description": "One seeks endless adventure, the other provides steady support. This friendship balances expansion with emotional security, making room for big dreams without losing touch with reality.",
            "tip": "Appreciate Earth's grounding nature—they help you stay connected to what truly matters."
        },
        "satellite": {
            "title": "Boundless Bonds 🌟🛰️",
            "description": "One sees distance as just another challenge, the other values deep, lasting connection. This friendship remains strong no matter the miles, always picking up right where it left off.",
            "tip": "Stay in touch—your encouragement means the world, even from afar."
        }
    },
    saturn: {
        "saturn": {
            "title": "Unbreakable Bond ⭐⭐",
            "description": "This friendship is built on loyalty, patience, and mutual respect. It may take time to form, but once it does, it's rock-solid—steady, enduring, and built to last.",
            "tip": "Consistency is key—nurture your friendship with steady effort and understanding."
        },
        "uranus": {
            "title": "Order & Chaos ⭐🌀",
            "description": "One values structure, the other thrives on disruption. This friendship is a constant push-and-pull between stability and excitement, challenging norms while reshaping perspectives.",
            "tip": "Embrace your differences—Saturn provides stability, while Uranus brings excitement."
        },
        "neptune": {
            "title": "Depth & Discipline ⭐🌊",
            "description": "One seeks stability, the other drifts through imagination. This friendship balances structure with creativity, where practical wisdom meets boundless dreams.",
            "tip": "Balance is everything—let Saturn provide structure without dimming Neptune's creativity."
        },
        "pluto": {
            "title": "Silent Strength ⭐🌑",
            "description": "One provides quiet endurance, the other undergoes deep transformation. This friendship is a pillar of unwavering support, offering patience and strength through intense changes.",
            "tip": "Patience is key—Pluto's changes take time, and your steadiness is invaluable."
        },
        "comet": {
            "title": "Fleeting Yet Familiar ⭐☄️",
            "description": "One moves at a slow, steady pace, while the other comes and goes in bursts. This friendship may not be constant, but every encounter leaves a lasting impact.",
            "tip": "Even if your paths cross sporadically, the wisdom you share stays forever."
        },
        "cluster": {
            "title": "The Backbone of the Group ⭐🌌",
            "description": "One provides structure, the other thrives in community. This friendship keeps the group stable, offering reliability and support when things get chaotic.",
            "tip": "Don't always play the responsible one—let yourself enjoy the fun, too."
        },
        "earth": {
            "title": "Steady Foundations ⭐🌍",
            "description": "One builds with discipline, the other nurtures with care. This friendship is deeply rooted in trust and responsibility, providing an unshakable sense of stability.",
            "tip": "Make time to appreciate each other—your friendship is a rare and valuable anchor."
        },
        "satellite": {
            "title": "Distant Yet Devoted ⭐🛰️",
            "description": "One remains steady, the other stays connected despite the distance. This friendship proves that space and time don't weaken bonds when reliability is at its core.",
            "tip": "Check in once in a while—your steady presence provides comfort, even from afar."
        }
    },
    uranus: {
        "uranus": {
            "title": "Rebels at Heart 🌀🌀",
            "description": "This friendship thrives on surprises, innovation, and breaking the mold. Whether challenging traditions or chasing bold new ideas, nothing about this connection is ordinary.",
            "tip": "Embrace the chaos—your bond thrives on freedom and unpredictability."
        },
        "neptune": {
            "title": "Dreamers & Visionaries 🌀🌊",
            "description": "One brings radical ideas, the other adds deep imagination. This friendship is a fusion of creativity and idealism, where dreams and innovation fuel each other.",
            "tip": "Ground your ideas in reality—dream big, but also take action together."
        },
        "pluto": {
            "title": "Revolution & Transformation 🌀🌑",
            "description": "One thrives on disruption, the other on deep transformation. This friendship pushes boundaries, constantly evolving and reshaping both people involved.",
            "tip": "Change is your strength—help each other embrace the unknown fearlessly."
        },
        "comet": {
            "title": "Cosmic Sparks 🌀☄️",
            "description": "One moves unpredictably, the other thrives in spontaneity. This friendship is full of thrilling, unexpected reunions and unforgettable moments.",
            "tip": "Cherish the spontaneous moments—some friendships don't need routine to thrive."
        },
        "cluster": {
            "title": "The Eccentric Crew 🌀🌌",
            "description": "One shakes things up, the other brings fresh perspectives. This friendship keeps the group dynamic, always introducing new ideas and exciting changes.",
            "tip": "Stay connected—your presence keeps your group vibrant and full of new ideas."
        },
        "earth": {
            "title": "Groundbreaker Duo 🌀🌍",
            "description": "One challenges the status quo, the other provides steady support. This friendship finds balance between pushing boundaries and creating something lasting.",
            "tip": "Find balance—Uranus inspires, and Earth builds upon those inspirations."
        },
        "satellite": {
            "title": "Distant Signals 🌀🛰️",
            "description": "One thrives on discovery, the other values deep discussions. This friendship stays strong across any distance through thought-provoking ideas and shared curiosity.",
            "tip": "Keep the conversation going—your bond grows through thought-provoking talks."
        }
    },
    neptune: {
        "neptune": {
            "title": "Soul Connection 🌊🌊",
            "description": "This friendship is built on intuition, deep emotions, and shared dreams. Conversations flow effortlessly, and even in silence, there's an unspoken understanding.",
            "tip": "Trust your bond—your connection runs deeper than the surface."
        },
        "pluto": {
            "title": "Mystical Depths 🌊🌑",
            "description": "One brings dreamy idealism, the other deep transformation. This friendship thrives on intense conversations, personal growth, and exploring life's mysteries together.",
            "tip": "Embrace the depth—your friendship is a rare blend of mystery and meaning."
        },
        "comet": {
            "title": "Drifting Tides 🌊☄️",
            "description": "One flows with emotion, the other moves unpredictably. This friendship ebbs and flows, sometimes close, sometimes distant, yet always meaningful when paths cross again.",
            "tip": "Cherish the moments you share—every reconnection brings new wisdom."
        },
        "cluster": {
            "title": "Creative Collective 🌊🌌",
            "description": "One brings imagination, the other amplifies it. This friendship thrives in a group where artistic ideas, deep conversations, and dreamy perspectives inspire everyone.",
            "tip": "Keep sharing your dreams—your vision brings magic to the group."
        },
        "earth": {
            "title": "Dreamer & Doer 🌊🌍",
            "description": "One dreams big, the other makes things happen. This friendship finds harmony in turning ideals into reality, with Earth providing the grounding that Neptune needs.",
            "tip": "Ground your dreams—Earth helps make them real, so embrace their stability."
        },
        "satellite": {
            "title": "Long-Distance Daydreamers 🌊🛰️",
            "description": "One thrives on imagination, the other on emotional connection. This friendship stays strong across any distance, bonded by shared ideals and deep conversations.",
            "tip": "Keep the inspiration alive—small gestures maintain your emotional closeness."
        }
    },
    pluto: {
        "pluto": {
            "title": "Eternal Bond 🌑🌑",
            "description": "This friendship is built on transformation, resilience, and an unspoken understanding. No matter how much life changes, the connection endures, growing deeper with every challenge.",
            "tip": "Embrace the evolution—your friendship grows stronger through every phase."
        },
        "comet": {
            "title": "Fated Encounters 🌑☄️",
            "description": "One moves through life in cycles of deep change, the other appears unpredictably. This friendship isn't about constant presence but about the meaning behind each reconnection.",
            "tip": "Appreciate the mystery—each reunion carries a purpose."
        },
        "cluster": {
            "title": "Hidden Depths 🌑🌌",
            "description": "One prefers depth, the other thrives in the group. In a friendship circle, this dynamic brings quiet insight and unwavering loyalty, even if not always vocal.",
            "tip": "Don't be afraid to open up—your presence holds power in your circle."
        },
        "earth": {
            "title": "Old Roots 🌑🌍",
            "description": "One values transformation, the other stability. This friendship has deep history, proving that no matter how much things change, the foundation remains steady.",
            "tip": "Reconnect when you can—the foundation of your friendship is unbreakable."
        },
        "satellite": {
            "title": "Distant but Unforgotten 🌑🛰️",
            "description": "One moves through cycles of deep change, the other stays steady from afar. Even with time and space between you, every conversation feels like no time has passed.",
            "tip": "A simple message can reignite the bond—don't hesitate to reach out."
        }
    },
    comet: {
        "comet": {
            "title": "Celestial Dance ☄️☄️",
            "description": "This friendship thrives on serendipity and shared adventures. Each reunion feels destined, creating memorable moments in brief but bright encounters.",
            "tip": "Embrace the unpredictable rhythm—your friendship doesn't need consistency to be meaningful."
        },
        "cluster": {
            "title": "Shooting Stars ☄️🌌",
            "description": "One brings excitement, the other community spirit. This friendship energizes the group with spontaneous adventures and fresh perspectives.",
            "tip": "Keep the group dynamic—your spontaneity adds spark to collective experiences."
        },
        "earth": {
            "title": "Grounded Adventures ☄️🌍",
            "description": "One brings spontaneity, the other stability. This friendship balances exciting encounters with reliable support.",
            "tip": "Value Earth's constancy—they're your safe landing between adventures."
        },
        "satellite": {
            "title": "Orbital Paths ☄️🛰️",
            "description": "One moves freely, the other maintains distant connections. This friendship proves meaningful bonds can thrive in brief, bright moments.",
            "tip": "Celebrate each crossing of paths—your timing is always perfect."
        }
    },
    cluster: {
        "cluster": {
            "title": "Community Builders 🌌🌌",
            "description": "This friendship thrives on creating and nurturing community. Together, you build meaningful connections and foster group harmony.",
            "tip": "Keep growing your circle—your combined energy strengthens the community."
        },
        "earth": {
            "title": "Rooted Community 🌌🌍",
            "description": "One builds community, the other provides stability. This friendship creates lasting group bonds through reliable support.",
            "tip": "Use your steady presence to strengthen group connections."
        },
        "satellite": {
            "title": "Connected Networks 🌌🛰️",
            "description": "One builds local community, the other bridges distance. This friendship helps maintain group cohesion across space and time.",
            "tip": "Keep the network strong—your different perspectives enrich the community."
        }
    },
    earth: {
        "earth": {
            "title": "Solid Ground 🌍🌍",
            "description": "This friendship is built on unwavering trust and mutual support. Together, you create a foundation that withstands any storm.",
            "tip": "Nurture your stability—your reliable bond is precious."
        },
        "satellite": {
            "title": "Anchored Connection 🌍🛰️",
            "description": "One provides stability, the other maintains distance. This friendship proves strong foundations can support long-distance bonds.",
            "tip": "Trust your foundation—distance can't shake a well-built connection."
        }
    },
    satellite: {
        "satellite": {
            "title": "Distant Stars 🛰️🛰️",
            "description": "This friendship thrives despite physical distance. You've mastered the art of staying connected across space and time.",
            "tip": "Celebrate your ability to maintain connection—distance has made your bond unique."
        }
    }
};
export const planetDynamic = {
    "sun": {
        "dynamic": "The Sun represents a foundational, lifelong bond that acts as your emotional anchor. This friendship is built on mutual growth and unwavering support, where both parties celebrate each other's triumphs and sit together in moments of despair without judgment. Whether family or chosen, this relationship feels sacred—a safe harbor where authenticity thrives. You share history, inside jokes, and unspoken understandings. However, its strength requires active nurturing: prioritizing time together, even during chaotic phases, and honoring the trust that's been carefully cultivated over years."
    },
    "mercury": {
        "dynamic": "Mercury embodies a friendship that sparks suddenly and burns brightly. This dynamic is electric, driven by spontaneity and intellectual curiosity. Conversations feel like brainstorming sessions—full of wild ideas, debates, and revelations. While exhilarating, the bond thrives on novelty rather than depth. It's a relationship where you might spend hours dissecting a niche topic one week, then go silent for months without hurt feelings. The key is to let it evolve organically, resisting the urge to force commitment or cling to its initial intensity."
    },
    "venus": {
        "dynamic": "Venus symbolizes a mirror-like connection where vulnerability is the norm. Here, you share insecurities, dreams, and secrets without fear of judgment. This friend intuitively senses your moods and offers validation, not solutions. The dynamic is deeply healing but fragile—it requires reciprocity to avoid emotional burnout. You might spend nights whispering truths you've never voiced elsewhere, creating a private universe of mutual understanding. Protecting this space from external drama or one-sided sharing is crucial for its survival."
    },
    "earth": {
        "dynamic": "Earth represents a steady, no-frills friendship rooted in consistency. This person knows your coffee order, childhood traumas, and how you take your toast. Interactions feel like slipping into a worn-in sweater—comfortable and reassuring. You might go weeks without talking, yet pick up exactly where you left off. The risk lies in taking this bond for granted; without occasional updates about personal growth, assumptions can fossilize, turning familiarity into stagnation."
    },
    "mars": {
        "dynamic": "Mars fuels a thrill-seeking partnership where boundaries are pushed. This friend dares you to quit your job, join a salsa class, or confront someone who wronged you. The dynamic is competitive in the healthiest way—you inspire each other to grow bolder. However, the constant adrenaline can mask emotional needs. Without periodic check-ins to ground the relationship, it risks becoming a performance rather than a genuine connection."
    },
    "jupiter": {
        "dynamic": "Jupiter is the social catalyst who turns acquaintances into communities. This friend hosts dinners, introduces you to their vast network, and radiates infectious enthusiasm. While the bond feels expansive, it can prioritize quantity over depth. To sustain it, carve out one-on-one moments—like coffee walks or late-night calls—where vulnerability replaces group banter. Otherwise, the relationship might plateau as a delightful yet surface-level connection."
    },
    "saturn": {
        "dynamic": "Saturn defines a situational friendship anchored in shared environments—work, gym, or weekly classes. Your rapport flourishes within these contexts, fueled by mutual goals or routines. Outside that sphere, interactions feel tentative. To deepen it, gradually bridge the gap: share a personal struggle after a meeting or invite them to a non-contextual event. Without effort, the bond remains convenient but confined."
    },
    "uranus": {
        "dynamic": "Uranus governs a gloriously weird friendship where norms dissolve. Together, you invent absurd inside jokes, obsess over niche hobbies, or role-play in public just for laughs. This dynamic thrives on creativity and rebellion against mundanity. However, its chaotic energy can become draining if not balanced with quieter moments. Setting boundaries around the madness ensures it remains joyful rather than exhausting."
    },
    "neptune": {
        "dynamic": "Neptune embodies a transcendent connection that defies logic. You might live continents apart or speak sporadically, yet when you reunite, hours vanish into deep existential talks. This bond exists in a liminal space—less about physical presence than a shared wavelength. To maintain it, send sporadic signals (a song link, a meme) that say, 'I'm here, I get you.' Forcing regularity would dilute its magic."
    },
    "pluto": {
        "dynamic": "Pluto represents a friendship preserved in amber—once transformative, now frozen in time. You've grown apart, but memories of late-night drives or shared struggles still ache with sweetness. Reconnecting often feels bittersweet; the person they were (and the person you were) still resonate, but present-day versions might clash. Honor the past without clinging, allowing gratitude to coexist with gentle release."
    },
    "comet": {
        "dynamic": "Comet symbolizes an on-again, off-again bond that reignites in fiery bursts. For a month, you're inseparable—texting constantly, planning adventures—then life intervenes, and contact dims. There's no resentment in the silence; both understand the pattern. This dynamic thrives on passion over consistency, offering intense connection without the pressure of daily maintenance. Embrace its ephemeral highs, but avoid relying on it for stability."
    },
    "moon": {
        "dynamic": "The Moon governs a low-effort yet profound friendship. You might exchange three texts a year, yet their mere existence comforts you. This person doesn't need updates—they grasp your essence. The dynamic is autonomous; you orbit the same emotional truths without demanding proximity. A single 'saw this and thought of you' message carries disproportionate weight, reaffirming an unspoken pact of mutual understanding."
    },
    "cluster": {
        "dynamic": "Cluster represents a group dynamic where the whole outweighs individual parts. Your squad shares rituals—annual trips, themed parties, collective griefs. Alone, you might drift, but together, you're a force. This bond risks member turnover or diluted intimacy as lives shift. Combat this by creating new traditions and acknowledging individual growth within the collective identity."
    },
    "satellite": {
        "dynamic": "Satellite defines pleasant but shallow ties—your barista, coworker, or dog park regular. Interactions are polite, predictable, and disposable. There's mutual acknowledgment without investment. This dynamic thrives on brevity; a smile or small-talk about the weather suffices. Overstepping into personal territory often feels intrusive, so honor its role as social background noise."
    },
    "forge": {
        "dynamic": "Forge symbolizes a mentorship-like bond focused on growth. This friend challenges your limits, calls out excuses, and refuses to coddle. The dynamic can feel abrasive but pushes you toward self-betterment. However, discern between tough love and toxicity. True 'forge' relationships balance criticism with unwavering belief in your potential."
    },
    "niche": {
        "dynamic": "Niche friendships orbit shared obsessions—modular synths, medieval history, competitive knitting. Conversations dive deep into technicalities outsiders would find baffling. The bond exists in a bubble, often avoiding personal topics. To sustain it, nurture the shared passion through collaborative projects or events, resisting the urge to force broader connection."
    },
    "static": {
        "dynamic": "Static defines a turbulent, love-hate dynamic. You're drawn to their charisma but repelled by petty rivalries or snarky comments. Interactions swing between camaraderie and tension. This relationship often consumes more energy than it returns. Regularly assess its emotional ROI—sometimes, preserving peace means distancing, even if history makes it painful."
    },
    "dust": {
        "dynamic": "Dust encompasses obligatory relationships—your aunt's neighbor, a partner's tedious friend. Interactions are transactional and draining, marked by forced smiles and mental countdowns. Maintain polite detachment: keep conversations weather-focused, avoid personal details, and exit at the first natural pause. Investing here yields little but exhaustion."
    }
}


// Function to get comparison description
export const getComparisonDescription = (myPlanet: PlanetType, friendPlanet: PlanetType): string => {
    // Example logic for generating a description based on the planets
    return `Comparing ${myPlanet} and ${friendPlanet}: ${planetData[myPlanet].title} vs ${planetData[friendPlanet].title}`;
};
