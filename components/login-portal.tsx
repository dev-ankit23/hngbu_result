"use client"

import { useState } from "react"
import Image from "next/image"
import { findStudent, type GradeCard } from "@/lib/students"
import GradeCardView from "@/components/grade-card-view"

export default function LoginPortal() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [student, setStudent] = useState<GradeCard | null>(null)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    const found = findStudent(username, password)
    if (found) {
      setStudent(found)
    } else {
      setError("Invalid username or password.")
    }
  }

  if (student) {
    return <GradeCardView student={student} onLogout={() => {
      setStudent(null)
      setUsername("")
      setPassword("")
    }} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top accent bar */}
      <div className="h-2 w-full bg-[#2c3e50]" />

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-[#2a6ebb] text-sm md:text-base font-medium tracking-wide">
            HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-sm shadow-md border-t-4 border-[#2a6ebb]">
          <div className="px-8 pt-8 pb-6">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <Image
                src="/hnbgu-logo.png"
                alt="Hemvati Nandan Bahuguna Garhwal University logo"
                width={150}
                height={150}
                className="h-36 w-36 object-contain"
                priority
              />
              <h2 className="mt-2 text-2xl font-medium text-gray-800">
                Student Portal
              </h2>
            </div>

            {/* Sign in */}
            <h3 className="mt-8 text-2xl text-gray-700">Sign In</h3>

            <form onSubmit={handleLogin} className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="username"
                  className="text-[#2a6ebb] text-sm"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enrolment Number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a6ebb] focus:border-[#2a6ebb]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-[#2a6ebb] text-sm"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a6ebb] focus:border-[#2a6ebb]"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <div className="flex justify-center mt-1">
                <button
                  type="submit"
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2 rounded text-sm transition-colors"
                >
                  Login
                </button>
              </div>

              <div className="flex justify-center gap-3 mt-1">
                <button
                  type="button"
                  className="bg-[#28a745] hover:bg-[#218838] text-white px-4 py-2 rounded text-sm transition-colors"
                >
                  New Registration
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded text-sm transition-colors"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4">
        <p className="text-[#2a6ebb] text-sm">© Samarth eGov</p>
      </footer>
    </div>
  )
}
