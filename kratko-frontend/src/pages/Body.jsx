import { useState } from "react";
import React from "react";

function Body() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function summarizeText() {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:8000/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          max_length: 120,
          min_length: 40
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error(error);
      setSummary("Error generating summary.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center bg-amber-100 p-4 m-8 gap-8">

      <div className="flex flex-row justify-between gap-8">
        <div className="bg-amber-50 rounded-4xl">
          <textarea
            className="size-[35rem] p-4"
            placeholder="Enter your text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="bg-amber-50 rounded-4xl">
          <textarea
            className="size-[35rem] p-4"
            placeholder="Summary will appear here"
            value={summary}
            readOnly
          />
        </div>
      </div>

      <button
        className="bg-green-500 w-[10rem] rounded-md hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out text-white text-lg"
        onClick={summarizeText}
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

    </div>
  );
}

export default Body;
