"use client"; // ✅ required for hooks in Next.js App Router
import React, { useState, useRef, useEffect } from "react";
// import "../styles/submission.css"; // pixel styles

export default function SubmissionPage() {
  const [formData, setFormData] = useState({
    problem: "",
    github: "",
    figma: "",
    other: "",
  });
  const [errors, setErrors] = useState({});

  const topGhostRef = useRef(null);
  const bottomGhostRef = useRef(null);

  const [draggingGhost, setDraggingGhost] = useState(null); // "top" or "bottom"
  const [positions, setPositions] = useState({
    top: { x: 100, y: 40 },
    bottom: { x: 100, y: typeof window !== "undefined" ? window.innerHeight - 160 : 500 },
  });
  const [directions, setDirections] = useState({ top: -1, bottom: 1 });
  const speed = 2;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.problem.trim()) {
      newErrors.problem = "Problem Statement is required";
    }

    if (!formData.github.trim()) {
      newErrors.github = "GitHub link is required";
    } else if (
      !/^https?:\/\/(www\.)?github\.com\/[\w\-]+\/[\w\-]+/.test(formData.github)
    ) {
      newErrors.github = "Enter a valid GitHub repository link";
    }

    if (!formData.figma.trim()) {
      newErrors.figma = "Figma link is required";
    } else if (!/^https?:\/\/(www\.)?figma\.com\/file\/[\w\d]+/.test(formData.figma)) {
      newErrors.figma = "Enter a valid Figma file link";
    }

    if (!formData.other.trim()) {
      newErrors.other = "This field is required";
    } else {
      try {
        new URL(formData.other);
      } catch {
        newErrors.other = "Enter a valid URL";
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
    }
  };

  // 🔹 Drag handlers
  const handleMouseDownGhost = (ghost) => () => setDraggingGhost(ghost);

  const handleMouseMoveGhost = (e) => {
    if (draggingGhost) {
      const newX = e.clientX - 60;
      const newY = e.clientY - 60;
      setPositions((prev) => ({
        ...prev,
        [draggingGhost]: { x: newX, y: newY },
      }));
    }
  };

  const handleMouseUpGhost = () => setDraggingGhost(null);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMoveGhost);
    document.addEventListener("mouseup", handleMouseUpGhost);
    return () => {
      document.removeEventListener("mousemove", handleMouseMoveGhost);
      document.removeEventListener("mouseup", handleMouseUpGhost);
    };
  }, [draggingGhost]);

  // 🔹 Ghost animation
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setPositions((prev) => {
        const newPos = { ...prev };
        Object.keys(prev).forEach((ghost) => {
          if (ghost !== draggingGhost) {
            let nextX = prev[ghost].x + directions[ghost] * speed;
            if (nextX <= 0) {
              nextX = 0;
              setDirections((d) => ({ ...d, [ghost]: 1 }));
            } else if (nextX >= window.innerWidth - 120) {
              nextX = window.innerWidth - 120;
              setDirections((d) => ({ ...d, [ghost]: -1 }));
            }
            newPos[ghost] = { ...prev[ghost], x: nextX };
          }
        });
        return newPos;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [draggingGhost, directions]);

  return (
    <div
      className="submission-page w-full flex flex-col items-center justify-center bg-black bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bgm.png')" }}
    >
      {/* Top Ghost */}
      <img
        ref={topGhostRef}
        src="/Ghost_gif.gif"
        alt="top ghost"
        className="ghost"
        style={{
          left: positions.top.x,
          top: positions.top.y,
          transform: `rotateY(${directions.top === 1 ? 0 : 180}deg)`,
        }}
        onMouseDown={handleMouseDownGhost("top")}
      />

      {/* Bottom Ghost */}
      <img
        ref={bottomGhostRef}
        src="/Ghost_gif.gif"
        alt="bottom ghost"
        className="ghost"
        style={{
          left: positions.bottom.x,
          top: positions.bottom.y,
          transform: `rotateY(${directions.bottom === 1 ? 0 : 180}deg)`,
        }}
        onMouseDown={handleMouseDownGhost("bottom")}
      />

      {/* Form */}
      <div
        className="pixel-card text-center text-white relative z-10 mx-auto translucent-box"
        style={{ width: "300px", height: "auto" }}
      >
        <form
          className="tight-space w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          {/* Problem Statement */}
          <div className="w-full">
            {errors.problem && <p className="error-text">{errors.problem}</p>}
            <select
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              className="pixel-input pixel-select w-full font-pixel"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Choose one of the 10 problem statements
              </option>
              <option value="Problem 1">Problem 1</option>
              <option value="Problem 2">Problem 2</option>
              <option value="Problem 3">Problem 3</option>
            </select>
          </div>

          {/* GitHub */}
          <div className="w-full">
            {errors.github && <p className="error-text">{errors.github}</p>}
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="pixel-input w-full font-pixel"
              placeholder="GitHub Repository Link"
            />
          </div>

          {/* Figma */}
          <div className="w-full">
            {errors.figma && <p className="error-text">{errors.figma}</p>}
            <input
              type="text"
              name="figma"
              value={formData.figma}
              onChange={handleChange}
              className="pixel-input w-full font-pixel"
              placeholder="Figma File Link"
            />
          </div>

          {/* Other */}
          <div className="w-full">
            {errors.other && <p className="error-text">{errors.other}</p>}
            <input
              type="text"
              name="other"
              value={formData.other}
              onChange={handleChange}
              className="pixel-input w-full font-pixel"
              placeholder="Links to Other Materials"
            />
          </div>

          {/* Submit */}
          <div className="w-full flex justify-center">
            <button type="submit" className="pixel-button text-white font-pixel">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}