import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import InputField from "../components/inputfield";
import Button from "../components/Button";
import Navbar from "../components/navbar.jsx";

export default function NoteManager() {
  const [noteText, setNoteText] = useState("");
  const [priority, setPriority] = useState("important");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!noteText.trim()) return;
    setNotes([...notes, { id: Date.now(), text: noteText, priority }]);
    setNoteText("");
  };

  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

  const changePriority = (id, newPriority) =>
    setNotes(
      notes.map((n) => (n.id === id ? { ...n, priority: newPriority } : n))
    );

  const renderNotes = (filter) =>
    notes
      .filter((n) => n.priority === filter)
      .map((n) => (
        <div
          key={n.id}
          className="bg-white text-blue-800 rounded-xl p-4 shadow-md mb-2 "
        >
          <p>{n.text}</p>
          <div className="flex justify-between mt-2">
            <select
              value={n.priority}
              onChange={(e) => changePriority(n.id, e.target.value)}
              className="rounded-lg border border-blue-300 px-2 py-1 text-sm"
            >
              <option value="important">Important</option>
              <option value="normal">Normal</option>
              <option value="delayed">Delayed</option>
            </select>
            <button
              onClick={() => deleteNote(n.id)}
              className="text-red-500 hover:text-red-700 text-sm font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ));

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-500 p-10 pt-12 text-blue-700 mt-16">
    <Navbar />
    <h1 className="text-3xl font-bold mb-6 text-center"> Note Manager</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-4">
        <InputField
          label="New Note"
          placeholder="Type your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <Dropdown
          options={["important", "normal", "delayed"]}
          onSelect={setPriority}
        />
        <Button label="Add Note" onClick={addNote} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div>
          <h2 className="text-xl font-bold mb-3 text-blue-900"> Important</h2>
          {renderNotes("important")}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 text-blue-700"> Normal</h2>
          {renderNotes("normal")}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 text-blue-600"> Delayed</h2>
          {renderNotes("delayed")}
        </div>
      </div>
    </div>
  );
}
