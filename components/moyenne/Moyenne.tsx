"use client";

import { useMemo, useState } from "react";
import {
  calculateAverage,
  calculateFG,
  calculateOptionBonus,
  getActiveSubjects,
  parseGrade,
  sections,
  Section,
} from "./moyenne-utils";
import SectionSelector from "./component/SectionSelector";
import OptionInput from "./component/OptionInput";
import GradesGrid from "./component/GradesGrid";
import Sidebar from "./component/Sidebar";
import StatusBar from "./component/StatusBar";
import HeroBadge from "../Hero/HeroBadge";

function getTunisianMessage(moyenne: number): {
  text: string;
  emoji: string;
  color: string;
  image: string;
} {
  if (moyenne === 0)
    return {
      text: "Mazelt ma 7atit chay 😭 Ya weldi 3abbi noutetek w ba3d na7kmou 3lik.",
      emoji: "✏️",
      color: "text-slate-500 dark:text-slate-400",
      image: "/images/abqarino-thinking.png",
    };
  if (moyenne < 5)
    return {
      text: "Akhi... hedhi mouch 7ata contrôle, hedhi s3iba chwaya 💀 Ama l'hamdoullah méfama chay b3id, ma tkhamamch , la3alla fiha 5ira !",
      emoji: "😬",
      color: "text-red-500 dark:text-red-400",
      image: "/images/abqarino-sad.png",
    };
  if (moyenne < 8)
    return {
      text: "Smallah 3lik ya 5ouya! El contrôle y3ayetlek 'Mar7ba bik sidi khouya' 😅 El fayda mouch kifech to7t, el fayda kifch t9oum. Rajaa m3aya, tnajem tsalakha w tfra7na!",
      emoji: "😰",
      color: "text-orange-500 dark:text-orange-400",
      image: "/images/abqarino-sad.png",
    };
  if (moyenne < 9)
    return {
      text: "Makch b3id barcha 😅 Sakkerli hal YouTube w TikTok , w 7el chwaya l kteb! Omk testana fik bech tza8ret !",
      emoji: "😂",
      color: "text-orange-500 dark:text-orange-300",
      image: "/images/abqarino-thinking.png",
    };
  if (moyenne < 10)
    return {
      text: "Ah ya nari, 3al 7afa bel dhabt! 😤 Chwaya hka w chwaya hka. Zid chwaaaya majhoud barka w lem barcha da3wet 5ir!",
      emoji: "😤",
      color: "text-yellow-500 dark:text-yellow-400",
      image: "/images/abqarino-thinking.png",
    };
  if (moyenne < 11)
    return {
      text: "Mna3t! selket selket 😅 Moyenne b d3a l 5ir hedha, ama t3adit! Chwaya grinta fel fac bech tebda tenja7 merte7!",
      emoji: "😅",
      color: "text-yellow-500 dark:text-yellow-300",
      image: "/images/abqarino-happy.png",
    };
  if (moyenne < 12)
    return {
      text: "Mrigel, salaktha ya batal! 😌 s7i7 3adito bel reels , ama sahha w far7a. El mouhem el rjel matesta3rafch bel mosta7il!",
      emoji: "😌",
      color: "text-lime-500 dark:text-lime-400",
      image: "/images/abqarino-happy.png",
    };
  if (moyenne < 13)
    return {
      text: "Bravo 3lik ya ghali! Kol chy behi 👍 barra echri l gazouz, n7ebbou nchoufou hal far7a tkber fel 7ouma!",
      emoji: "👍",
      color: "text-green-500 dark:text-green-400",
      image: "/images/abqarino-happy.png",
    };
  if (moyenne < 14)
    return {
      text: "Heyyyy behyy barcha! Mech 5ayeb 7atta tarf 😎 Walaw na3ref fik el dam el tounsi yjiib ma akther. Chwaya e5er w n3amlou l'famiilya !",
      emoji: "😎",
      color: "text-green-500 dark:text-green-300",
      image: "/images/abqarino-cool.png",
    };
  if (moyenne < 15)
    return {
      text: "Mabrouk 3lina ya star ⭐ Mrigel 3al le5er, el pmk t9oul ll 3ayla 'weldi nja7'. Wasem akther w nchallah bech tkoun fi blasa kbiira!",
      emoji: "⭐",
      color: "text-emerald-500 dark:text-emerald-400",
      image: "/images/abqarino-cool.png",
    };
  if (moyenne < 16)
    return {
      text: "Wowww! Mich normal, ya m3alem 🔥 Enti haka t7atit fel liste mte3 el zo3ama! Dam3et l'om l'ghalya mamchetch 5sara!",
      emoji: "🔥",
      color: "text-teal-500 dark:text-teal-400",
      image: "/images/abqarino-cool.png",
    };
  if (moyenne < 17)
    return {
      text: "Zo3ama confirmed 🏆 rasi dima marfou3 bik nchallah! El 7ouma lkol fa5oura bik , ya a7la far7a!",
      emoji: "🏆",
      color: "text-cyan-500 dark:text-cyan-400",
      image: "/images/abqarino-love.png",
    };
  if (moyenne < 18)
    return {
      text: "ALLAAAH AKBAR! Génie ya7ki m3ana 🚀 Tounes lkol t3ayetlek tawa. El INSAT wel Médecine yestannou fik ya 9orret 3ini!",
      emoji: "🚀",
      color: "text-blue-500 dark:text-blue-400",
      image: "/images/abqarino-love.png",
    };
  if (moyenne < 19)
    return {
      text: "WAAAW YA RABBI 3LA Abqarino ! Fel 9imma ya batal 🌟 Enti l'élite, rabi ya7fdhek melli y7sdouuk w ydawem l far7a !",
      emoji: "🌟",
      color: "text-indigo-500 dark:text-indigo-400",
      image: "/images/abqarino-love.png",
    };
  return {
    text: "YA SIDI HAAAAAA!! 20/20?? 👑 Kfech 3maltha hal note ?! Enti mouch kima el bachar, enti jey mel mosta9bel bch tfara7 9alb oumek! Legend!!",
    emoji: "👑",
    color: "text-amber-400 dark:text-amber-300",
    image: "/images/abqarino-love.png",
  };
}

