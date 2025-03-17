const lyrics = [
  // Intro
  {
    time: 0,
    singer: "freddie",
    text: "Are you ready, hey, are you ready for this?",
  },
  {
    time: 2,
    singer: "freddie",
    text: "Are you hanging on the edge of your seat?",
  },
  { time: 4, singer: "others", text: "I need a break beat, uh" },
  {
    time: 5,
    singer: "freddie",
    text: "Are you ready, hey, are you ready for this?",
  },
  {
    time: 7,
    singer: "freddie",
    text: "Are you hanging on the edge of your seat?",
  },
  { time: 8, singer: "others", text: "I need a break beat, uh" },
  {
    time: 9,
    singer: "freddie",
    text: "Are you ready, hey, are you ready for this?",
  },
  {
    time: 11,
    singer: "freddie",
    text: "Are you hanging on the edge of your seat?",
  },
  { time: 13, singer: "others", text: "I need a break beat, uh" },
  { time: 14, singer: "freddie", text: "Outta the doorway the bullets rip" },
  {
    time: 16,
    singer: "freddie",
    text: "Repeating to the sound of the beat, hey",
  },

  // Verse 1
  {
    time: 18,
    singer: "others",
    text: "Yo, a for the kids in the club that's ready to get bugged",
  },
  { time: 21, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 23,
    singer: "others",
    text: "And for the thugs with the burners that wanna blast off",
  },
  { time: 25, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 27,
    singer: "others",
    text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!",
  },
  { time: 30, singer: "freddie", text: "Another one bites the dust" },
  { time: 31, singer: "freddie", text: "And another one gone" },
  { time: 32, singer: "others", text: "Wyclef" },
  { time: 33, singer: "freddie", text: "And another one gone" },
  { time: 33, singer: "others", text: "Dirty Cash" },
  { time: 35, singer: "freddie", text: "Another one bites the dust" },
  { time: 35, singer: "others", text: "Young Free, Freddie where you at?" },

  // Verse 2
  { time: 37, singer: "freddie", text: "Steve walks wearily down the street" },
  { time: 39, singer: "freddie", text: "With the brim pulled way down low" },
  {
    time: 41,
    singer: "others",
    text: "Some cat up in Brooklyn just got robbed with a Kangol",
  },
  {
    time: 45,
    singer: "freddie",
    text: "Are you ready, hey, are you ready for this?",
  },
  {
    time: 47,
    singer: "freddie",
    text: "Are you hanging on the edge of your seat?",
  },
  { time: 50, singer: "freddie", text: "Out of the doorway, the bullets rip" },
  {
    time: 52,
    singer: "freddie",
    text: "Repeating to the sound of the beat, hey",
  },
  {
    time: 55,
    singer: "others",
    text: "My man got shot, and the block got hot",
  },
  { time: 57, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 58,
    singer: "others",
    text: "Yo, hey I hear more shots, this is like Fort Knox, kid",
  },
  { time: 61, singer: "freddie", text: "Another one bites the dust" },
  { time: 63, singer: "others", text: "Yo, hold your breath" },
  { time: 63, singer: "freddie", text: "And another one gone" },
  { time: 66, singer: "others", text: "Hold your breath" },
  { time: 64, singer: "freddie", text: "And another one gone" },
  { time: 66, singer: "others", text: "Hold your breath" },
  { time: 67, singer: "freddie", text: "Another one bites the dust" },
  { time: 67, singer: "others", text: "Yo, check it" },

  // Verse 3
  { time: 68, singer: "others", text: "If you're a soldier at ease" },
  {
    time: 69,
    singer: "others",
    text: "My military style is known to murder Nazis",
  },
  {
    time: 72,
    singer: "others",
    text: "Brooklyn to Germany (Oh yeah) come on",
  },
  { time: 73, singer: "others", text: "My kamikaze will blow the U2" },
  { time: 75, singer: "others", text: "They hire Idi Amin in Timbuktu" },
  { time: 77, singer: "others", text: "Whether you Hindu, or do the Voodoo" },
  {
    time: 79,
    singer: "others",
    text: "You can't foresee this unless I bring the previews, yeah, yeah",
  },
  {
    time: 85,
    singer: "others",
    text: "Yo, it's the number one rappin' band (Come on)",
  },
  {
    time: 87,
    singer: "others",
    text: "Yo, this review will be critically acclaimed",
  },
  {
    time: 89,
    singer: "others",
    text: "Leave you in critical pain, clinically insane",
  },
  {
    time: 91,
    singer: "others",
    text: "The name Wyclef Jean, with a yes, yes y'all",
  },
  {
    time: 93,
    singer: "others",
    text: "Better have a vest y'all, I'll blast, and bless y'all (Oh yeah)",
  },
  {
    time: 95,
    singer: "others",
    text: "F-y'all, the mark of the beast, the triple six",
  },
  {
    time: 98,
    singer: "others",
    text: "Time running out, listen to the tick (Oh yeah)",
  },
  {
    time: 100,
    singer: "others",
    text: "If you see what I saw, then you seen what I seen",
  },
  {
    time: 102,
    singer: "others",
    text: "If you know what I know, you know what I mean (Oh yeah)",
  },
  {
    time: 104,
    singer: "others",
    text: "Commanding officer of the Navy SEAL team",
  },
  {
    time: 107,
    singer: "others",
    text: "Once I give the orders, you feel the infrared beam (Oh yeah) Blaow!",
  },
  {
    time: 110,
    singer: "others",
    text: "For all you critics, sayin' 'another remake'",
  },
  { time: 112, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 113,
    singer: "others",
    text: "Yo, if you know the deal, this is the master reel, kid",
  },
  {
    time: 116,
    singer: "freddie",
    text: "Another one bites the dust (Oh yeah)",
  },
  { time: 118, singer: "freddie", text: "And another one gone" },
  { time: 118, singer: "others", text: "Right" },
  { time: 119, singer: "freddie", text: "And another one gone" },
  { time: 120, singer: "others", text: "Right" },
  { time: 120, singer: "freddie", text: "Another one bites the dust, hey" },
  { time: 121, singer: "others", text: "Freddie Mercury, where you at yo?" },

  // Verse 4
  {
    time: 123,
    singer: "freddie",
    text: "How do you think I'm gonna get along",
  },
  {
    time: 125,
    singer: "freddie",
    text: "Without you when you're gone (Oh yeah)",
  },
  { time: 126, singer: "others", text: "I need a break yo" },
  {
    time: 127,
    singer: "others",
    text: "If you're ready for the first of the month",
  },
  {
    time: 130,
    singer: "others",
    text: "For that welfare check, come on (Kicked me out on my own)",
  },
  { time: 131, singer: "others", text: "I need a break beat" },
  { time: 131, singer: "freddie", text: "Are you happy, are you satisfied?" },
  { time: 134, singer: "freddie", text: "How long can you stand the heat?" },
  { time: 135, singer: "others", text: "I need a break beat" },
  { time: 136, singer: "freddie", text: "Outta the doorway, the bullets rip" },
  { time: 139, singer: "freddie", text: "To the sound of the beat, look out" },
  {
    time: 140,
    singer: "others",
    text: "Yo, bulletproof vests, like the wild, wild west",
  },
  { time: 143, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 145,
    singer: "others",
    text: "Yo, this is a stickup, now take off your Rolex",
  },
  { time: 147, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 149,
    singer: "others",
    text: "Yo, dirty money, good money, yo it's all money-money",
  },
  { time: 153, singer: "freddie", text: "Another one bites the dust" },
  { time: 153, singer: "others", text: "Yo, Dirty Cash" },
  { time: 154, singer: "freddie", text: "And another one gone" },
  { time: 155, singer: "others", text: "Dirty Cash" },
  { time: 155, singer: "freddie", text: "And another one gone" },
  { time: 157, singer: "others", text: "The adventures of Dirty Cash" },
  { time: 157, singer: "freddie", text: "Another one bites the dust" },

  // Verse 5 (Pras)
  {
    time: 158,
    singer: "others",
    text: "Yo, for the love for the cash, I'll blast you in my path",
  },
  {
    time: 161,
    singer: "others",
    text: "Keep my eyes on the math, you cats don't know the half (Oh yeah)",
  },
  {
    time: 163,
    singer: "others",
    text: "As far as I'm concerned, you cats can burn in flames",
  },
  {
    time: 166,
    singer: "others",
    text: "This ain't no game, I'mma start callin' names (Oh yeah)",
  },
  {
    time: 168,
    singer: "others",
    text: "So come get me, if you know the one-fifty",
  },
  {
    time: 170,
    singer: "others",
    text: "A million refugees ready to bust with me (Oh yeah)",
  },
  { time: 172, singer: "others", text: "Bloody, filthy, in this rap shhh—" },
  {
    time: 175,
    singer: "others",
    text: "You gonna have to kill me, since you can't beat me (Oh yeah)",
  },
  { time: 177, singer: "others", text: "Pras, Dirty, Cash, you're the greedy" },
  {
    time: 179,
    singer: "others",
    text: "Believe me, you gotta let me fly like R. Kelly (Oh yeah)",
  },
  {
    time: 182,
    singer: "others",
    text: "Bite another dust with my man Freddie Mercury",
  },
  {
    time: 184,
    singer: "others",
    text: "What height nineties got ya cash, wannabe crazy (Oh yeah/Navy SEAL!)",
  },

  // Verse 6 (Free)
  { time: 186, singer: "others", text: "Practically, I tactically destroy" },
  {
    time: 188,
    singer: "others",
    text: "Deploy more decoys than a presidential convoy (Oh yeah)",
  },
  { time: 191, singer: "others", text: "My whole envoy stay camouflaged out" },
  {
    time: 193,
    singer: "others",
    text: "And when I walk the street, I take the refugee route (Oh yeah)",
  },
  {
    time: 195,
    singer: "others",
    text: "This one go out to all my thugs in the borough",
  },
  {
    time: 197,
    singer: "others",
    text: "Soldiers stay thorough, like Kilamanjaro (Oh yeah)",
  },
  {
    time: 200,
    singer: "others",
    text: "Split it with an arrow, my girl platoon roll",
  },
  {
    time: 202,
    singer: "others",
    text: "Outta control, the female Mandingos (Oh yeah)",
  },
  {
    time: 204,
    singer: "others",
    text: "Free, I evolve from the egg of a seminarian",
  },
  {
    time: 207,
    singer: "others",
    text: "Don't go down, 'cause I'm a vegetarian (Oh yeah)",
  },
  {
    time: 209,
    singer: "others",
    text: "And when I bust, it ain't 'in God we trust'",
  },
  {
    time: 211,
    singer: "others",
    text: "And if you bring a gun, you better bring a black tusk (Oh yeah)",
  },

  // Outro
  { time: 213, singer: "others", text: "She looked into my eyes and said FBI" },
  {
    time: 215,
    singer: "freddie",
    text: "Another one bites the dust (Oh yeah)",
  },
  {
    time: 218,
    singer: "others",
    text: "She said she loved me, she was a spy who lied",
  },
  { time: 220, singer: "freddie", text: "Another one bites the dust" },
  { time: 220, singer: "others", text: "Right" },
  { time: 222, singer: "others", text: "I could relate, could you relate?" },
  { time: 224, singer: "freddie", text: "Another one bites the dust" },
  { time: 232, singer: "others", text: "Jerry 'Wonda', The Product (Oh-oh)" },
  { time: 229, singer: "freddie", text: "Another one bites the dust" },
  {
    time: 231,
    singer: "others",
    text: "Yo, Canibus, John Forté (Don't you know we coming for you?)",
  },
  { time: 235, singer: "freddie", text: "Another one bites the dust" },
  { time: 235, singer: "others", text: "Yo, Dirty Cash, and baby Free" },
  { time: 238, singer: "freddie", text: "Another one bites the dust" },
  { time: 240, singer: "freddie", text: "And another one gone" },
  { time: 240, singer: "others", text: "Wyclef Jean" },
  { time: 241, singer: "freddie", text: "And another one gone" },
  { time: 241, singer: "others", text: "Freddie Mercury, ha-ha" },
  { time: 242, singer: "freddie", text: "Another one bites the dust, yeah" },
  { time: 243, singer: "others", text: "I'm out baby" },
  { time: 246, singer: "others", text: "Navy SEALs!" },
  { time: 247, singer: "freddie", text: "Another one bites the dust" },
  { time: 250, singer: "freddie", text: "Another one bites the dust" },
  { time: 255, singer: "freddie", text: "Another one bites the dust" },
];

let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricFreddie = document.getElementById("lyric-freddie");
const lyricOthers = document.getElementById("lyric-others");

audio.addEventListener("play", () => {
  setInterval(displayLyrics, 100); // Update lyrics every 100ms
});

function displayLyrics() {
  const currentTime = audio.currentTime;

  // Check if the current lyric should be displayed
  if (
    currentLyricIndex < lyrics.length &&
    currentTime >= lyrics[currentLyricIndex].time
  ) {
    const lyric = lyrics[currentLyricIndex];

    // Display the lyric in the correct element based on the singer
    if (lyric.singer === "freddie") {
      lyricFreddie.textContent = lyric.text;
    } else {
      lyricOthers.textContent = lyric.text;
    }

    currentLyricIndex++; // Move to the next lyric
  }
}
