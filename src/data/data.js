const data = [
  {
    id: 1,
    name: "Ehituskool",
    description: "",
    icon: "../assets/img/icons/ehituskool.png",
    picture: "../assets/img/pictures/ehituskool.png",
    suggestion: [
      "Olen kannatlik, täpne ja naudin, kui saan oma kätega midagi nullist üles ehitada.", 
      "Mind huvitab hoonete, ruumide, konstruktsioonide ja mööbli loomine ja taastamine.",
      "Tahan leida töö, kus mu töö tulemus on käegakatsutav ja püsib aastakümneid."
    ],
  },
  {
    id: 2,
    name: "IT-Kool",
    description: "",
    icon: "../assets/img/icons/itkool.png",
    picture: "../assets/img/pictures/itkool.png",
    suggestion: [
      "Olen analüütiline, uudishimulik ja naudin, kui saan keerulisi probleeme lahendada.",
      "Mind huvitab programmeerimine, süsteemide töö ja digimaailma kujundamine.",
      "Tahan tegutseda keskkonnas, kus saan pidevalt õppida uusi tehnoloogiaid ja koos meeskonnaga rakendada neid keerukate IT-lahenduste loomisel."
    ],
  },
  {
    id: 3,
    name: "Toidukool",
    description: "",
    icon: "../assets/img/icons/toidukool.png",
    picture: "../assets/img/pictures/toidukool.png",
    suggestion: [
      "Olen hoolikas ja tähelepanelik, mulle meeldib pakkuda inimestele meeldivaid elamusi läbi toidu ja teeninduse.",
      "Mind huvitab nii toidu valmistamine kui ka selle serveerimine ja külalislahke teenindus.",
      "Tahan töötada keskkonnas, kus minu töö rõõmustab inimesi koheselt erinevate maitseelamustega."
    ],
  },
  {
    id: 4,
    name: "Ärikool",
    description: "",
    icon: "../assets/img/icons/arikool.png",
    picture: "../assets/img/pictures/arikool.png",
    suggestion: [
      "Olen organiseeritud, süsteemne ja naudin, kui saan protsesse sujuvamaks muuta.",
      "Mind huvitab ettevõtete toimimine, töö korraldamine ja inimeste juhtimine.",
      "Tahan töötada keskkonnas, kus tegutsen meeskonnas ja korraldan igapäevaseid tööprotsesse."
    ],
  },
  {
    id: 5,
    name: "Ilukool",
    description: "",
    icon: "../assets/img/icons/ilukool.png",
    picture: "../assets/img/pictures/ilukool.png",
    suggestion: [
      "Olen loominguline ja väärtustan ilu ning täpsust väikestes detailides.",
      "Mind huvitab inimeste välimuse, heaolu ja enesekindluse kujundamine.",
      "Tahan töötada hubases ja loomingulises keskkonnas, kus iga klient saab tunda end erilisena."
    ],
  },
  {
    id: 6,
    name: "Tehnikakool",
    description: "",
    icon: "../assets/img/icons/tehnikakool.png",
    picture: "../assets/img/pictures/tehnikakool.png",
    suggestion: [
      "Olen loogilise mõtlemisega, täpne ja praktiline ning naudin olukordi, kus saan lahendada tehnilisi ülesandeid ja näidata enda käelist osavust.",
      "Mind huvitab, kuidas masinaid, seadmeid ja süsteeme nii luua, paremaks muuta kui ka hooldada.",
      "Tahan töötada töökojas või tootmiskeskkonnas, kus saan valmistada uusi detaile, kokku panna süsteeme ja hoida need töökorras ning turvalisena."
    ],
  },

  {
    id: 7,
    name: "Turismikool",
    description: "",
    icon: "../assets/img/icons/turismikool.png",
    picture: "../assets/img/pictures/turismikool.png",
    suggestion: [
      "Olen avatud ja rõõmsameelne, naudin suhtlemist väga erinevate inimestega.",
      "Mind huvitab puhtuse, korra ja hubasuse loomine, et inimestel oleks meeldiv viibida erinevates keskkondades.",
      "Tahan töötada keskkonnas, kus liigun palju ringi ja saan pidevalt midagi uut kogeda."
    ],
  },
  {
    id: 8,
    name: "Oh ei! Me ei leidnud sulle sobivat osakonda!",
    description: "",
    icon: null,
    picture: "../assets/img/pictures/pole_valdkonda.png",
    suggestion: [
      "Olen pigem teoreetilise meelega ja eelistan akadeemilisi aineid praktilistele oskustele.", 
      "Mind köidavad teemad, mis eeldavad rohkem teoreetilist süvenemist kui praktilist tegutsemist.",
      "Tahan õppida ning töötada keskkonnas, kus keskendutakse peamiselt teooriale ja uurimistööle, mitte praktilisele tegevusele."
    ],
  }
];

export const getData = () => data;
