// World Cup 2026 Data
const worldCupData = {
  groups: {
    A: [
      { code: "MEX", name: "Mexico", flag: "🇲🇽", rank: 11 },
      { code: "RSA", name: "South Africa", flag: "🇿🇦", rank: 59 },
      { code: "KOR", name: "South Korea", flag: "🇰🇷", rank: 23 },
      { code: "CZE", name: "Czechia", flag: "🇨🇿", rank: 35 },
    ],
    B: [
      { code: "CAN", name: "Canada", flag: "🇨🇦", rank: 40 },
      { code: "BIH", name: "Bosnia & Herz.", flag: "🇧🇦", rank: 50 },
      { code: "QAT", name: "Qatar", flag: "🇶🇦", rank: 62 },
      { code: "SUI", name: "Switzerland", flag: "🇨🇭", rank: 19 },
    ],
    C: [
      { code: "BRA", name: "Brazil", flag: "🇧🇷", rank: 4 },
      { code: "MAR", name: "Morocco", flag: "🇲🇦", rank: 12 },
      { code: "HTI", name: "Haiti", flag: "🇭🇹", rank: 100 },
      { code: "SCO", name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", rank: 39 },
    ],
    D: [
      { code: "US", name: "USA", flag: "🇺🇸", rank: 13 },
      { code: "PAR", name: "Paraguay", flag: "🇵🇾", rank: 55 },
      { code: "AUS", name: "Australia", flag: "🇦🇺", rank: 24 },
      { code: "TUR", name: "Türkiye", flag: "🇹🇷", rank: 28 },
    ],
    E: [
      { code: "GER", name: "Germany", flag: "🇩🇪", rank: 16 },
      { code: "CUW", name: "Curaçao", flag: "🇨🇼", rank: 85 },
      { code: "CIV", name: "Côte d'Ivoire", flag: "🇨🇮", rank: 38 },
      { code: "ECU", name: "Ecuador", flag: "🇪🇨", rank: 27 },
    ],
    F: [
      { code: "NED", name: "Netherlands", flag: "🇳🇱", rank: 7 },
      { code: "JPN", name: "Japan", flag: "🇯🇵", rank: 18 },
      { code: "SWE", name: "Sweden", flag: "🇸🇪", rank: 25 },
      { code: "TUN", name: "Tunisia", flag: "🇹🇳", rank: 26 },
    ],
    G: [
      { code: "BEL", name: "Belgium", flag: "🇧🇪", rank: 8 },
      { code: "EGY", name: "Egypt", flag: "🇪🇬", rank: 34 },
      { code: "IRN", name: "IR Iran", flag: "🇮🇷", rank: 20 },
      { code: "NZL", name: "New Zealand", flag: "🇳🇿", rank: 90 },
    ],
    H: [
      { code: "ESP", name: "Spain", flag: "🇪🇸", rank: 3 },
      { code: "CPV", name: "Cabo Verde", flag: "🇨🇻", rank: 73 },
      { code: "KSA", name: "Saudi Arabia", flag: "🇸🇦", rank: 58 },
      { code: "URU", name: "Uruguay", flag: "🇺🇾", rank: 14 },
    ],
    I: [
      { code: "FRA", name: "France", flag: "🇫🇷", rank: 2 },
      { code: "SEN", name: "Senegal", flag: "🇸🇳", rank: 17 },
      { code: "IRQ", name: "Iraq", flag: "🇮🇶", rank: 68 },
      { code: "NOR", name: "Norway", flag: "🇳🇴", rank: 45 },
    ],
    J: [
      { code: "ARG", name: "Argentina", flag: "🇦🇷", rank: 1 },
      { code: "ALG", name: "Algeria", flag: "🇩🇿", rank: 36 },
      { code: "AUT", name: "Austria", flag: "🇦🇹", rank: 22 },
      { code: "JOR", name: "Jordan", flag: "🇯🇴", rank: 87 },
    ],
    K: [
      { code: "POR", name: "Portugal", flag: "🇵🇹", rank: 6 },
      { code: "COD", name: "Congo DR", flag: "🇨🇩", rank: 52 },
      { code: "UZB", name: "Uzbekistan", flag: "🇺🇿", rank: 75 },
      { code: "COL", name: "Colombia", flag: "🇨🇴", rank: 9 },
    ],
    L: [
      { code: "ENG", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", rank: 5 },
      { code: "CRO", name: "Croatia", flag: "🇭🇷", rank: 10 },
      { code: "GHA", name: "Ghana", flag: "🇬🇭", rank: 60 },
      { code: "PAN", name: "Panama", flag: "🇵🇦", rank: 78 },
    ],
  },

  countryFacts: {
    US: {
      capital: "Washington, D.C.",
      population: "331 million",
      titles: "0 World Cups",
      funFacts: [
        "Hosting World Cup for the second time (first in 1994)",
        "The 1994 World Cup had the highest attendance record ever",
        "US Women's team has won 4 World Cups",
        "Soccer is the 4th most popular sport in the USA",
      ],
    },
    ARG: {
      capital: "Buenos Aires",
      population: "45 million",
      titles: "3 World Cups (1978, 1986, 2022)",
      funFacts: [
        'Diego Maradona\'s "Hand of God" goal in 1986',
        "Lionel Messi finally won the World Cup in 2022",
        "Argentina and Uruguay played the first ever World Cup final in 1930",
        'The national team nickname is "La Albiceleste" (The White and Sky Blue)',
      ],
    },
    BRA: {
      capital: "Brasília",
      population: "214 million",
      titles: "5 World Cups (1958, 1962, 1970, 1994, 2002)",
      funFacts: [
        "Only nation to qualify for every World Cup",
        "Pelé is the only player to win 3 World Cups",
        "Brazil's 1970 team is considered one of the greatest ever",
        "The country practically shuts down during World Cup matches",
      ],
    },
    FRA: {
      capital: "Paris",
      population: "67 million",
      titles: "2 World Cups (1998, 2018)",
      funFacts: [
        "Won their first World Cup as hosts in 1998",
        "Zinedine Zidane was sent off in the 2006 final for a headbutt",
        "Jules Rimet, French FIFA President, established the World Cup tournament in 1930",
        "Youngest team to win the World Cup in modern era (2018)",
      ],
    },
    ESP: {
      capital: "Madrid",
      population: "47 million",
      titles: "1 World Cup (2010)",
      funFacts: [
        'Won 2010 World Cup with a famous "tiki-taka" playing style',
        "Only European team to win World Cup outside Europe",
        "Spain won 3 consecutive major tournaments (Euro 2008, WC 2010, Euro 2012)",
        "La Liga is home to Barcelona and Real Madrid, two of the world's best clubs",
      ],
    },
    GER: {
      capital: "Berlin",
      population: "83 million",
      titles: "4 World Cups (1954, 1974, 1990, 2014)",
      funFacts: [
        "Germany beat Brazil 7-1 in the 2014 semi-final",
        "Most successful European nation in World Cup history",
        "Reached the semi-finals or better in 13 World Cups",
        "The Bundesliga is known for incredible fan culture",
      ],
    },
    ENG: {
      capital: "London",
      population: "56 million",
      titles: "1 World Cup (1966)",
      funFacts: [
        "Invented modern football in the 1860s",
        "Only World Cup win came as hosts in 1966",
        "The Premier League is the most-watched league globally",
        '"Three Lions" and "It\'s Coming Home" are iconic fan anthems',
      ],
    },
    POR: {
      capital: "Lisbon",
      population: "10 million",
      titles: "0 World Cups",
      funFacts: [
        "Cristiano Ronaldo is Portugal's all-time top scorer",
        "Reached semi-finals in 1966 and 2006",
        "Won Euro 2016 despite Ronaldo injured in final",
        "Portugal has one of Europe's best football academies",
      ],
    },
    MEX: {
      capital: "Mexico City",
      population: "128 million",
      titles: "0 World Cups",
      funFacts: [
        "Hosted the World Cup twice (1970, 1986)",
        'The "Azteca" stadium hosted two World Cup finals',
        'Famous for the passionate "Cielito Lindo" fan chant',
        "Mexico has reached the Round of 16 seven consecutive times",
      ],
    },
    URU: {
      capital: "Montevideo",
      population: "3.4 million",
      titles: "2 World Cups (1930, 1950)",
      funFacts: [
        "Won the first-ever World Cup in 1930 at home in Montevideo",
        "Won 2 of the first 4 World Cups — the dominant force of early football",
        'Ghiggia\'s 1950 winner against Brazil in front of 200,000 fans is the "Maracanazo"',
        "Smallest country by population to win multiple World Cups",
      ],
    },
    CRC: {
      capital: "San José",
      population: "5.2 million",
      titles: "0 World Cups",
      funFacts: [
        "Shocked the world reaching quarter-finals in 2014",
        "No military since 1949 - most peaceful nation in Americas",
        'Known for "La Sele" passionate fans',
        "Most biodiverse country per square kilometer",
      ],
    },
    NGA: {
      capital: "Abuja",
      population: "206 million",
      titles: "0 World Cups",
      funFacts: [
        "Africa's largest economy and most populous country",
        'Known as the "Giant of Africa"',
        "Reached World Cup Round of 16 in 1994, beaten by Italy",
        "Jay-Jay Okocha was one of Africa's greatest midfielders",
      ],
    },
    SWE: {
      capital: "Stockholm",
      population: "10.4 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached World Cup final in 1958; finished 3rd in 1994",
        "Zlatan Ibrahimović is their all-time leading scorer",
        "Known for technical football and strong defensive organization",
        "Won Olympic gold in football at the 1948 London Games",
      ],
    },
    AUS: {
      capital: "Canberra",
      population: "25.7 million",
      titles: "0 World Cups",
      funFacts: [
        "Moved from Oceania to Asian confederation in 2006",
        "Reached Round of 16 in 2006 World Cup",
        "Tim Cahill's bicycle kick against the Netherlands in 2014 was voted best goal of the tournament",
        "Known for fighting spirit and never-say-die attitude",
      ],
    },
    SRB: {
      capital: "Belgrade",
      population: "6.7 million",
      titles: "0 World Cups",
      funFacts: [
        "Yugoslavia won Olympic gold at the 1960 Rome Games before the country's breakup",
        "Known for producing world-class defensive players",
        "Reached World Cup quarterfinals in 1930 and 1962",
        "Strong rivalry with Croatia and Bosnia",
      ],
    },
    SUI: {
      capital: "Bern",
      population: "8.7 million",
      titles: "0 World Cups",
      funFacts: [
        'Hosted the World Cup in 1954 — the legendary "Miracle of Bern" final',
        "Beat France 5-2 in the 1954 quarter-final, a record World Cup victory",
        "Known for disciplined and tactical approach to the game",
        "Consistent World Cup qualifiers known for giant-killing performances",
      ],
    },
    CMR: {
      capital: "Yaoundé",
      population: "27.9 million",
      titles: "0 World Cups",
      funFacts: [
        "First African team to reach the World Cup quarterfinals (1990)",
        "Samuel Eto'o is their greatest striker ever",
        'Known as the "Indomitable Lions"',
        "Won African Cup of Nations 5 times",
      ],
    },
    DEN: {
      capital: "Copenhagen",
      population: "5.9 million",
      titles: "0 World Cups",
      funFacts: [
        "Had tragic moment in Euro 2020 when Eriksen collapsed on the pitch",
        "Reached World Cup quarterfinals in 1998, beaten by Brazil",
        "Known for organized, disciplined defensive play",
        "Strong Scandinavian football tradition",
      ],
    },
    TUN: {
      capital: "Tunis",
      population: "12.1 million",
      titles: "0 World Cups",
      funFacts: [
        "First African nation to WIN a World Cup match, beating Mexico 3-1 in 1978",
        "Won African Cup of Nations 1 time",
        "Known for underdog spirit",
        "Strong youth development program",
      ],
    },
    PER: {
      capital: "Lima",
      population: "33.4 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached World Cup quarterfinals in 1970, losing to eventual winners Brazil",
        "Won Copa América 2 times (1939, 1975)",
        "Home of the Amazon rainforest",
        "Known for exciting attacking football",
      ],
    },
    JPN: {
      capital: "Tokyo",
      population: "123 million",
      titles: "0 World Cups",
      funFacts: [
        "Hosted the World Cup in 2002 (shared with South Korea)",
        "Reached quarterfinals in 2002 - best performance",
        "Known for disciplined and technical play",
        "Women's team won World Cup in 2011",
      ],
    },
    CRO: {
      capital: "Zagreb",
      population: "3.9 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached World Cup final in 2018 - incredible for small nation",
        "Only 30 years old as independent nation",
        "Lost the 2018 final to France 2-4, with Mandzukic scoring both for and against Croatia",
        "Produced Modrić and Rakitić world-class players",
      ],
    },
    MAR: {
      capital: "Rabat",
      population: "37 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached World Cup semifinals in 2022 - best African performance",
        "Won African Cup of Nations in 1976",
        'Known as the "Atlas Lions"',
        "Hakim Ziyech is one of their brightest stars",
      ],
    },
    NED: {
      capital: "Amsterdam",
      population: "17.5 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached World Cup final 3 times (1974, 1978, 2010)",
        'Pioneers of "Total Football" philosophy',
        "Johan Cruyff revolutionized the game",
        "Famous for attacking, creative football",
      ],
    },
    POL: {
      capital: "Warsaw",
      population: "38 million",
      titles: "0 World Cups",
      funFacts: [
        "Robert Lewandowski is one of the world's best strikers",
        "Won Olympic gold medals in football",
        "Reached World Cup quarterfinals in 1974",
        "Strong Central European football tradition",
      ],
    },
    CHI: {
      capital: "Santiago",
      population: "19.1 million",
      titles: "0 World Cups",
      funFacts: [
        "Won Copa América twice (2015, 2016)",
        "Reached World Cup semifinals in 1962",
        "Alexis Sánchez brought international attention",
        "Known for passionate fans and attacking style",
      ],
    },
    SEN: {
      capital: "Dakar",
      population: "17.1 million",
      titles: "0 World Cups",
      funFacts: [
        "Shocked the world reaching quarterfinals in 2002",
        "Won the African Cup of Nations in 2022 (AFCON 2021)",
        'Known as the "Teranga Lions"',
        "Sadio Mané is one of the world's best players",
      ],
    },
    KOR: {
      capital: "Seoul",
      population: "51.7 million",
      titles: "0 World Cups",
      funFacts: [
        "Hosted the World Cup in 2002 (shared with Japan)",
        "Reached World Cup semifinals in 2002",
        "Known for discipline, hard work, and never giving up",
        "Son Heung-min is one of their greatest modern players",
      ],
    },
    ECU: {
      capital: "Quito",
      population: "17.8 million",
      titles: "0 World Cups",
      funFacts: [
        'Named after the Equator — "Ecuador" means equator in Spanish',
        "Reached Round of 16 in 2006",
        "Home to Galápagos Islands and the Amazon rainforest",
        "Built team largely with domestic players",
      ],
    },
    BEL: {
      capital: "Brussels",
      population: "11.6 million",
      titles: "0 World Cups",
      funFacts: [
        'Had a "Golden Generation" with Hazard, De Bruyne, Lukaku',
        "Reached World Cup semifinals in 2018",
        "Known for attacking flair and technical ability",
        "Produced many top European league players",
      ],
    },
    COL: {
      capital: "Bogotá",
      population: "51.8 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached Round of 16 in 1990, quarterfinals in 2014",
        "Known for passionate fans and attacking football",
        "James Rodríguez put Colombia on map with 6 goals in 2014",
        "One of South America's most exciting teams",
      ],
    },
    GHA: {
      capital: "Accra",
      population: "33.1 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached World Cup quarterfinals in 2010",
        "Won African Cup of Nations 4 times (1963, 1965, 1978, 1982)",
        'Known as the "Black Stars"',
        "One of West Africa's football powerhouses",
      ],
    },
    RSA: {
      capital: "Pretoria",
      population: "59.8 million",
      titles: "0 World Cups",
      funFacts: [
        "Hosted the 2010 World Cup — first African nation ever to host the tournament",
        "The vuvuzela horn became the iconic sound of the 2010 World Cup",
        'Known as "Bafana Bafana" (The Boys The Boys)',
        "Home to Table Mountain, the Big Five, and one of the world's most biodiverse regions",
      ],
    },
    CZE: {
      capital: "Prague",
      population: "10.9 million",
      titles: "0 World Cups",
      funFacts: [
        "As Czechoslovakia, reached the World Cup final in 1934 and 1962",
        "Won Euro 1976 defeating West Germany on penalties with a cheeky Panenka chip",
        "Praha (Prague) is one of Europe's most spectacular medieval capitals",
        "Famous for producing technically gifted midfielders and tactically intelligent players",
      ],
    },
    CAN: {
      capital: "Ottawa",
      population: "38 million",
      titles: "0 World Cups",
      funFacts: [
        "Co-hosting the 2026 World Cup alongside the USA and Mexico",
        "Qualified for their first World Cup in 36 years at Qatar 2022",
        "Alphonso Davies is one of the world's best left-backs",
        "Ice hockey is the national sport but football is the fastest-growing game in the country",
      ],
    },
    BIH: {
      capital: "Sarajevo",
      population: "3.3 million",
      titles: "0 World Cups",
      funFacts: [
        "Made their World Cup debut at Brazil 2014, taking Arsenal's Messi's Argentina to extra time",
        "Edin Džeko is their all-time top scorer — a legendary striker for Roma and Man City",
        "Hosted the 1984 Winter Olympics in Sarajevo",
        "Famous for producing technically gifted, attacking players",
      ],
    },
    QAT: {
      capital: "Doha",
      population: "2.9 million",
      titles: "0 World Cups",
      funFacts: [
        "Hosted the 2022 World Cup — the first ever Middle Eastern nation to host the tournament",
        "As hosts, became the first host nation ever to be eliminated in the group stage",
        "One of the world's largest exporters of liquefied natural gas",
        "Built 7 brand new stadiums for 2022 and invested billions in football infrastructure",
      ],
    },
    HTI: {
      capital: "Port-au-Prince",
      population: "11.4 million",
      titles: "0 World Cups",
      funFacts: [
        "First Caribbean nation ever to qualify for the World Cup, appearing at West Germany 1974",
        "Manno Sanon scored one of the tournament's most celebrated goals against Italy in 1974",
        "First Black republic in history, gaining independence from France in 1804",
        "A deeply passionate footballing nation that has produced players across Europe and the Americas",
      ],
    },
    SCO: {
      capital: "Edinburgh",
      population: "5.5 million",
      titles: "0 World Cups",
      funFacts: [
        "Participated in the very first international football match, vs England in Glasgow in 1872",
        "Part of the UK but competes as a separate FIFA nation",
        'The "Tartan Army" are ranked among the most celebrated football fans in the world',
        "Qualified for 8 World Cups but has never progressed beyond the group stage",
      ],
    },
    PAR: {
      capital: "Asunción",
      population: "7.3 million",
      titles: "0 World Cups",
      funFacts: [
        "Reached the World Cup quarter-finals in 2010, beating Japan in the Round of 16",
        "Won Copa América twice (1953, 1979)",
        "Known for producing tough, physically imposing defenders",
        "One of only two landlocked countries in South America",
      ],
    },
    TUR: {
      capital: "Ankara",
      population: "84 million",
      titles: "0 World Cups",
      funFacts: [
        "Finished 3rd at the 2002 World Cup — their greatest ever achievement",
        "Hakan Şükür scored the fastest ever World Cup goal: just 11 seconds into the 3rd place match",
        "Reached the quarter-finals of Euro 2024 in Germany",
        "A nation that bridges Europe and Asia — geographically and in its football culture",
      ],
    },
    CUW: {
      capital: "Willemstad",
      population: "160,000",
      titles: "0 World Cups",
      funFacts: [
        "One of the smallest nations by population ever to qualify for a World Cup",
        "A constituent country of the Kingdom of the Netherlands, in the southern Caribbean",
        "Has produced professional players who have played in European leagues",
        "Their qualification is one of the great sporting achievements in CONCACAF history",
      ],
    },
    CIV: {
      capital: "Yamoussoukro",
      population: "27.5 million",
      titles: "0 World Cups",
      funFacts: [
        "Didier Drogba is their greatest ever player — a Premier League and Champions League legend",
        "Won the Africa Cup of Nations in 1992, 2015, and 2024",
        'The legendary "Elephants" generation featured Drogba, Yaya Touré, Kolo Touré and Didier Zokora',
        'Known as "Les Éléphants" — one of Africa\'s most consistent World Cup nations',
      ],
    },
    NZL: {
      capital: "Wellington",
      population: "5 million",
      titles: "0 World Cups",
      funFacts: [
        "Co-hosted the 2023 FIFA Women's World Cup with Australia",
        'Nicknamed the "All Whites" — a nod to the iconic All Blacks rugby team',
        "Went unbeaten at South Africa 2010, drawing all three group games including Italy",
        "One of the great sporting nations: world champions in rugby, cricket, and rowing",
      ],
    },
    EGY: {
      capital: "Cairo",
      population: "104 million",
      titles: "0 World Cups",
      funFacts: [
        "Most successful nation in Africa Cup of Nations history with 7 titles",
        "Mohamed Salah is one of the world's most prolific and celebrated goalscorers",
        "Home of the Pyramids of Giza, one of the Seven Wonders of the Ancient World",
        "Egypt made their first World Cup appearance in 1934 — Africa's first ever",
      ],
    },
    IRN: {
      capital: "Tehran",
      population: "87 million",
      titles: "0 World Cups",
      funFacts: [
        "Most prolific World Cup qualifier in Asia with six appearances",
        "Celebrated a famous 2-0 win over the USA at France 1998 in a politically charged match",
        "Ali Daei was the first footballer in history to score 100 international goals",
        'Known as "Team Melli" — football is the most popular sport across all of Iran',
      ],
    },
    CPV: {
      capital: "Praia",
      population: "560,000",
      titles: "0 World Cups",
      funFacts: [
        "First ever World Cup qualification — a historic achievement for this small Atlantic island nation",
        "A Portuguese-speaking archipelago off the West African coast",
        "Known for producing players who represent major European national teams",
        'The "Blue Sharks" rose dramatically in African football rankings in recent years',
      ],
    },
    KSA: {
      capital: "Riyadh",
      population: "35 million",
      titles: "0 World Cups",
      funFacts: [
        "Pulled off one of the greatest World Cup upsets, beating Messi's Argentina 2-1 at Qatar 2022",
        "Saudi Arabia will host the 2034 FIFA World Cup",
        "Signed Cristiano Ronaldo, Neymar, Benzema and dozens of world stars for the Saudi Pro League",
        "Five-time Asian Cup winners — the most successful Asian nation",
      ],
    },
    IRQ: {
      capital: "Baghdad",
      population: "42 million",
      titles: "0 World Cups",
      funFacts: [
        "Won the 2007 AFC Asian Cup as an extraordinary underdog — a moment of national joy",
        "Made their only previous World Cup appearance at Mexico 1986",
        "Football is the heartbeat of Iraqi culture across generations",
        "Yunis Mahmoud's header won the 2007 Asian Cup final — one of Asia's most iconic goals",
      ],
    },
    NOR: {
      capital: "Oslo",
      population: "5.4 million",
      titles: "0 World Cups",
      funFacts: [
        "Erling Haaland is one of the most prolific goalscorers in football history",
        "Memorably beat Brazil 4-2 at the 1998 World Cup in a stunning upset",
        "Won Olympic gold in football at the 1952 Helsinki Games",
        "One of the world's wealthiest nations thanks to North Sea oil and gas",
      ],
    },
    ALG: {
      capital: "Algiers",
      population: "45 million",
      titles: "0 World Cups",
      funFacts: [
        "Won the 2019 Africa Cup of Nations in dominant, unbeaten fashion",
        "Riyad Mahrez won the Premier League with Manchester City and is their greatest modern player",
        "Beat West Germany 2-1 at Spain 1982 in one of the biggest upsets in World Cup history",
        "Reached the World Cup Round of 16 at Brazil 2014, losing to Germany after extra time",
      ],
    },
    AUT: {
      capital: "Vienna",
      population: "9.1 million",
      titles: "0 World Cups",
      funFacts: [
        "Finished 3rd at the 1954 World Cup in Switzerland — their greatest achievement",
        "David Alaba is their most celebrated modern player, winning Champions League with Bayern and Real Madrid",
        'The 1930s "Wunderteam" under Hugo Meisl was considered one of the greatest teams in history',
        "Vienna is the city of Mozart, Beethoven, and one of Europe's most liveable capitals",
      ],
    },
    JOR: {
      capital: "Amman",
      population: "10.2 million",
      titles: "0 World Cups",
      funFacts: [
        "First ever World Cup qualification — a landmark moment for Arab and Asian football",
        "Reached the 2023 AFC Asian Cup Final, losing narrowly to Qatar",
        "Home of Petra, one of the Seven Wonders of the World and a UNESCO World Heritage Site",
        "Rapidly developing football infrastructure backed by passionate national support",
      ],
    },
    COD: {
      capital: "Kinshasa",
      population: "102 million",
      titles: "0 World Cups",
      funFacts: [
        "As Zaire in 1974, became the first sub-Saharan African nation to appear at a World Cup",
        "Won the Africa Cup of Nations twice (1968, 1974) as Congo-Kinshasa and Zaire",
        'The "Leopards" are consistently one of Africa\'s highest-ranked nations',
        "Home to the Congo River — the world's deepest river — and extraordinary biodiversity",
      ],
    },
    UZB: {
      capital: "Tashkent",
      population: "36 million",
      titles: "0 World Cups",
      funFacts: [
        "First ever World Cup qualification — a historic moment for Central Asian football",
        "Reached the 2023 AFC Asian Cup quarter-finals in a breakthrough performance",
        "Home to the legendary Silk Road cities of Samarkand and Bukhara",
        "One of the fastest-growing football programmes in the Asian confederation",
      ],
    },
    PAN: {
      capital: "Panama City",
      population: "4.3 million",
      titles: "0 World Cups",
      funFacts: [
        "Made their historic World Cup debut at Russia 2018 — the greatest moment in Panamanian football",
        "Roman Torres scored Panama's first ever World Cup goal — a national celebration",
        "Famous for the Panama Canal, connecting the Atlantic and Pacific Oceans",
        "Known for spirited, disciplined defending and passionate Central American support",
      ],
    },
  },

  matches: [
    // Group A — Mexico City · Dallas · Los Angeles · Miami
    {
      home: "MEX",
      away: "RSA",
      date: "2026-06-11",
      time: "21:00",
      timezone: "America/Mexico_City",
      venue: "Estadio Azteca, Mexico City",
      status: "upcoming",
      group: "A",
    },
    {
      home: "KOR",
      away: "CZE",
      date: "2026-06-11",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "A",
    },
    {
      home: "MEX",
      away: "CZE",
      date: "2026-06-17",
      time: "21:00",
      timezone: "America/Los_Angeles",
      venue: "SoFi Stadium, Los Angeles",
      status: "upcoming",
      group: "A",
    },
    {
      home: "RSA",
      away: "KOR",
      date: "2026-06-17",
      time: "18:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "A",
    },
    {
      home: "MEX",
      away: "KOR",
      date: "2026-06-23",
      time: "22:00",
      timezone: "America/Mexico_City",
      venue: "Estadio Azteca, Mexico City",
      status: "upcoming",
      group: "A",
    },
    {
      home: "CZE",
      away: "RSA",
      date: "2026-06-23",
      time: "22:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "A",
    },

    // Group B — Toronto · Philadelphia · New York
    {
      home: "CAN",
      away: "SUI",
      date: "2026-06-12",
      time: "19:00",
      timezone: "America/Toronto",
      venue: "BMO Field, Toronto",
      status: "upcoming",
      group: "B",
    },
    {
      home: "BIH",
      away: "QAT",
      date: "2026-06-12",
      time: "16:00",
      timezone: "America/New_York",
      venue: "Lincoln Financial Field, Philadelphia",
      status: "upcoming",
      group: "B",
    },
    {
      home: "CAN",
      away: "QAT",
      date: "2026-06-18",
      time: "19:00",
      timezone: "America/Toronto",
      venue: "BMO Field, Toronto",
      status: "upcoming",
      group: "B",
    },
    {
      home: "SUI",
      away: "BIH",
      date: "2026-06-18",
      time: "16:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "B",
    },
    {
      home: "CAN",
      away: "BIH",
      date: "2026-06-24",
      time: "22:00",
      timezone: "America/Toronto",
      venue: "BMO Field, Toronto",
      status: "upcoming",
      group: "B",
    },
    {
      home: "QAT",
      away: "SUI",
      date: "2026-06-24",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Lincoln Financial Field, Philadelphia",
      status: "upcoming",
      group: "B",
    },

    // Group C — New York · Boston · San Francisco
    {
      home: "BRA",
      away: "SCO",
      date: "2026-06-13",
      time: "21:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "C",
    },
    {
      home: "MAR",
      away: "HTI",
      date: "2026-06-13",
      time: "18:00",
      timezone: "America/New_York",
      venue: "Gillette Stadium, Boston",
      status: "upcoming",
      group: "C",
    },
    {
      home: "BRA",
      away: "HTI",
      date: "2026-06-19",
      time: "21:00",
      timezone: "America/Los_Angeles",
      venue: "Levi's Stadium, San Francisco",
      status: "upcoming",
      group: "C",
    },
    {
      home: "SCO",
      away: "MAR",
      date: "2026-06-19",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "Arrowhead Stadium, Kansas City",
      status: "upcoming",
      group: "C",
    },
    {
      home: "BRA",
      away: "MAR",
      date: "2026-06-25",
      time: "22:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "C",
    },
    {
      home: "HTI",
      away: "SCO",
      date: "2026-06-25",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Gillette Stadium, Boston",
      status: "upcoming",
      group: "C",
    },

    // Group D — Dallas · Houston · Miami
    {
      home: "US",
      away: "TUR",
      date: "2026-06-13",
      time: "21:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "D",
    },
    {
      home: "PAR",
      away: "AUS",
      date: "2026-06-13",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "D",
    },
    {
      home: "US",
      away: "AUS",
      date: "2026-06-19",
      time: "21:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "D",
    },
    {
      home: "TUR",
      away: "PAR",
      date: "2026-06-19",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "D",
    },
    {
      home: "US",
      away: "PAR",
      date: "2026-06-25",
      time: "22:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "D",
    },
    {
      home: "AUS",
      away: "TUR",
      date: "2026-06-25",
      time: "22:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "D",
    },

    // Group E — New York · Atlanta · San Francisco
    {
      home: "GER",
      away: "ECU",
      date: "2026-06-14",
      time: "21:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "E",
    },
    {
      home: "CIV",
      away: "CUW",
      date: "2026-06-14",
      time: "18:00",
      timezone: "America/New_York",
      venue: "Mercedes-Benz Stadium, Atlanta",
      status: "upcoming",
      group: "E",
    },
    {
      home: "GER",
      away: "CIV",
      date: "2026-06-20",
      time: "21:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "E",
    },
    {
      home: "ECU",
      away: "CUW",
      date: "2026-06-20",
      time: "18:00",
      timezone: "America/Los_Angeles",
      venue: "Levi's Stadium, San Francisco",
      status: "upcoming",
      group: "E",
    },
    {
      home: "GER",
      away: "CUW",
      date: "2026-06-26",
      time: "22:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "E",
    },
    {
      home: "CIV",
      away: "ECU",
      date: "2026-06-26",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Mercedes-Benz Stadium, Atlanta",
      status: "upcoming",
      group: "E",
    },

    // Group F — Miami · New York · Kansas City
    {
      home: "NED",
      away: "TUN",
      date: "2026-06-14",
      time: "21:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "F",
    },
    {
      home: "JPN",
      away: "SWE",
      date: "2026-06-14",
      time: "18:00",
      timezone: "America/Los_Angeles",
      venue: "SoFi Stadium, Los Angeles",
      status: "upcoming",
      group: "F",
    },
    {
      home: "NED",
      away: "SWE",
      date: "2026-06-20",
      time: "21:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "F",
    },
    {
      home: "TUN",
      away: "JPN",
      date: "2026-06-20",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "Arrowhead Stadium, Kansas City",
      status: "upcoming",
      group: "F",
    },
    {
      home: "NED",
      away: "JPN",
      date: "2026-06-26",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "F",
    },
    {
      home: "SWE",
      away: "TUN",
      date: "2026-06-26",
      time: "22:00",
      timezone: "America/Los_Angeles",
      venue: "SoFi Stadium, Los Angeles",
      status: "upcoming",
      group: "F",
    },

    // Group G — Philadelphia · Houston · Kansas City
    {
      home: "BEL",
      away: "NZL",
      date: "2026-06-15",
      time: "21:00",
      timezone: "America/New_York",
      venue: "Lincoln Financial Field, Philadelphia",
      status: "upcoming",
      group: "G",
    },
    {
      home: "IRN",
      away: "EGY",
      date: "2026-06-15",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "G",
    },
    {
      home: "BEL",
      away: "IRN",
      date: "2026-06-21",
      time: "21:00",
      timezone: "America/New_York",
      venue: "Gillette Stadium, Boston",
      status: "upcoming",
      group: "G",
    },
    {
      home: "NZL",
      away: "EGY",
      date: "2026-06-21",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "Arrowhead Stadium, Kansas City",
      status: "upcoming",
      group: "G",
    },
    {
      home: "BEL",
      away: "EGY",
      date: "2026-06-27",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Lincoln Financial Field, Philadelphia",
      status: "upcoming",
      group: "G",
    },
    {
      home: "IRN",
      away: "NZL",
      date: "2026-06-27",
      time: "22:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "G",
    },

    // Group H — Miami · New York · Dallas
    {
      home: "ESP",
      away: "URU",
      date: "2026-06-15",
      time: "21:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "H",
    },
    {
      home: "KSA",
      away: "CPV",
      date: "2026-06-15",
      time: "18:00",
      timezone: "America/Los_Angeles",
      venue: "Lumen Field, Seattle",
      status: "upcoming",
      group: "H",
    },
    {
      home: "ESP",
      away: "KSA",
      date: "2026-06-21",
      time: "21:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "H",
    },
    {
      home: "URU",
      away: "CPV",
      date: "2026-06-21",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "H",
    },
    {
      home: "ESP",
      away: "CPV",
      date: "2026-06-27",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "H",
    },
    {
      home: "URU",
      away: "KSA",
      date: "2026-06-27",
      time: "22:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "H",
    },

    // Group I — Atlanta · Los Angeles · Houston
    {
      home: "FRA",
      away: "NOR",
      date: "2026-06-16",
      time: "21:00",
      timezone: "America/New_York",
      venue: "Mercedes-Benz Stadium, Atlanta",
      status: "upcoming",
      group: "I",
    },
    {
      home: "SEN",
      away: "IRQ",
      date: "2026-06-16",
      time: "18:00",
      timezone: "America/Los_Angeles",
      venue: "SoFi Stadium, Los Angeles",
      status: "upcoming",
      group: "I",
    },
    {
      home: "FRA",
      away: "IRQ",
      date: "2026-06-22",
      time: "21:00",
      timezone: "America/Los_Angeles",
      venue: "Levi's Stadium, San Francisco",
      status: "upcoming",
      group: "I",
    },
    {
      home: "NOR",
      away: "SEN",
      date: "2026-06-22",
      time: "18:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "I",
    },
    {
      home: "FRA",
      away: "SEN",
      date: "2026-06-28",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Mercedes-Benz Stadium, Atlanta",
      status: "upcoming",
      group: "I",
    },
    {
      home: "NOR",
      away: "IRQ",
      date: "2026-06-28",
      time: "22:00",
      timezone: "America/Los_Angeles",
      venue: "SoFi Stadium, Los Angeles",
      status: "upcoming",
      group: "I",
    },

    // Group J — New York · Miami · Dallas · Boston
    {
      home: "ARG",
      away: "JOR",
      date: "2026-06-16",
      time: "21:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "J",
    },
    {
      home: "ALG",
      away: "AUT",
      date: "2026-06-16",
      time: "18:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "J",
    },
    {
      home: "ARG",
      away: "AUT",
      date: "2026-06-22",
      time: "21:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "J",
    },
    {
      home: "JOR",
      away: "ALG",
      date: "2026-06-22",
      time: "18:00",
      timezone: "America/New_York",
      venue: "Gillette Stadium, Boston",
      status: "upcoming",
      group: "J",
    },
    {
      home: "ARG",
      away: "ALG",
      date: "2026-06-28",
      time: "22:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "J",
    },
    {
      home: "AUT",
      away: "JOR",
      date: "2026-06-28",
      time: "22:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "J",
    },

    // Group K — Portugal's Group! New York · Houston · Los Angeles
    {
      home: "POR",
      away: "COD",
      date: "2026-06-17",
      time: "19:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "K",
    },
    {
      home: "UZB",
      away: "COL",
      date: "2026-06-17",
      time: "16:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "K",
    },
    {
      home: "POR",
      away: "UZB",
      date: "2026-06-23",
      time: "19:00",
      timezone: "America/New_York",
      venue: "Hard Rock Stadium, Miami",
      status: "upcoming",
      group: "K",
    },
    {
      home: "COL",
      away: "COD",
      date: "2026-06-23",
      time: "16:00",
      timezone: "America/Los_Angeles",
      venue: "SoFi Stadium, Los Angeles",
      status: "upcoming",
      group: "K",
    },
    {
      home: "COL",
      away: "POR",
      date: "2026-06-29",
      time: "22:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "K",
    },
    {
      home: "COD",
      away: "UZB",
      date: "2026-06-29",
      time: "22:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "K",
    },

    // Group L — Dallas · Vancouver · New York
    {
      home: "ENG",
      away: "PAN",
      date: "2026-06-18",
      time: "21:00",
      timezone: "America/Chicago",
      venue: "AT&T Stadium, Dallas",
      status: "upcoming",
      group: "L",
    },
    {
      home: "CRO",
      away: "GHA",
      date: "2026-06-18",
      time: "18:00",
      timezone: "America/Vancouver",
      venue: "BC Place, Vancouver",
      status: "upcoming",
      group: "L",
    },
    {
      home: "ENG",
      away: "GHA",
      date: "2026-06-24",
      time: "19:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "L",
    },
    {
      home: "PAN",
      away: "CRO",
      date: "2026-06-24",
      time: "16:00",
      timezone: "America/Chicago",
      venue: "NRG Stadium, Houston",
      status: "upcoming",
      group: "L",
    },
    {
      home: "ENG",
      away: "CRO",
      date: "2026-06-29",
      time: "22:00",
      timezone: "America/New_York",
      venue: "MetLife Stadium, New York",
      status: "upcoming",
      group: "L",
    },
    {
      home: "GHA",
      away: "PAN",
      date: "2026-06-29",
      time: "22:00",
      timezone: "America/Vancouver",
      venue: "BC Place, Vancouver",
      status: "upcoming",
      group: "L",
    },
  ],
};

// Tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");

    const filtersContainer = document.getElementById("filtersContainer");
    filtersContainer.style.display =
      btn.dataset.tab === "schedule" ? "flex" : "none";

    if (btn.dataset.tab === "groups") renderGroups();
    if (btn.dataset.tab === "standings") renderStandings();
    if (btn.dataset.tab === "bracket") renderBracket();
  });
});

// Favourites (persisted to localStorage)
let favourites = new Set(
  JSON.parse(localStorage.getItem("wc2026_favs") || '["POR"]'),
);
function saveFavourites() {
  localStorage.setItem("wc2026_favs", JSON.stringify([...favourites]));
}
function toggleFavourite(code) {
  if (code === "POR") return; // Portugal is always in
  if (favourites.has(code)) {
    favourites.delete(code);
  } else {
    favourites.add(code);
  }
  saveFavourites();
  renderMatches("scheduleMatches");
  renderMatches("liveMatches", "live");
}

// Global filter state
let currentGroupFilter = "all";
let currentDateFilter = "all";
let currentCountryFilter = "all";
let showFavsOnly = false;
let modalTrigger = null;

// Update active filter badges
function updateFilterBadges() {
  const badgesContainer = document.getElementById("filterBadges");
  const filtersDisplay = document.getElementById("activeFilters");
  const badges = [];

  if (currentGroupFilter !== "all") {
    badges.push(
      `<div class="filter-badge" onclick="clearGroupFilter()">📊 Group ${currentGroupFilter} <span class="filter-badge-close">✕</span></div>`,
    );
  }

  if (currentDateFilter !== "all") {
    const dateObj = new Date(currentDateFilter);
    const dateStr = dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    badges.push(
      `<div class="filter-badge" onclick="clearDateFilter()">📅 ${dateStr} <span class="filter-badge-close">✕</span></div>`,
    );
  }

  if (currentCountryFilter !== "all") {
    const team = findTeam(currentCountryFilter);
    badges.push(
      `<div class="filter-badge" onclick="clearCountryFilter()">${team.flag} ${team.name} <span class="filter-badge-close">✕</span></div>`,
    );
  }

  badgesContainer.innerHTML = badges.join("");
  filtersDisplay.style.display = badges.length > 0 ? "block" : "none";
}

