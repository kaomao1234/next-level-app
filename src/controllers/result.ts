import { Controller } from "./controller";

interface ResultListener {
    gradeLevel?: {
        [seniorGrade: string]: {
            [semester: string]: {
                name: string;
                gpa: string
            }[];
        }
    }
    study?: string;
    faculty?: string;
    department?: string;
    selectedGrade?: string;
    selectedSemester?: string;
}

class ResultController extends Controller<ResultListener> {
    constructor(notifier: (callback: (prev: ResultListener) => ResultListener) => void) {
        const _listener: ResultListener = {

        }
        super(notifier, _listener)
    }

}

export { ResultController, type ResultListener }