export default function Moyenne() {
  const [selectedSectionId, setSelectedSectionId] = useState(sections[0].id);
  const selectedSection =
    sections.find((s) => s.id === selectedSectionId) ?? sections[0];

  const [grades, setGrades] = useState<Record<string, string>>(() =>
    sections[0].subjects.reduce((acc, sub) => {
      acc[sub.key] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const [optionGrade, setOptionGrade] = useState("");
  const [sportToggleExempted, setSportToggleExempted] = useState(false);

  const isSportExempted = useMemo(
    () => sportToggleExempted,
    [sportToggleExempted]
  );

  const activeSubjects = useMemo(
    () => getActiveSubjects(selectedSection, isSportExempted),
    [selectedSection, isSportExempted]
  );

  const coreDenominator = useMemo(
    () => activeSubjects.reduce((acc, subject) => acc + subject.coef, 0),
    [activeSubjects]
  );

  const hasMissingGrade = useMemo(
    () =>
      activeSubjects.some((subject) => {
        if (subject.isSport && isSportExempted) {
          return false;
        }
        return (grades[subject.key] ?? "").trim() === "";
      }),
    [activeSubjects, grades, isSportExempted]
  );

  const showResults = !hasMissingGrade;

  const moyenne = useMemo(
    () =>
      calculateAverage(selectedSection, grades, isSportExempted, optionGrade),
    [selectedSection, grades, isSportExempted, optionGrade]
  );

  const scoreFG = useMemo(
    () => calculateFG(selectedSection, grades, moyenne),
    [selectedSection, grades, moyenne]
  );

  const optionBonus = useMemo(
    () => calculateOptionBonus(optionGrade),
    [optionGrade]
  );

  const tunisianMsg = useMemo(() => getTunisianMessage(moyenne), [moyenne]);

  const incompleteVerdict = {
    text: "Yalla ne7sbou l moyenne 7asb ta9rib, nchallah ma tafdha7nech",
    emoji: "✏️",
    color: "text-slate-500 dark:text-slate-400",
    image: "/images/abqarino-waiting.png",
  };

  const currentVerdict = showResults ? tunisianMsg : incompleteVerdict;

  const handleSectionChange = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    const section =
      sections.find((item) => item.id === sectionId) ?? sections[0];
    const resetGrades = section.subjects.reduce((acc, sub) => {
      acc[sub.key] = "0";
      return acc;
    }, {} as Record<string, string>);
    setGrades(resetGrades);
    setOptionGrade("");
    setSportToggleExempted(false);
  };

  const handleGradeChange = (subjectKey: string, value: string) => {
    setGrades((current) => ({ ...current, [subjectKey]: value }));
  };

  const moyenneColor =
    moyenne >= 15
      ? "from-emerald-400 to-teal-300"
      : moyenne >= 12
      ? "from-green-400 to-lime-300"
      : moyenne >= 10
      ? "from-amber-400 to-yellow-300"
      : moyenne >= 8
      ? "from-orange-400 to-amber-300"
      : "from-red-400 to-orange-400";

  return (
    <section className="relative min-h-screen dark:bg-slate-950 bg-white ">
      <div className="relative mx-auto max-w-6xl py-12  px-4 md:px-8">
        <div className="mb-12 text-center">
          <HeroBadge className="font-extrabold uppercase text-xs " />
          {/* <span className="inline-block rounded-full px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:ring-indigo-500/20 mb-4">
            Plateforme éducative tunisienne 
          </span> */}
          <h1 className="text-4xl sm:text-5xl font-black tracking-[0.5px] text-slate-900 dark:text-slate-50 ">
            Prépare <span className=" text-amber">ton BAC.</span> <br /> Entre à{" "}
            <span className="text-amber">l'université</span> de tes rêves.
          </h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Cours structurés, exercices adaptatifs, lives interactifs — tout le
            programme officiel tunisien, avec un accent spécial sur
            l\'Informatique et les les STI.
          </p>
        </div>

        <StatusBar
          coreDenominator={coreDenominator}
          isSportExempted={isSportExempted}
          sectionName={selectedSection.name}
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            <SectionSelector
              selectedSectionId={selectedSectionId}
              sections={sections}
              onSectionChange={handleSectionChange}
            />
            <OptionInput
              optionGrade={optionGrade}
              optionBonus={optionBonus}
              onOptionChange={setOptionGrade}
            />
            <GradesGrid
              selectedSection={selectedSection}
              grades={grades}
              onGradeChange={handleGradeChange}
              sportToggleExempted={sportToggleExempted}
              onSportToggleChange={setSportToggleExempted}
            />
          </div>

          <Sidebar
            showResults={showResults}
            moyenne={moyenne}
            scoreFG={scoreFG}
            moyenneColor={moyenneColor}
            currentVerdict={currentVerdict}
          />
        </div>
      </div>

      <div className="fixed bottom-0 -right-20 z-40 pointer-events-none hidden md:block animate-in slide-in-from-bottom-10 duration-700">
        <div className="relative w-80 h-110">
          <img
            src="/images/bg-caractere.png"
            alt="Abqarino"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