// Clear individual filters
function clearGroupFilter() {
  currentGroupFilter = "all";
  document
    .querySelectorAll("#groupMenu [data-filter]")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelector('#groupMenu [data-filter="all"]')
    .classList.add("active");
  updateFilterBadges();
  renderMatches("scheduleMatches");
  renderMatches("liveMatches", "live");
}

function clearDateFilter() {
  currentDateFilter = "all";
  document
    .querySelectorAll("#dateMenu [data-filter-date]")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelector('#dateMenu [data-filter-date="all"]')
    .classList.add("active");
  updateFilterBadges();
  renderMatches("scheduleMatches");
  renderMatches("liveMatches", "live");
}

function clearCountryFilter() {
  currentCountryFilter = "all";
  document
    .querySelectorAll("#countryMenu [data-filter-country]")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelector('#countryMenu [data-filter-country="all"]')
    .classList.add("active");
  const btn = document.getElementById("portugalOnlyBtn");
  if (btn) btn.classList.remove("active");
  updateFilterBadges();
  renderMatches("scheduleMatches");
  renderMatches("liveMatches", "live");
}

// Render matches with filtering
function renderMatches(containerId, filter = null) {
  const container = document.getElementById(containerId);
  let matches = worldCupData.matches;

  if (filter === "live") {
    matches = matches.filter((m) => m.status === "live");
  }

  if (currentGroupFilter !== "all") {
    matches = matches.filter((m) => m.group === currentGroupFilter);
  }

  if (currentDateFilter !== "all") {
    matches = matches.filter((m) => m.date === currentDateFilter);
  }

  if (currentCountryFilter !== "all") {
    matches = matches.filter(
      (m) => m.home === currentCountryFilter || m.away === currentCountryFilter,
    );
  }

  if (showFavsOnly) {
    matches = matches.filter(
      (m) => favourites.has(m.home) || favourites.has(m.away),
    );
  }

  // Sort: Portugal matches first, then by date
  matches.sort((a, b) => {
    const aHasPortugal = a.home === "POR" || a.away === "POR";
    const bHasPortugal = b.home === "POR" || b.away === "POR";
    if (aHasPortugal && !bHasPortugal) return -1;
    if (!aHasPortugal && bHasPortugal) return 1;
    return new Date(a.date) - new Date(b.date);
  });

  if (matches.length === 0) {
    if (filter === "live") {
      container.innerHTML = `
        <div class="loading" style="padding: 4rem 2rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">⏳</div>
          <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700; margin-bottom: 0.5rem;">No Live Matches Right Now</p>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">The tournament kicks off on <strong style="color: var(--accent-gold);">June 11, 2026</strong></p>
          <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.5rem;">Portugal's first match: June 19, 01:00 Lisbon</p>
        </div>`;
    } else {
      container.innerHTML =
        '<div class="loading"><p>No matches for selected filters</p></div>';
    }
    return;
  }

  container.innerHTML = matches
    .map((match) => {
      const homeTeam = findTeam(match.home);
      const awayTeam = findTeam(match.away);
      const lisbonTime = convertToLisbonTime(match);
      const isPortugalMatch = match.home === "POR" || match.away === "POR";
      const isFavMatch =
        favourites.has(match.home) || favourites.has(match.away);

      return `
      <div class="match-card ${isPortugalMatch ? "portugal-match" : isFavMatch ? "fav-match" : ""}" onclick="showMatchDetails('${match.home}', '${match.away}')" role="button" tabindex="0" aria-label="${homeTeam.name} vs ${awayTeam.name}, ${lisbonTime.date} at ${lisbonTime.time} (Lisbon time), ${match.venue}">
        <div class="match-header">
          <span class="match-status status-${match.status}">
            ${match.status === "live" ? "LIVE" : match.status === "finished" ? "FINISHED" : "UPCOMING"}
          </span>
          <span class="match-group">Group ${match.group}</span>
        </div>
        ${isPortugalMatch ? '<div class="portugal-badge">🇵🇹 Your Team</div>' : isFavMatch ? '<div class="portugal-badge fav-badge">⭐ Following</div>' : ""}

        <div class="match-teams">
          <div class="team team-left">
            <span class="team-flag">${homeTeam.flag}</span>
            <div class="team-info">
              <div class="team-name">${homeTeam.name}</div>
              <div class="team-rank">FIFA #${homeTeam.rank}</div>
            </div>
          </div>

          <div class="match-center">
            ${
              match.status === "finished" || match.status === "live"
                ? `<span class="score">${match.homeScore || 0}</span>
                 <span class="match-vs">-</span>
                 <span class="score">${match.awayScore || 0}</span>`
                : `<span class="match-vs">VS</span>`
            }
          </div>

          <div class="team team-right">
            <span class="team-flag">${awayTeam.flag}</span>
            <div class="team-info">
              <div class="team-name">${awayTeam.name}</div>
              <div class="team-rank">FIFA #${awayTeam.rank}</div>
            </div>
          </div>
        </div>

        <div class="match-info">
          <div class="match-time">
            <span class="match-time-icon">📅</span>
            <span>${lisbonTime.date} ${lisbonTime.time}</span>
          </div>
          <div class="match-venue">
            <span>📍</span>
            <span title="${match.venue}">${match.venue}</span>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Render groups
function renderGroups() {
  const container = document.getElementById("groupsContainer");
  container.innerHTML = Object.entries(worldCupData.groups)
    .map(
      ([group, teams]) => `
    <div class="group-card" ${group === "K" ? 'style="border: 2px solid var(--accent-gold); box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);"' : ""}>
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
        <h3 class="group-title" style="margin: 0;">Group ${group}</h3>
        ${group === "K" ? '<span style="background: var(--accent-gold); color: var(--bg-primary); padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">🇵🇹 Your Group</span>' : ""}
      </div>
      <ul class="team-list">
        ${teams
          .map(
            (team, index) => `
          <li class="team-item" onclick="showCountryInfo('${team.code}')" role="button" tabindex="0" aria-label="${team.name}, FIFA Ranking #${team.rank}">
            <span class="team-rank">${index + 1}</span>
            <span class="team-flag-small">${team.flag}</span>
            <span>${team.name}</span>
            <span class="team-stats">FIFA #${team.rank}</span>
          </li>
        `,
          )
          .join("")}
      </ul>
    </div>
  `,
    )
    .join("");
}

// Render standings
function renderStandings() {
  const container = document.getElementById("standingsContainer");

  const banner = `
    <div class="standings-pre-banner">
      <span>⏳</span>
      <span>Tournament starts <strong style="color: var(--accent-gold);">June 11, 2026</strong> — standings update after each match</span>
    </div>`;

  const groups = Object.entries(worldCupData.groups)
    .map(
      ([group, teams]) => `
    <div class="standings-group ${group === "K" ? "portugal-group" : ""}">
      <div class="standings-group-header">
        <span>Group ${group}</span>
        ${group === "K" ? '<span class="your-group-badge">🇵🇹 Your Group</span>' : ""}
      </div>
      <div class="standings-table-wrap">
        <table class="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th class="s-team-col">Team</th>
              <th title="Played">P</th>
              <th title="Won">W</th>
              <th title="Drawn">D</th>
              <th title="Lost">L</th>
              <th title="Goals For">GF</th>
              <th title="Goals Against">GA</th>
              <th title="Goal Difference">GD</th>
              <th title="Points">Pts</th>
            </tr>
          </thead>
          <tbody>
            ${teams
              .map(
                (team, i) => `
              <tr class="${team.code === "POR" ? "portugal-row" : ""}">
                <td>${i + 1}</td>
                <td><div class="s-team-cell"><span class="s-flag">${team.flag}</span><span class="s-name">${team.name}</span></div></td>
                <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
                <td class="s-pts">0</td>
              </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>`,
    )
    .join("");

  container.innerHTML =
    banner + '<div class="standings-grid">' + groups + "</div>";
}

// Show match details with both teams
function showMatchDetails(homeCode, awayCode) {
  const homeTeam = findTeam(homeCode);
  const awayTeam = findTeam(awayCode);
  const homeFacts = worldCupData.countryFacts[homeCode] || {
    capital: "N/A",
    population: "N/A",
    titles: "No World Cups",
    funFacts: ["More information coming soon!"],
  };
  const awayFacts = worldCupData.countryFacts[awayCode] || {
    capital: "N/A",
    population: "N/A",
    titles: "No World Cups",
    funFacts: ["More information coming soon!"],
  };

  const modal = document.getElementById("countryModal");
  const details = document.getElementById("countryDetails");

  details.innerHTML = `
    <h2 id="modalTitle" class="modal-title" style="font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: var(--accent-gold); text-align: center; margin-bottom: 2rem;">Match Details</h2>

    <div class="modal-teams-grid">
      <div class="team-details">
        <div class="country-header">
          <div class="country-flag-large">${homeTeam.flag}</div>
          <h3 class="country-name" style="font-size: 2rem;">${homeTeam.name}</h3>
          <p class="fact-value">FIFA Ranking: #${homeTeam.rank}</p>
        </div>
        <div class="fact-section"><div class="fact-title">Capital</div><div class="fact-value">${homeFacts.capital}</div></div>
        <div class="fact-section"><div class="fact-title">Population</div><div class="fact-value">${homeFacts.population}</div></div>
        <div class="fact-section"><div class="fact-title">World Cup History</div><div class="fact-value">${homeFacts.titles}</div></div>
        <div class="fun-facts">
          <div class="fact-title">⚽ Fun Facts</div>
          <ul>${homeFacts.funFacts
            .slice(0, 3)
            .map((f) => `<li>${f}</li>`)
            .join("")}</ul>
        </div>
      </div>

      <div class="team-details">
        <div class="country-header">
          <div class="country-flag-large">${awayTeam.flag}</div>
          <h3 class="country-name" style="font-size: 2rem;">${awayTeam.name}</h3>
          <p class="fact-value">FIFA Ranking: #${awayTeam.rank}</p>
        </div>
        <div class="fact-section"><div class="fact-title">Capital</div><div class="fact-value">${awayFacts.capital}</div></div>
        <div class="fact-section"><div class="fact-title">Population</div><div class="fact-value">${awayFacts.population}</div></div>
        <div class="fact-section"><div class="fact-title">World Cup History</div><div class="fact-value">${awayFacts.titles}</div></div>
        <div class="fun-facts">
          <div class="fact-title">⚽ Fun Facts</div>
          <ul>${awayFacts.funFacts
            .slice(0, 3)
            .map((f) => `<li>${f}</li>`)
            .join("")}</ul>
        </div>
      </div>
    </div>

    <div style="text-align: center; padding-top: 1.5rem; border-top: 2px solid var(--border);">
      <div style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Head to Head</div>
      <div style="font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: var(--accent-gold);">${homeTeam.name} vs ${awayTeam.name}</div>
    </div>
  `;

  modalTrigger = document.activeElement;
  modal.classList.add("active");
  setTimeout(() => modal.querySelector(".modal-close").focus(), 50);
}

// Show single country info (from Groups tab)
function showCountryInfo(countryCode) {
  const team = findTeam(countryCode);
  const facts = worldCupData.countryFacts[countryCode] || {
    capital: "N/A",
    population: "N/A",
    titles: "No World Cups",
    funFacts: ["More information coming soon!"],
  };

  const modal = document.getElementById("countryModal");
  const details = document.getElementById("countryDetails");

  const isFav = favourites.has(countryCode);
  const isPor = countryCode === "POR";
  details.innerHTML = `
    <div class="country-header">
      <div class="country-flag-large">${team.flag}</div>
      <h2 class="country-name">${team.name}</h2>
      <p class="fact-value">FIFA Ranking: #${team.rank}</p>
      ${
        !isPor
          ? `<button class="fav-toggle-btn${isFav ? " active" : ""}" onclick="toggleFavourite('${countryCode}'); showCountryInfo('${countryCode}')">
        ${isFav ? "⭐ Following" : "☆ Follow Team"}
      </button>`
          : '<div style="margin-top:0.5rem;color:var(--accent-gold);font-size:0.8rem;font-weight:700;">🇵🇹 YOUR TEAM</div>'
      }
    </div>
    <div class="fact-section"><div class="fact-title">Capital</div><div class="fact-value">${facts.capital}</div></div>
    <div class="fact-section"><div class="fact-title">Population</div><div class="fact-value">${facts.population}</div></div>
    <div class="fact-section"><div class="fact-title">World Cup History</div><div class="fact-value">${facts.titles}</div></div>
    <div class="fun-facts">
      <div class="fact-title">⚽ Fun Facts</div>
      <ul>${facts.funFacts.map((f) => `<li>${f}</li>`).join("")}</ul>
    </div>
  `;

  modalTrigger = document.activeElement;
  modal.classList.add("active");
  setTimeout(() => modal.querySelector(".modal-close").focus(), 50);
}

function closeModal() {
  document.getElementById("countryModal").classList.remove("active");
  if (modalTrigger) {
    modalTrigger.focus();
    modalTrigger = null;
  }
}

document.getElementById("countryModal").addEventListener("click", (e) => {
  if (e.target.id === "countryModal") closeModal();
});

// Helper functions
function findTeam(code) {
  for (const teams of Object.values(worldCupData.groups)) {
    const team = teams.find((t) => t.code === code);
    if (team) return team;
  }
  return { name: code, flag: "🏳️", rank: "N/A" };
}

// Convert match time to Lisbon timezone
function convertToLisbonTime(match) {
  const { date, time, timezone } = match;

  const timezoneOffsets = {
    "America/Mexico_City": -5,
    "America/Los_Angeles": -7,
    "America/New_York": -4,
    "America/Chicago": -5,
    "America/Toronto": -4,
    "America/Vancouver": -7,
    "America/Monterrey": -5,
    "Europe/Lisbon": +1,
  };

  const matchOffset = timezoneOffsets[timezone] || 0;
  const lisbonOffset = timezoneOffsets["Europe/Lisbon"];

  const [hours, minutes] = time.split(":").map(Number);
  const [year, month, day] = date.split("-").map(Number);

  // Build UTC timestamp from match local time, then shift to Lisbon
  const utcMs = Date.UTC(year, month - 1, day, hours - matchOffset, minutes);
  const lisbonMs = utcMs + lisbonOffset * 3600000;

  const d = new Date(lisbonMs);
  const h = d.getUTCHours().toString().padStart(2, "0");
  const m = d.getUTCMinutes().toString().padStart(2, "0");
  const lisbonDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);

  return { time: `${h}:${m}`, date: lisbonDate, fullDateTime: d };
}

// Portugal Only quick filter
function filterPortugalOnly() {
  currentCountryFilter = currentCountryFilter === "POR" ? "all" : "POR";

  document
    .querySelectorAll("#countryMenu [data-filter-country]")
    .forEach((b) => b.classList.remove("active"));
  const targetVal = currentCountryFilter === "POR" ? "POR" : "all";
  document
    .querySelector(`#countryMenu [data-filter-country="${targetVal}"]`)
    .classList.add("active");
  document
    .getElementById("portugalOnlyBtn")
    .classList.toggle("active", currentCountryFilter === "POR");
  document
    .getElementById("portugalOnlyBtn")
    .setAttribute("aria-pressed", String(currentCountryFilter === "POR"));

  updateFilterBadges();
  renderMatches("scheduleMatches");
  renderMatches("liveMatches", "live");
}

document
  .getElementById("portugalOnlyBtn")
  .addEventListener("click", filterPortugalOnly);

document.getElementById("myTeamsBtn").addEventListener("click", () => {
  showFavsOnly = !showFavsOnly;
  document
    .getElementById("myTeamsBtn")
    .classList.toggle("active", showFavsOnly);
  document
    .getElementById("myTeamsBtn")
    .setAttribute("aria-pressed", String(showFavsOnly));
  renderMatches("scheduleMatches");
  renderMatches("liveMatches", "live");
});

// Countdown to Portugal's first match (Jun 17 2026 23:00 UTC = Jun 18 00:00 Lisbon)
function updateCountdown() {
  const matchUTC = Date.UTC(2026, 5, 17, 23, 0, 0);
  const diff = matchUTC - Date.now();

  if (diff <= 0) {
    document.getElementById("heroCountdown").innerHTML =
      "<span style=\"color:var(--accent-green);font-size:1.2rem;font-weight:700;font-family:'Bebas Neue',sans-serif;letter-spacing:0.05em;\">⚽ KICK OFF!</span>";
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  document.getElementById("countDays").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("countHours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("countMins").textContent = mins
    .toString()
    .padStart(2, "0");
  document.getElementById("countSecs").textContent = secs
    .toString()
    .padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Keyboard accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.getAttribute("role") === "button"
  ) {
    e.preventDefault();
    e.target.click();
  }
  const modal = document.getElementById("countryModal");
  if (e.key === "Tab" && modal.classList.contains("active")) {
    const focusable = [
      ...modal.querySelectorAll(
        'button, [href], input, select, [tabindex]:not([tabindex="-1"])',
      ),
    ];
    if (focusable.length < 2) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Dropdown toggle functionality
document.getElementById("groupToggle").addEventListener("click", () => {
  const isOpen = document
    .getElementById("groupMenu")
    .classList.toggle("active");
  document.getElementById("groupToggle").classList.toggle("active");
  document
    .getElementById("groupToggle")
    .setAttribute("aria-expanded", String(isOpen));
  document.getElementById("dateToggle").classList.remove("active");
  document.getElementById("countryToggle").classList.remove("active");
  document.getElementById("dateToggle").setAttribute("aria-expanded", "false");
  document
    .getElementById("countryToggle")
    .setAttribute("aria-expanded", "false");
  document.getElementById("dateMenu").classList.remove("active");
  document.getElementById("countryMenu").classList.remove("active");
  document.getElementById("mobileOverlay").classList.remove("active");
});

document.getElementById("dateToggle").addEventListener("click", () => {
  const isOpen = document.getElementById("dateMenu").classList.toggle("active");
  document.getElementById("dateToggle").classList.toggle("active");
  document
    .getElementById("dateToggle")
    .setAttribute("aria-expanded", String(isOpen));
  document.getElementById("groupToggle").classList.remove("active");
  document.getElementById("countryToggle").classList.remove("active");
  document.getElementById("groupToggle").setAttribute("aria-expanded", "false");
  document
    .getElementById("countryToggle")
    .setAttribute("aria-expanded", "false");
  document.getElementById("groupMenu").classList.remove("active");
  document.getElementById("countryMenu").classList.remove("active");
  document.getElementById("mobileOverlay").classList.remove("active");
});

document.getElementById("countryToggle").addEventListener("click", () => {
  const isOpen = document
    .getElementById("countryMenu")
    .classList.toggle("active");
  document.getElementById("countryToggle").classList.toggle("active");
  document
    .getElementById("countryToggle")
    .setAttribute("aria-expanded", String(isOpen));
  document.getElementById("groupToggle").classList.remove("active");
  document.getElementById("dateToggle").classList.remove("active");
  document.getElementById("groupToggle").setAttribute("aria-expanded", "false");
  document.getElementById("dateToggle").setAttribute("aria-expanded", "false");
  document.getElementById("groupMenu").classList.remove("active");
  document.getElementById("dateMenu").classList.remove("active");
  if (window.innerWidth <= 768) {
    document.getElementById("mobileOverlay").classList.toggle("active", isOpen);
  }
});

document.getElementById("mobileOverlay").addEventListener("click", () => {
  document.getElementById("countryMenu").classList.remove("active");
  document.getElementById("countryToggle").classList.remove("active");
  document
    .getElementById("countryToggle")
    .setAttribute("aria-expanded", "false");
  document.getElementById("mobileOverlay").classList.remove("active");
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".filter-dropdown")) {
    document.getElementById("groupMenu").classList.remove("active");
    document.getElementById("dateMenu").classList.remove("active");
    document.getElementById("countryMenu").classList.remove("active");
    document.getElementById("groupToggle").classList.remove("active");
    document.getElementById("dateToggle").classList.remove("active");
    document.getElementById("countryToggle").classList.remove("active");
    document
      .getElementById("groupToggle")
      .setAttribute("aria-expanded", "false");
    document
      .getElementById("dateToggle")
      .setAttribute("aria-expanded", "false");
    document
      .getElementById("countryToggle")
      .setAttribute("aria-expanded", "false");
    document.getElementById("mobileOverlay").classList.remove("active");
  }
});

// Group filter
document.querySelectorAll("#groupMenu [data-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#groupMenu [data-filter]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentGroupFilter = btn.dataset.filter;
    updateFilterBadges();
    renderMatches("scheduleMatches");
    renderMatches("liveMatches", "live");
  });
});

