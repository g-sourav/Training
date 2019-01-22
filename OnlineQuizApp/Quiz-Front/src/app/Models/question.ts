
import { answer } from "./answer";
import { QuestionOption } from './questionOption';
import { QuestionHint } from './questionHint';

export class question{
    questionId:Number;
    questionInfo:string;
    optionsList:QuestionOption[];
    hintsList:QuestionHint[];
    answer:answer[];
    questionFacts:string;
    questionTime:string;

}