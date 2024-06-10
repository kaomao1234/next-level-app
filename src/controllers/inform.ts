import { Controller } from "./controller";

interface InformListener {
  gradeLevel: {
    [seniorGrade: string]: {
      [semester: string]: {
        name: string;
        gpa: string
      }[];
    }
  }
  study: string;
  faculty: string;
  department: string;
  selectedGrade: string;
  selectedSemester: string;
}

class InformController extends Controller<InformListener> {
  // Initialize the listener state in the constructor
  constructor(notifier: (callback: (prev: InformListener) => InformListener) => void) {
    const _listener = {
      selectedGrade: "ม.4",
      selectedSemester: "เทอม 1",
      gradeLevel:
      {
        "ม.4": {
          "เทอม 1": [
            { name: "ภาษาไทย", gpa: "0" },
            { name: "คณิตศาสตร์", gpa: "0" },
            { name: "ฟิสิกส์", gpa: "0" },
            { name: "ภาษาอังกฤษ", gpa: "0" }
          ],
          "เทอม 2": [
            { name: "ภาษาไทย", gpa: "0" },
            { name: "คณิตศาสตร์", gpa: "0" },
            { name: "ฟิสิกส์", gpa: "0" },
            { name: "ภาษาอังกฤษ", gpa: "0" }
          ]
        },
        "ม.5": {
          "เทอม 1": [
            { name: "ภาษาไทย", gpa: "0" },
            { name: "คณิตศาสตร์", gpa: "0" },
            { name: "ฟิสิกส์", gpa: "0" },
            { name: "ภาษาอังกฤษ", gpa: "0" }
          ],
          "เทอม 2": [
            { name: "ภาษาไทย", gpa: "0" },
            { name: "คณิตศาสตร์", gpa: "0" },
            { name: "ฟิสิกส์", gpa: "0" },
            { name: "ภาษาอังกฤษ", gpa: "0" }
          ]
        },
        "ม.6": {
          "เทอม 1": [
            { name: "ภาษาไทย", gpa: "0" },
            { name: "คณิตศาสตร์", gpa: "0" },
            { name: "ฟิสิกส์", gpa: "0" },
            { name: "ภาษาอังกฤษ", gpa: "0" }
          ],
          "เทอม 2": [
            { name: "ภาษาไทย", gpa: "0" },
            { name: "คณิตศาสตร์", gpa: "0" },
            { name: "ฟิสิกส์", gpa: "0" },
            { name: "ภาษาอังกฤษ", gpa: "0" }
          ]
        }
      },
      study: "",
      faculty: "",
      department: "",
    }
    super(notifier, _listener);
  }


  handleSemesterGpa(gpa: string, index: number) {
    console.log(this);

    this.listener.gradeLevel[this.listener.selectedGrade][this.listener.selectedSemester][index].gpa = gpa
    this.notifyListener();
  }

  handleGrade(value: string, index: number) {
    this.listener.selectedGrade = value
    this.notifyListener()

  }
  handleSemester(value: string, index: number) {
    this.listener.selectedSemester = value
    this.notifyListener()
  }

  // Method to handle study updates
  handleStudy(study: string) {
    this.listener.study = study;
    this.notifyListener();
  }

  // Method to handle faculty updates
  handleFaculty(faculty: string) {
    this.listener.faculty = faculty;
    this.notifyListener();
  }

  // Method to handle department updates
  handleDepartment(department: string) {
    this.listener.department = department;
    this.notifyListener();
  }
}

export { InformController, type InformListener }