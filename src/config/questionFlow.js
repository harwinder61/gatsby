export default [
  {
    categoryId: "EXPRESSION",
    currentGroupIndex: 1,
    step: 2,
    groups: [
      {
        questions: ["E16", "E17", "E18", "E19", "E20"],
        questionsCorrect: [],
        isEndWhenWrong: true,
      },
      {
        questions: ["E1", "E2", "E3", "E4", "E5"],
        questionsCorrect: ["E1", "E2", "E3", "E4", "E5"],
        isEndWhenWrong: false,
      },
      {
        questions: ["E6", "E7", "E8", "E9", "E10"],
        questionsCorrect: ["E6", "E7", "E8", "E9", "E10"],
        isEndWhenWrong: true,
      },
      {
        questions: ["E11", "E12", "E13", "E14", "E15"],
        questionsCorrect: [],
        isEndWhenWrong: true,
      },
    ],
  },
  {
    categoryId: "SPEECH",
    questionsCorrect: ["E6", "E7", "E8"],
    step: 3,
    currentGroupIndex: 0,
    groups: [
      {
        questions: [
          "S1",
          "S2",
          // "S3",
          // "S4",
          // "S5",
          // "S6",
          // "S7",
          // "S8",
          // "S9",
          // "S10",
          // "S11",
          // "S12",
          // "S13",
          // "S14",
          // "S15",
          // "S16",
        ],
        questionsCorrect: [],
        isEndWhenWrong: true,
        isMultipleAnswers: true,
      },
    ],
  },
  {
    categoryId: "COMPREHENSION",
    step: 4,
    currentGroupIndex: 1,
    groups: [
      {
        questions: ["R1", "R2", "R3", "R4", "R5"],
        questionsCorrect: [],
        isEndWhenWrong: true,
      },
      {
        questions: ["R6", "R7", "R8", "R9", "R10"],
        questionsCorrect: ["R6", "R7", "R8", "R9", "R10"],
        isEndWhenWrong: false,
      },
      {
        questions: ["R11", "R12", "R13", "R14", "R15"],
        questionsCorrect: [],
        isEndWhenWrong: true,
      },
    ],
  },
  {
    categoryId: "READINESS",
    step: 5,
    currentGroupIndex: 0,
    groups: [
      {
        questions: ["B1", "B2", "B3", "B4", "B5"],
        questionsCorrect: [],
        isEndWhenWrong: true,
      },
    ],
  },
];
