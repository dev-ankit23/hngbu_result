export interface CourseRow {
  code: string
  name: string
  credit: string
  gradePoint: string
  creditPoint: string
  grade: string
}

export interface GradeCard {
  rollNo: string
  password: string
  session: string
  exam: string
  program: string
  semesterLabel: string
  name: string
  fatherName: string
  motherName: string
  school: string
  mode: string
  courses: CourseRow[]
  totalCredit: string
  totalCreditPoint: string
  semester: string
  sgpa: string
  cp: string
  cgpa: string
  marks: string
  result: string
  marksInWords: string
  grandTotal: string
}

export const STUDENTS: GradeCard[] = [
  {
    rollNo: "251345050034",
    password: "tushar@4321",
    session: "2025-2026",
    exam: "2025 December Regular",
    program: "BACHELOR OF TECHNOLOGY (MECHANICAL ENGINEERING)",
    semesterLabel: "SEMESTER-I",
    name: "Mr. TUSHAR BALOONI",
    fatherName: "Mr. RAKESH KUMAR",
    motherName: "Mrs. BHARTI DEVI",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    mode: "REGULAR",
    courses: [
      { code: "331211", name: "UNDERSTANDING AND CONNECTING WITH ENVIRONMENT", credit: "2.00", gradePoint: "8.10", creditPoint: "12.20", grade: "B" },
      { code: "611512", name: "MATHEMATICS - I", credit: "4.00", gradePoint: "8.10", creditPoint: "32.40", grade: "B" },
      { code: "631111", name: "BASIC ELECTRICAL ENGINEERING", credit: "4.00", gradePoint: "8.10", creditPoint: "32.40", grade: "B" },
      { code: "631112", name: "BASIC ELECTRONICS", credit: "4.00", gradePoint: "7.15", creditPoint: "28.60", grade: "B" },
      { code: "631113", name: "FUNDAMENTAL OF INFORMATION TECHNOLOGY", credit: "4.00", gradePoint: "7.15", creditPoint: "28.60", grade: "B" },
      { code: "631511", name: "PHYSICS", credit: "4.00", gradePoint: "7.15", creditPoint: "24.60", grade: "C" },
      { code: "631611", name: "PHYSICS LAB", credit: "1.00", gradePoint: "5.10", creditPoint: "5.10", grade: "C" },
      { code: "631612", name: "ENGINEERING GRAPHICS AND WORKSHOP PRACTICE", credit: "1.00", gradePoint: "8.10", creditPoint: "8.10", grade: "A" },
      { code: "641711", name: "MACHINING PRACTICE LAB-I", credit: "2.00", gradePoint: "7.50", creditPoint: "15.00", grade: "C" },
    ],
    totalCredit: "26.00",
    totalCreditPoint: "187.00",
    semester: "I",
    sgpa: "7.96",
    cp: "187",
    cgpa: "",
    marks: "657 / 900",
    result: "PASS",
    marksInWords: "SIX HUNDRED FIFTY SEVEN OUT OF NINE HUNDRED",
    grandTotal: "657/900 [SIX HUNDRED FIFTY SEVEN OUT OF NINE HUNDRED]",
  },
]

export function findStudent(rollNo: string, password: string): GradeCard | null {
  const student = STUDENTS.find(
    (s) => s.rollNo === rollNo.trim() && s.password === password,
  )
  return student ?? null
}
