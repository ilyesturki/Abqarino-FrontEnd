export type Subject = {
  key: string;
  name: string;
  coef: number;
  isSport?: boolean;
};

export type Section = {
  id: string;
  name: string;
  subjects: Subject[];
  fgWeights?: Record<string, number>;
};

export type GradesRecord = Record<string, string>;

export const sections: Section[] = [
  {
    id: "math",
    name: "Mathématiques",
    subjects: [
      { key: "math", name: "Mathématiques", coef: 4 },
      { key: "physique", name: "Sciences Physiques", coef: 4 },
      { key: "svt", name: "SVT", coef: 1 },
      { key: "info", name: "Informatique", coef: 1 },
      { key: "arabe", name: "Arabe", coef: 1 },
      { key: "francais", name: "Français", coef: 1 },
      { key: "anglais", name: "Anglais", coef: 1 },
      { key: "philo", name: "Philosophie", coef: 1 },
      { key: "sport", name: "Éducation Physique (Sport)", coef: 1, isSport: true }
    ],
    fgWeights: { math: 2, physique: 1.5, svt: 0.5, francais: 1, anglais: 1 }
  },
  {
    id: "exp",
    name: "Sciences Expérimentales",
    subjects: [
      { key: "svt", name: "SVT", coef: 4 },
      { key: "physique", name: "Sciences Physiques", coef: 4 },
      { key: "math", name: "Mathématiques", coef: 3 },
      { key: "info", name: "Informatique", coef: 1 },
      { key: "arabe", name: "Arabe", coef: 1 },
      { key: "francais", name: "Français", coef: 1 },
      { key: "anglais", name: "Anglais", coef: 1 },
      { key: "philo", name: "Philosophie", coef: 1 },
      { key: "sport", name: "Éducation Physique (Sport)", coef: 1, isSport: true }
    ],
    fgWeights: { math: 1, physique: 1.5, svt: 1.5, francais: 1, anglais: 1 }
  },
  {
    id: "sti",
    name: "Sciences Techniques",
    subjects: [
      { key: "physique", name: "Sciences Physiques", coef: 4 },
      { key: "math", name: "Mathématiques", coef: 3 },
      { key: "meca", name: "Génie Mécanique", coef: 2.5 },
      { key: "electrique", name: "Génie Électrique", coef: 2.5 },
      { key: "info", name: "Informatique", coef: 1 },
      { key: "arabe", name: "Arabe", coef: 1 },
      { key: "francais", name: "Français", coef: 1 },
      { key: "anglais", name: "Anglais", coef: 1 },
      { key: "philo", name: "Philosophie", coef: 1 },
      { key: "sport", name: "Éducation Physique (Sport)", coef: 1, isSport: true }
    ],
    fgWeights: { physique: 1, math: 1.5, meca: 0.75, electrique: 0.75, francais: 1, anglais: 1 }
  },
  {
    id: "eco",
    name: "Économie et Gestion",
    subjects: [
      { key: "eco", name: "Économie", coef: 3.5 },
      { key: "gestion", name: "Gestion", coef: 3.5 },
      { key: "math", name: "Mathématiques", coef: 2 },
      { key: "hg", name: "Histoire-Géographie", coef: 1.5 },
      { key: "tic", name: "Informatique (TIC)", coef: 1 },
      { key: "arabe", name: "Arabe", coef: 1 },
      { key: "francais", name: "Français", coef: 1 },
      { key: "anglais", name: "Anglais", coef: 1 },
      { key: "philo", name: "Philosophie", coef: 1 },
      { key: "sport", name: "Éducation Physique (Sport)", coef: 1, isSport: true }
    ],
    fgWeights: { eco: 1.5, gestion: 1.5, math: 0.5, hg: 0.5, francais: 1, anglais: 1 }
  },
  {
    id: "info",
    name: "Sciences Informatiques",
    subjects: [
      { key: "algo", name: "Algorithmique et Programmation", coef: 4 },
      { key: "tic", name: "TIC", coef: 4 },
      { key: "math", name: "Mathématiques", coef: 3 },
      { key: "physique", name: "Sciences Physiques", coef: 2 },
      { key: "arabe", name: "Arabe", coef: 1 },
      { key: "francais", name: "Français", coef: 1 },
      { key: "anglais", name: "Anglais", coef: 1 },
      { key: "philo", name: "Philosophie", coef: 1 },
      { key: "sport", name: "Éducation Physique (Sport)", coef: 1, isSport: true }
    ],
    fgWeights: { math: 1.5, algo: 1.5, tic: 0.5, physique: 0.5, francais: 1, anglais: 1 }
  },
  {
    id: "lettres",
    name: "Lettres",
    subjects: [
      { key: "arabe", name: "Arabe", coef: 3 },
      { key: "philo", name: "Philosophie", coef: 3 },
      { key: "hg", name: "Histoire-Géographie", coef: 2 },
      { key: "francais", name: "Français", coef: 2 },
      { key: "anglais", name: "Anglais", coef: 2 },
      { key: "pensee", name: "Pensée Islamique", coef: 1 },
      { key: "info", name: "Informatique", coef: 1 },
      { key: "sport", name: "Éducation Physique (Sport)", coef: 1, isSport: true }
    ],
    fgWeights: { arabe: 1.5, philo: 1.5, hg: 1, francais: 1, anglais: 1 }
  },
  {
    id: "sport",
    name: "Sport",
    subjects: [
      { key: "sportif", name: "Discipline Sportive (Spécialité)", coef: 4, isSport: true },
      { key: "bio", name: "Anatomie et Physiologie / Biologie", coef: 3 },
      { key: "physique", name: "Sciences Physiques", coef: 1 },
      { key: "math", name: "Mathématiques", coef: 1 },
      { key: "info", name: "Informatique", coef: 1 },
      { key: "arabe", name: "Arabe", coef: 1 },
      { key: "philo", name: "Philosophie", coef: 1 },
      { key: "francais", name: "Français", coef: 1 },
      { key: "anglais", name: "Anglais", coef: 1 }
    ],
    fgWeights: { bio: 1.5, sportif: 1, info: 0.5, physique: 0.5, philo: 0.5, francais: 1, anglais: 1 }
  }
];