// Date filter
document.querySelectorAll("#dateMenu [data-filter-date]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#dateMenu [data-filter-date]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentDateFilter = btn.dataset.filterDate;
    updateFilterBadges();
    renderMatches("scheduleMatches");
    renderMatches("liveMatches", "live");
  });
});

// Country filter
document
  .querySelectorAll("#countryMenu [data-filter-country]")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("#countryMenu [data-filter-country]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCountryFilter = btn.dataset.filterCountry;
      updateFilterBadges();
      renderMatches("scheduleMatches");
      renderMatches("liveMatches", "live");
    });
  });

// Render knockout bracket placeholder (48-team format: R32 → R16 → QF → SF → Final)
function renderBracket() {
  const container = document.getElementById("bracketContainer");

  function slot(label, isPor) {
    return `
      <div class="bracket-slot${isPor ? " bracket-slot-por" : ""}">
        <span class="bracket-slot-icon">${isPor ? "🇵🇹" : "❓"}</span>
        <span class="bracket-slot-name">${label}</span>
      </div>`;
  }

  function bMatch(matchLabel, homeName, awayName, homePor, awayPor) {
    const isPor = homePor || awayPor;
    return `
      <div class="bracket-match${isPor ? " bracket-match-por" : ""}">
        <div class="bm-label">${matchLabel}</div>
        ${slot(homeName, homePor)}
        <div class="bm-vs">VS</div>
        ${slot(awayName, awayPor)}
      </div>`;
  }

  function round(icon, title, date, matchesHtml, cols) {
    return `
      <div class="bracket-round">
        <div class="bracket-round-hdr">
          <span class="bracket-round-title">${icon} ${title}</span>
          <span class="bracket-round-date">${date}</span>
        </div>
        <div class="bracket-matches bm-cols-${cols}">${matchesHtml}</div>
      </div>`;
  }

  const banner = `
    <div class="standings-pre-banner" style="margin-bottom: 1.5rem;">
      <span>⏳</span>
      <span>32 teams advance from 12 groups. Slots confirmed after group stage ends <strong style="color:var(--accent-gold)">June 29</strong> — 🇵🇹 marks Portugal's potential path</span>
    </div>
    <div class="standings-pre-banner" style="margin-bottom: 1.5rem; font-size: 0.8rem;">
      <span>ℹ️</span>
      <span><strong style="color:var(--text-primary)">Format:</strong> Top 2 from each of 12 groups (24 teams) + 8 best 3rd-place finishers = 32 teams in Round of 32</span>
    </div>`;

  const r32 = round(
    "⚔️",
    "Round of 32",
    "Jul 4 – 7, 2026",
    bMatch("R32-1", "1st Group A", "2nd Group B", false, false) +
      bMatch("R32-2", "1st Group B", "2nd Group A", false, false) +
      bMatch("R32-3", "1st Group C", "2nd Group D", false, false) +
      bMatch("R32-4", "1st Group D", "2nd Group C", false, false) +
      bMatch("R32-5", "1st Group E", "2nd Group F", false, false) +
      bMatch("R32-6", "1st Group F", "2nd Group E", false, false) +
      bMatch("R32-7", "1st Group G", "2nd Group H", false, false) +
      bMatch("R32-8", "1st Group H", "2nd Group G", false, false) +
      bMatch("R32-9", "1st Group I", "2nd Group J", false, false) +
      bMatch("R32-10", "1st Group J", "2nd Group I", false, false) +
      bMatch("R32-11", "1st Group K", "2nd Group L", true, false) +
      bMatch("R32-12", "1st Group L", "2nd Group K", false, true) +
      bMatch("R32-13", "Best 3rd (TBD)", "Best 3rd (TBD)", false, false) +
      bMatch("R32-14", "Best 3rd (TBD)", "Best 3rd (TBD)", false, false) +
      bMatch("R32-15", "Best 3rd (TBD)", "Best 3rd (TBD)", false, false) +
      bMatch("R32-16", "Best 3rd (TBD)", "Best 3rd (TBD)", false, false),
    2,
  );

  const r16 = round(
    "🔥",
    "Round of 16",
    "Jul 10 – 13, 2026",
    bMatch("R16-1", "Winner R32-1", "Winner R32-2", false, false) +
      bMatch("R16-2", "Winner R32-3", "Winner R32-4", false, false) +
      bMatch("R16-3", "Winner R32-5", "Winner R32-6", false, false) +
      bMatch("R16-4", "Winner R32-7", "Winner R32-8", false, false) +
      bMatch("R16-5", "Winner R32-9", "Winner R32-10", false, false) +
      bMatch("R16-6", "Winner R32-11", "Winner R32-12", false, false) +
      bMatch("R16-7", "Winner R32-13", "Winner R32-14", false, false) +
      bMatch("R16-8", "Winner R32-15", "Winner R32-16", false, false),
    2,
  );

  const qf = round(
    "🏅",
    "Quarter Finals",
    "Jul 17 – 18, 2026",
    bMatch("QF 1", "Winner R16-1", "Winner R16-2", false, false) +
      bMatch("QF 2", "Winner R16-3", "Winner R16-4", false, false) +
      bMatch("QF 3", "Winner R16-5", "Winner R16-6", false, false) +
      bMatch("QF 4", "Winner R16-7", "Winner R16-8", false, false),
    2,
  );

  const sf = round(
    "🔥",
    "Semi Finals",
    "Jul 22 – 23, 2026",
    bMatch("SF 1", "Winner QF 1", "Winner QF 2", false, false) +
      bMatch("SF 2", "Winner QF 3", "Winner QF 4", false, false),
    2,
  );

  const final = round(
    "🏆",
    "Final",
    "Jul 26, 2026 · MetLife Stadium, New York",
    bMatch("THE FINAL", "Winner SF 1", "Winner SF 2", false, false),
    1,
  );

  container.innerHTML = banner + r32 + r16 + qf + sf + final;
}

// Initialize
renderMatches("scheduleMatches");
renderMatches("liveMatches", "live");
