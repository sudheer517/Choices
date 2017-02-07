export interface IOptions{
    [key: string]: string;
}
export class Question{
    key: string;
    label: string;
    value: string;
    required: boolean;
    order: number;
    type: string;
    questionType: string;
    options: IOptions;
    lineNumber: number;
}