export function parseGrade(value: string): number {
  const normalized = value.trim().replace(/,/g, ".");
  const parsed = parseFloat(normalized);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function roundToTwoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateOptionBonus(optionValue: string): number {
  const note = parseGrade(optionValue);
  return roundToTwoDecimals(Math.max(0, note - 10));
}

export function getActiveSubjects(section: Section, sportExempted: boolean): Subject[] {
  return section.subjects.filter((subject) => !(sportExempted && subject.isSport));
}

export function calculateAverage(
  section: Section,
  grades: GradesRecord,
  sportExempted: boolean,
  optionGrade: string
): number {
  const activeSubjects = getActiveSubjects(section, sportExempted);
  const denominator = activeSubjects.reduce((acc, subject) => {
    const grade = parseGrade(grades[subject.key] ?? "");
    if (subject.isSport && grade === 99.99) {
      return acc;
    }
    return acc + subject.coef;
  }, 0);
  if (denominator <= 0) {
    return 0;
  }

  const totalPoints = activeSubjects.reduce((acc, subject) => {
    const grade = parseGrade(grades[subject.key] ?? "");
    if (subject.isSport && grade === 99.99) {
      return acc;
    }
    return acc + grade * subject.coef;
  }, 0);

  const optionBonus = calculateOptionBonus(optionGrade);
  const baseAverage = totalPoints + optionBonus;

  return roundToTwoDecimals(baseAverage / denominator);
}

export function calculateFG(section: Section, grades: GradesRecord, average: number): number {
  const weights = section.fgWeights;
  let score = average * 4;
  if (weights) {
    Object.entries(weights).forEach(([key, weight]) => {
      score += parseGrade(grades[key] ?? "") * weight;
    });
  }
  return roundToTwoDecimals(score);
}
