import { TextQuestion } from "../../interfaces/question";

export const ExampleQuestions: Array<TextQuestion> = [
  {
    questionId: 1,
    sentence: "¿Cuáles son las reglas de comportamiento",
    options: [
      { id: 1, text: "reir, comer y llorar" },
      { id: 2, text: "no corro, no grito y no empujo" },
      { id: 3, text: "respetar, escuchar y atender" },
      { id: 4, text: "no sé y no me interesa" },
      { id: 5, text: "todas las opciones son correctas" },
      { id: 6, text: "miau" },
    ],
    answer: 3,
  },
];
