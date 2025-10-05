const data = [
  {
    id: 1,
    name: "Ehituskool",
    description: "Sinu tulevik on ehituskoolis! Kui armastad praktilist tööd, täpsust ja kätega loomist, sobib see Sulle ideaalselt. ",
    icon: "/img/icons/ehituskool.png",
    picture: "/img/pictures/ehituskool.png",
    suggestion: [
      "Olen kannatlik, täpne ja naudin, kui saan oma kätega midagi nullist üles ehitada.", 
      "Mind huvitab hoonete, ruumide, konstruktsioonide ja mööbli loomine ja taastamine.",
      "Tahan leida töö, kus mu töö tulemus on käegakatsutav ja püsib aastakümneid."
    ],
  },
  {
    id: 2,
    name: "IT-Kool",
    description: "Sinu tulevik on IT-koolis! Kui armastad loogikat, probleemide lahendamist ja uue tehnoloogia loomist, sobib see Sulle ideaalselt. ",
    icon: "/img/icons/itkool.png",
    picture: "/img/pictures/itkool.png",
    suggestion: [
      "Olen analüütiline, uudishimulik ja naudin, kui saan keerulisi probleeme lahendada.",
      "Mind huvitab programmeerimine, süsteemide töö ja digimaailma kujundamine.",
      "Tahan tegutseda keskkonnas, kus saan pidevalt õppida uusi tehnoloogiaid ja koos meeskonnaga rakendada neid keerukate IT-lahenduste loomisel."
    ],
  },
  {
    id: 3,
    name: "Toidukool",
    description: "Sinu tulevik on toiduvaldkonnas! Kui armastad loomingulist, head maitset ja meeskonnatööd, sobib see Sulle ideaalselt. ",
    icon: "/img/icons/toidukool.png",
    picture: "/img/pictures/toidukool.png",
    suggestion: [
      "Olen hoolikas ja tähelepanelik, mulle meeldib pakkuda inimestele meeldivaid elamusi läbi toidu ja teeninduse.",
      "Mind huvitab nii toidu valmistamine kui ka selle serveerimine ja külalislahke teenindus.",
      "Tahan töötada keskkonnas, kus minu töö rõõmustab inimesi koheselt erinevate maitseelamustega."
    ],
  },
  {
    id: 4,
    name: "Ärikool",
    description: "Sinu tulevik on ärikoolis! Kui armastad planeerimist, suhtlemist ja tulemuste saavutamist, sobib see Sulle ideaalselt. ",
    icon: "/img/icons/arikool.png",
    picture: "/img/pictures/arikool.png",
    suggestion: [
      "Olen organiseeritud, süsteemne ja naudin, kui saan protsesse sujuvamaks muuta.",
      "Mind huvitab ettevõtete toimimine, töö korraldamine ja inimeste juhtimine.",
      "Tahan töötada keskkonnas, kus tegutsen meeskonnas ja korraldan igapäevaseid tööprotsesse."
    ],
  },
  {
    id: 5,
    name: "Ilukool",
    description: "Sinu tulevik on iluvaldkonnas! Kui armastad ilu, täpsust ja inimestega suhtlemist, sobib see Sulle ideaalselt. ",
    icon: "/img/icons/ilukool.png",
    picture: "/img/pictures/ilukool.png",
    suggestion: [
      "Olen loominguline ja väärtustan ilu ning täpsust väikestes detailides.",
      "Mind huvitab inimeste välimuse, heaolu ja enesekindluse kujundamine.",
      "Tahan töötada hubases ja loomingulises keskkonnas, kus iga klient saab tunda end erilisena."
    ],
  },
  {
    id: 6,
    name: "Tehnikakool",
    description: "Sinu tulevik on tehnikakoolis! Kui armastad mehhaanikat, täpsust ja kätega ehitamist/parandamist, sobib see Sulle ideaalselt. ",
    icon: "/img/icons/tehnikakool.png",
    picture: "/img/pictures/tehnikakool.png",
    suggestion: [
      "Olen loogilise mõtlemisega, täpne ja praktiline ning naudin olukordi, kus saan lahendada tehnilisi ülesandeid ja näidata enda käelist osavust.",
      "Mind huvitab, kuidas masinaid, seadmeid ja süsteeme nii luua, paremaks muuta kui ka hooldada.",
      "Tahan töötada töökojas või tootmiskeskkonnas, kus saan valmistada uusi detaile, kokku panna süsteeme ja hoida need töökorras ning turvalisena."
    ],
  },

  {
    id: 7,
    name: "Turismikool",
    description: "Sinu tulevik on turismikoolis! Kui armastad inimestega suhtlemist, lahenduste leidmist ja korra loomist, sobib see Sulle ideaalselt.",
    icon: "/img/icons/turismikool.png",
    picture: "/img/pictures/turismikool.png",
    suggestion: [
      "Olen avatud ja rõõmsameelne, naudin suhtlemist väga erinevate inimestega.",
      "Mind huvitab puhtuse, korra ja hubasuse loomine, et inimestel oleks meeldiv viibida erinevates keskkondades.",
      "Tahan töötada keskkonnas, kus liigun palju ringi ja saan pidevalt midagi uut kogeda."
    ],
  },
  {
    id: 8,
    name: "Oh ei! Me ei leidnud sulle sobivat osakonda!",
    description: "Proovi uuesti või võta ühendust karjäärinõustajaga!",
    icon: null,
    picture: "/img/pictures/pole_valdkonda.png",
    suggestion: [
      "Olen pigem teoreetilise meelega ja eelistan akadeemilisi aineid praktilistele oskustele.", 
      "Mind köidavad teemad, mis eeldavad rohkem teoreetilist süvenemist kui praktilist tegutsemist.",
      "Tahan õppida ning töötada keskkonnas, kus keskendutakse peamiselt teooriale ja uurimistööle, mitte praktilisele tegevusele."
    ],
  }
];

export const getData = () => data;
