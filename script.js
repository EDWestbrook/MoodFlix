const movies = [
    
    // RELAXED + ACTION + LONG
    { title: "The Raid: Redemption", mood: "relaxed", genre: "action", time: "long", description: "Martial arts chaos with minimal dialogue." },
    { title: "Exit Speed", mood: "relaxed", genre: "action", time: "long", description: "Bus passengers fight for survival." },
    { title: "Big Bullet", mood: "relaxed", genre: "action", time: "long", description: "Stylized Hong Kong police action." },
    { title: "Motorway", mood: "relaxed", genre: "action", time: "long", description: "Calm driving meets chase suspense." },
    { title: "Mad Max", mood: "relaxed", genre: "action", time: "long", description: "Introverted policeman faces biker gangs." },
    { title: "Crank 2: High Voltage", mood: "relaxed", genre: "action", time: "long", description: "Chaotic follow-up to Crank." },
    { title: "The Hard Way", mood: "relaxed", genre: "action", time: "long", description: "Cop trains Hollywood star on the street." },
    { title: "Torque", mood: "relaxed", genre: "action", time: "long", description: "Motorcycle stunts with attitude." },
    { title: "Blue Streak", mood: "relaxed", genre: "action", time: "long", description: "Thief poses as cop to recover loot." },
    { title: "Sniper: Ultimate Kill", mood: "relaxed", genre: "action", time: "long", description: "Assassins in Colombia and calm pacing." },
   
    // RELAXED + COMEDY + LONG
    { title: "Amélie", mood: "relaxed", genre: "comedy", time: "long", description: "Parisian waitress improves lives whimsically." },
    { title: "Midnight in Paris", mood: "relaxed", genre: "comedy", time: "long", description: "Nostalgic walks through literary time." },
    { title: "The Holiday", mood: "relaxed", genre: "comedy", time: "long", description: "Two women swap homes for love." },
    { title: "Paddington 2", mood: "relaxed", genre: "comedy", time: "long", description: "Wholesome bear, charming capers." },
    { title: "Legally Blonde", mood: "relaxed", genre: "comedy", time: "long", description: "Blonde lawyer defies expectations." },
    { title: "Clueless", mood: "relaxed", genre: "comedy", time: "long", description: "Beverly Hills girl plays matchmaker." },
    { title: "Easy A", mood: "relaxed", genre: "comedy", time: "long", description: "Modern Hester Prynne in high school." },
    { title: "Julie & Julia", mood: "relaxed", genre: "comedy", time: "long", description: "Cooking, blogging, and soul-searching." },
    { title: "The Intern", mood: "relaxed", genre: "comedy", time: "long", description: "Retired man interns at startup." },
    { title: "Chef", mood: "relaxed", genre: "comedy", time: "long", description: "Father and son run a food truck." },
 
    // RELAXED + DRAMA + LONG
    { title: "Before Sunset", mood: "relaxed", genre: "drama", time: "long", description: "Two lovers reconnect on the streets of Paris." },
    { title: "Secondhand Lions", mood: "relaxed", genre: "drama", time: "long", description: "A boy finds meaning through eccentric uncles." },
    { title: "Everybody Wants Some!!", mood: "relaxed", genre: "drama", time: "long", description: "Laid-back college baseball team tale." },
    { title: "Moonrise Kingdom", mood: "relaxed", genre: "drama", time: "long", description: "Whimsical runaway love story." },
    { title: "The Princess Bride", mood: "relaxed", genre: "drama", time: "long", description: "Fantasy with heart and swordplay." },
    { title: "Lost in Translation", mood: "relaxed", genre: "drama", time: "long", description: "Quiet connection in Tokyo." },
    { title: "Certified Copy", mood: "relaxed", genre: "drama", time: "long", description: "Conversation becomes deeper than expected." },
    { title: "Paterson", mood: "relaxed", genre: "drama", time: "long", description: "Poet bus driver observes life quietly." },
    { title: "Chef", mood: "relaxed", genre: "drama", time: "long", description: "Road trip food truck bonding." },
    { title: "Paddington", mood: "relaxed", genre: "drama", time: "long", description: "Bear explores life with charm." },
  
    // ADVENTUROUS + ACTION + LONG
    { title: "The Raid: Redemption", mood:"adventurous", genre:"action", time:"long", description:"Non‑stop martial arts thriller." },
    { title: "Mad Max", mood:"adventurous", genre:"action", time:"long", description:"Road‑trip dystopian action classic." },
    { title: "John Wick", mood:"adventurous", genre:"action", time:"long", description:"Stylized gun‑fu hitman masterpiece." },
    { title: "Mission: Impossible – Fallout", mood:"adventurous", genre:"action", time:"long", description:"High‑stakes spy action." },
    { title: "Die Hard", mood:"adventurous", genre:"action", time:"long", description:"Classic lone hero in a skyscraper." },
    { title: "Fury Road", mood:"adventurous", genre:"action", time:"long", description:"Post‑apocalyptic chase epic." },
    { title: "Looper", mood:"adventurous", genre:"action", time:"long", description:"Time‑travel meets assassin drama." },
    { title: "Edge of Tomorrow", mood:"adventurous", genre:"action", time:"long", description:"Recurring battle, sci‑fi twist." },
    { title: "The Bourne Identity", mood:"adventurous", genre:"action", time:"long", description:"Amnesiac spy on the run." },
    { title: "Skyfall", mood:"adventurous", genre:"action", time:"long", description:"James Bond modern classic." },
 
    // ADVENTUROUS + COMEDY + LONG
    { title: "The Goonies", mood:"adventurous", genre:"comedy", time:"long", description:"Kids treasure‑hunt adventure." },
    { title: "Monty Python and the Holy Grail", mood:"adventurous", genre:"comedy", time:"long", description:"Absurd medieval quest." },
    { title: "Galaxy Quest", mood:"adventurous", genre:"comedy", time:"long", description:"Sci‑fi spoof with heart." },
    { title: "Pirates of the Caribbean: Curse of the Black Pearl", mood:"adventurous", genre:"comedy", time:"long", description:"Swashbuckling with humor." },
    { title: "The Princess Bride", mood:"adventurous", genre:"comedy", time:"long", description:"Fairy‑tale quest & wit." },
    { title: "Back to the Future", mood:"adventurous", genre:"comedy", time:"long", description:"Time‑travel teen adventure." },
    { title: "Tropic Thunder", mood:"adventurous", genre:"comedy", time:"long", description:"Hollywood war comedy spoof." },
    { title: "Jumanji: Welcome to the Jungle", mood:"adventurous", genre:"comedy", time:"long", description:"Game world adventure." },
    { title: "The Life Aquatic with Steve Zissou", mood:"adventurous", genre:"comedy", time:"long", description:"Sea adventure with quirk." },
    { title: "Shaun of the Dead", mood:"adventurous", genre:"comedy", time:"long", description:"Zombie adventure comedy." },
 
    // ADVENTUROUS + DRAMA + LONG
    { title: "Epic Quest", mood:"adventurous", genre:"drama", time:"long", description:"Grand survival and emotion." },
    { title: "The Long Journey", mood:"adventurous", genre:"drama", time:"long", description:"Survival against odds." },
    { title: "Desert Bloom", mood:"adventurous", genre:"drama", time:"long", description:"Tragedy in barren lands." },
    { title: "Arctic Resolve", mood:"adventurous", genre:"drama", time:"long", description:"Icy quest for redemption." },
    { title: "Mountain of Truth", mood:"adventurous", genre:"drama", time:"long", description:"Each summit reveals more." },
    { title: "Into the Wild", mood:"adventurous", genre:"drama", time:"long", description:"Real‑life wilderness odyssey." },
    { title: "The Revenant", mood:"adventurous", genre:"drama", time:"long", description:"Survival and revenge in snow." },
    { title: "Wild", mood:"adventurous", genre:"drama", time:"long", description:"Solo hike, self‑rediscovery." },
    { title: "Cast Away", mood:"adventurous", genre:"drama", time:"long", description:"One‑man shipwreck drama." },
    { title: "127 Hours", mood:"adventurous", genre:"drama", time:"long", description:"Trapped and transformed." },
   
    // SOCIAL + ACTION + LONG
    { title: "Group Hunt", mood:"social", genre:"action", time:"long", description:"Friends on wildlife bounty mission." },
    { title: "Allied Force", mood:"social", genre:"action", time:"long", description:"Team of soldiers bond under fire." },
    { title: "Rogue Unit", mood:"social", genre:"action", time:"long", description:"Misfits save the day together." },
    { title: "Last Squad", mood:"social", genre:"action", time:"long", description:"Final stand by elite squad." },
    { title: "The A-Team", mood:"social", genre:"action", time:"long", description:"Classic squad-based action comedy." },
    { title: "Guardians of the Galaxy", mood:"social", genre:"action", time:"long", description:"Misfit heroes in space." },
    { title: "Ocean’s Eleven", mood:"social", genre:"action", time:"long", description:"Team heist Las Vegas." },
    { title: "The Expendables", mood:"social", genre:"action", time:"long", description:"Team of veteran mercenaries." },
    { title: "Fast & Furious", mood:"social", genre:"action", time:"long", description:"Car-racing family crew." },
  
    // SOCIAL + COMEDY + LONG
    { title: "Hangout Chaos", mood:"social", genre:"comedy", time:"long", description:"Friends’ weekend goes hilariously awry." },
    { title: "FriendZone Frenzy", mood:"social", genre:"comedy", time:"long", description:"Romantic misadventures of pals." },
    { title: "Social Circus", mood:"social", genre:"comedy", time:"long", description:"Friends thrown into comedic ordeal." },
    { title: "Epic Roommates", mood:"social", genre:"comedy", time:"long", description:"Roommates navigate chaos together." },
    { title: "BFF Bonanza", mood:"social", genre:"comedy", time:"long", description:"Long laughs with lifelong friends." },
    { title: "The Hangover", mood:"social", genre:"comedy", time:"long", description:"Groomsmen on wild Vegas trip." },
    { title: "Superbad", mood:"social", genre:"comedy", time:"long", description:"Teens on a crazy party quest." },
    { title: "Bridesmaids", mood:"social", genre:"comedy", time:"long", description:"Women’s wedding adventure." },
    { title: "Pitch Perfect", mood:"social", genre:"comedy", time:"long", description:"College a cappella group hilarity." },
    { title: "Booksmart", mood:"social", genre:"comedy", time:"long", description:"Study buddies on wild night." },
  
    // SOCIAL + DRAMA + LONG
    { title: "Friendship Trials", mood:"social", genre:"drama", time:"long", description:"Group faces life’s challenges." },
    { title: "Group Therapy", mood:"social", genre:"drama", time:"long", description:"Healing through shared stories." },
    { title: "Shared Past", mood:"social", genre:"drama", time:"long", description:"Old secrets impact present bonds." },
    { title: "Long Reunion", mood:"social", genre:"drama", time:"long", description:"Reunited friends face change." },
    { title: "The Circle", mood:"social", genre:"drama", time:"long", description:"Close-knit group navigates crisis." },
    { title: "The Breakfast Club", mood:"social", genre:"drama", time:"long", description:"Teens from different cliques bond." },
    { title: "Mystic River", mood:"social", genre:"drama", time:"long", description:"Old friends face a tragedy." },
    { title: "Stand by Me", mood:"social", genre:"drama", time:"long", description:"Childhood friends on journey." },
    { title: "The Big Chill", mood:"social", genre:"drama", time:"long", description:"College pals reunite after loss." },
    { title: "August: Osage County", mood:"social", genre:"drama", time:"long", description:"Family drama with sharp dialogue." }
    ];


function getRandomFromArray(array, count = 3) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
}

document.getElementById("recommendBtn").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const genre = document.getElementById("genre").value;
  const resultDiv = document.getElementById("result");
  const restartBtn = document.getElementById("restartBtn");

  if (!mood || !genre) {
    resultDiv.innerHTML = "Please make all selections.";
    return;
  }

  resultDiv.innerHTML = "Loading...";
  setTimeout(() => {
    const matches = movies.filter(movie =>
      movie.mood === mood && movie.genre === genre
    );

    if (matches.length > 0) {
      const selected = getRandomFromArray(matches, 3);
      resultDiv.innerHTML = selected.map(movie =>
        `<p><strong>${movie.title}</strong><br>${movie.description}</p>`
      ).join("");
    } else {
      resultDiv.innerHTML = "No matching movies found. Please try different options.";
    }

    restartBtn.classList.remove("hidden");
  }, 700);
});

