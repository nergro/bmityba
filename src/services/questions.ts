import { Question } from 'types/question';

export const homeQuestions: Question[] = [
  {
    questionLT: 'Kaip pasiruošti konsultacijai?',
    answerLT:
      '4-7 dienas rašyti maisto dienoraštį, jei naudojami maisto papildai, užsirašyti jų pavadinimus arba turėti jų nuotraukas.',
    questionEN: 'How to get ready for the consultation?',
    answerEN:
      'Write a food diary for 4-7 days. If you use any medications or supplements, write them down or have their photos.',
  },
  {
    questionLT: 'Kaip rašyti mitybos dienoraštį?',
    answerLT:
      'Kaskart valgant rašyti tikslų laiką ir kuo tikslesnį produktų kiekį ir produktų aprašymą, t.y. Kaip buvo gaminami, kokios firmos gaminys, jeigu tai vaisius ar daržovė, tai mažas, vidutinis ar didelis, jei tai pienas, tai kokio riebumo ir pan.',
    questionEN: 'How to write a dietary plan?',
    answerEN:
      'The aim is to describe your meal as accurately as possible. Try to put what you eat down as you eat. I recommend to describe the cooking style, portion size, even product brand, this should help me to calculate your caloric intake more accurately.',
  },
  {
    questionLT: 'Ar galėtume užsirašyti konsultacijai su antra puse?',
    answerLT: 'Žinoma! Tai siūlau poroms gyvenančioms ir valgančioms kartu.',
    questionEN: 'Can I get a consultation for a couple?',
    answerEN: "Sure! It's best for couples who live and eat together.",
  },
  {
    questionLT: 'Ar galiu sulieknėti tik sveikai maitinantis, nesportuojant?',
    answerLT:
      'Taip, tol kol esate kalorijų deficite. Tačiau rekomenduočiau derinti subalansuotą mitybą kartu su fizine veikla. Tai svarbu ne tik svorio metimo efektyvumui, bet ir Jūsų sveikatai.',
    questionEN: 'Can I lose weight by eating healthy food without exercising?',
    answerEN:
      "Yes, as long as you are in caloric deficit. Although I would recomend to increase physical activity levels too. It's important for not only losing weight, but also for your health.",
  },
];

export const allQuestions: Question[] = [...homeQuestions];
