"use client"

import type { GradeCard } from "@/lib/students"

export default function GradeCardView({
  student,
  onLogout,
}: {
  student: GradeCard
  onLogout: () => void
}) {
  return (
    <div className="min-h-screen bg-[#ececec]">
      {/* Toolbar (hidden when printing) */}
      <div className="no-print bg-[#2c3e50] text-white px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-medium tracking-wide">
          HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-1.5 rounded text-sm transition-colors"
          >
            Download / Print PDF
          </button>
          <button
            onClick={onLogout}
            className="border border-white/40 hover:bg-white/10 text-white px-4 py-1.5 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Grade card page */}
      <div className="flex justify-center py-8 px-4">
        <div className="w-full max-w-3xl bg-white shadow-lg text-[#1a1a1a] px-10 py-8">
          {/* Title */}
          <h1 className="text-center text-3xl font-bold tracking-wide mb-6">
            GRADE CARD
          </h1>

          {/* Header info */}
          <div className="text-[15px] font-bold leading-relaxed">
            <div className="flex justify-between">
              <span>SESSION : {student.session}</span>
              <span>{student.exam}</span>
            </div>
            <div className="flex justify-between">
              <span>{student.program}</span>
              <span>{student.semesterLabel}</span>
            </div>
            <div className="flex justify-between">
              <span>NAME : {student.name}</span>
              <span>ROLL NO : {student.rollNo}</span>
            </div>
            <div className="flex justify-between">
              <span>F/H NAME : {student.fatherName}</span>
              <span>&nbsp;</span>
            </div>
            <div className="flex justify-between">
              <span>M&apos;S NAME : {student.motherName}</span>
              <span>{student.mode}</span>
            </div>
            <div>{student.school}</div>
          </div>

          {/* Course table */}
          <table className="w-full mt-6 text-[14px] border-collapse">
            <thead>
              <tr className="font-bold align-bottom">
                <th className="text-left pb-2 pr-2">COURSE CODE</th>
                <th className="text-left pb-2 pr-2">COURSE NAME</th>
                <th className="text-center pb-2 px-2">CREDIT</th>
                <th className="text-center pb-2 px-2">
                  GRADE
                  <br />
                  POINT
                </th>
                <th className="text-center pb-2 px-2">
                  CREDIT
                  <br />
                  POINT
                </th>
                <th className="text-center pb-2 pl-2">GRADE</th>
              </tr>
            </thead>
            <tbody>
              {student.courses.map((c) => (
                <tr key={c.code} className="align-top">
                  <td className="py-2 pr-2 font-bold">{c.code}</td>
                  <td className="py-2 pr-2">{c.name}</td>
                  <td className="py-2 px-2 text-center font-bold">
                    {c.credit}
                  </td>
                  <td className="py-2 px-2 text-center font-bold">
                    {c.gradePoint}
                  </td>
                  <td className="py-2 px-2 text-center font-bold">
                    {c.creditPoint}
                  </td>
                  <td className="py-2 pl-2 text-center font-bold">{c.grade}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-700 font-bold">
                <td className="pt-3" colSpan={2}>
                  TOTAL
                </td>
                <td className="pt-3 text-center">{student.totalCredit}</td>
                <td className="pt-3"></td>
                <td className="pt-3 text-center">{student.totalCreditPoint}</td>
                <td className="pt-3"></td>
              </tr>
            </tfoot>
          </table>

          {/* Summary */}
          <div className="mt-8 text-[15px] font-bold">
            <div className="grid grid-cols-[140px_1fr] gap-y-1">
              <span>SEMESTER:</span>
              <span>{student.semester}</span>
              <span>SGPA:</span>
              <span>{student.sgpa}</span>
              <span>CP:</span>
              <span>{student.cp}</span>
              <span>CGPA:</span>
              <span>{student.cgpa || "\u00A0"}</span>
              <span>MARKS:</span>
              <span>{student.marks}</span>
            </div>
          </div>

          {/* Result + QR */}
          <div className="mt-8 flex justify-between items-end">
            <div className="text-[15px] font-bold">
              <div>RESULT: {student.result}</div>
              <div className="font-normal">{student.marksInWords}</div>
            </div>
            <QrPlaceholder />
          </div>

          <div className="mt-6 text-[15px] font-bold">
            GRAND TOTAL: {student.grandTotal}
          </div>
        </div>
      </div>
    </div>
  )
}

function QrPlaceholder() {
  // Simple decorative QR-like block
  const cells = 11
  const pattern: boolean[][] = Array.from({ length: cells }, (_, r) =>
    Array.from({ length: cells }, (_, c) => {
      // finder patterns at corners
      const inFinder = (rr: number, cc: number) =>
        (rr < 3 && cc < 3) || (rr < 3 && cc > cells - 4) || (rr > cells - 4 && cc < 3)
      if (inFinder(r, c)) return (r + c) % 2 === 0 || r === 0 || c === 0
      return (r * 7 + c * 3) % 3 === 0
    }),
  )
  return (
    <div
      className="grid border border-black"
      style={{
        gridTemplateColumns: `repeat(${cells}, 6px)`,
        gridTemplateRows: `repeat(${cells}, 6px)`,
      }}
      aria-label="QR code"
    >
      {pattern.flat().map((on, i) => (
        <div key={i} className={on ? "bg-black" : "bg-white"} />
      ))}
    </div>
  )
}
