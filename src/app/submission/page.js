"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SubmissionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    problem: "",
    github: "",
    figma: "",
    other: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.problem.trim()) newErrors.problem = "Problem Statement is required";
    if (!formData.github.trim()) newErrors.github = "GitHub link is required";
    if (!formData.figma.trim()) newErrors.figma = "Figma link is required";
    if (!formData.other.trim()) newErrors.other = "This field is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/bgm.png')" }}
    >
      {/* 👻 Top-right ghost */}
      <img
        src="/Ghost_gif.gif"
        alt="top ghost"
        className="absolute top-6 right-6 w-28 h-28"
      />

      {/* 👻 Bottom-left ghost */}
      <img
        src="/Ghost_gif.gif"
        alt="bottom ghost"
        className="absolute bottom-6 left-6 w-28 h-28 scale-x-[-1]"
      />

      {/* Page heading at top center */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
          SUBMISSION
        </h1>
      <div className="absolute top-4 left-4 z-20 p-4 flex justify-between items-start">
        <button
          onClick={() => router.push("/team")}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-transparent transition-colors flex items-center justify-center rounded-lg shadow-lg"
          title="Go Back"
        >
          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-r-[16px] border-t-transparent border-b-transparent border-r-white ml-1"></div>
        </button>

      </div>
      {/* Form in center */}
      <div className="mx-auto relative z-10 w-[40vw] bg-[#370000]/60 text-center text-white p-6 shadow-[0_0_8px_rgba(255,0,0,0.7),inset_0_0_0_1px_#ff0000,-4px_-4px_0_0_#ff0000,-8px_-4px_0_0_#370000,-4px_-8px_0_0_#370000,-12px_-8px_0_0_#ff0000,-8px_-12px_0_0_#ff0000,4px_-4px_0_0_#ff0000,8px_-4px_0_0_#370000,4px_-8px_0_0_#370000,12px_-8px_0_0_#ff0000,8px_-12px_0_0_#ff0000,-4px_4px_0_0_#ff0000,-8px_4px_0_0_#370000,-4px_8px_0_0_#370000,-12px_8px_0_0_#ff0000,-8px_12px_0_0_#ff0000,4px_4px_0_0_#ff0000,8px_4px_0_0_#370000,4px_8px_0_0_#370000,12px_8px_0_0_#ff0000,8px_12px_0_0_#ff0000]"
      >
        <form
          className="flex flex-col items-center gap-8 w-full"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            {errors.problem && (
              <p className="text-[#ff4d4d] text-xs text-center">{errors.problem}</p>
            )}
            <select
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              defaultValue=""
              className="w-full bg-black/60 border-2 border-red-600 text-white text-xs font-[Press_Start_2P] px-2 py-3 text-center shadow-[0_0_5px_rgba(255,0,0,0.7)]"
            >
              <option value="" disabled hidden>
                Choose one of the 10 problem statements
              </option>
              <option value="Problem 1">Problem 1</option>
              <option value="Problem 2">Problem 2</option>
              <option value="Problem 3">Problem 3</option>
            </select>
          </div>

          <div className="w-full">
            {errors.github && (
              <p className="text-[#ff4d4d] text-xs text-center">{errors.github}</p>
            )}
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="GitHub Repository Link"
              className="w-full bg-transparent border border-red-600 text-white text-xs font-[Press_Start_2P] px-2 py-3 text-center shadow-[0_0_5px_rgba(255,0,0,0.7)] placeholder-white/80"
            />
          </div>

          <div className="w-full">
            {errors.figma && (
              <p className="text-[#ff4d4d] text-xs text-center">{errors.figma}</p>
            )}
            <input
              type="text"
              name="figma"
              value={formData.figma}
              onChange={handleChange}
              placeholder="Figma File Link"
              className="w-full bg-transparent border border-red-600 text-white text-xs font-[Press_Start_2P] px-2 py-3 text-center shadow-[0_0_5px_rgba(255,0,0,0.7)] placeholder-white/80"
            />
          </div>

          <div className="w-full">
            {errors.other && (
              <p className="text-[#ff4d4d] text-xs text-center">{errors.other}</p>
            )}
            <input
              type="text"
              name="other"
              value={formData.other}
              onChange={handleChange}
              placeholder="Links to Other Materials"
              className="w-full bg-transparent border border-red-600 text-white text-xs font-[Press_Start_2P] px-2 py-3 text-center shadow-[0_0_5px_rgba(255,0,0,0.7)] placeholder-white/80"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-3/4 bg-transparent border border-red-600 text-white font-[Press_Start_2P] text-xs px-4 py-2 shadow-[0_0_8px_rgba(255,0,0,0.9)] hover:scale-105 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
