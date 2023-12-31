export interface QuestionOption {
  /**To identify the correct answer */
  id: number;
  /**Option text/message */
  text: string;
}
export interface TextQuestion {
  /**To identify the question GLOBALLY */
  questionId: number;
  /**The question sentence */
  sentence: string;
  /**Possible answers for the question including the correct one */
  options: Array<QuestionOption>;
  /**The QuestionOption id present in options and is the correct answer*/
  answer: number;
}
