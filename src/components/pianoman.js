import React, { useRef, useState, useEffect } from 'react';
import './pianoman.css';
import Keyboard from './Keyboard.js';

function PianoMan({ onNavigate }) {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const lineRef = useRef(null);
  const noteRefs = useRef({});
  // Track notes that have already been scored or missed so we don't count them repeatedly
  const processedNotes = useRef(new Set());

  // Real-time check loop to detect when notes cross past the line untouched
  useEffect(() => {
    let animId;

    const checkMisses = () => {
      if (lineRef.current) {
        const lineRect = lineRef.current.getBoundingClientRect();
        const lineCenterX = lineRect.left + lineRect.width / 2;

        Object.keys(noteRefs.current).forEach((noteKey) => {
          const noteEl = noteRefs.current[noteKey];
          if (!noteEl) return;

          const noteRect = noteEl.getBoundingClientRect();
          const noteCenterX = noteRect.left + noteRect.width / 2;

          // If note moves past line tolerance zone and hasn't been hit yet
          if (noteCenterX < lineCenterX - 30 && !processedNotes.current.has(noteEl)) {
            processedNotes.current.add(noteEl);
            setFeedback('MISS!');
          }

          // Reset note tracking once it loops back to spawn point on right
          if (noteCenterX > lineCenterX + 100) {
            processedNotes.current.delete(noteEl);
          }
        });
      }

      animId = requestAnimationFrame(checkMisses);
    };

    animId = requestAnimationFrame(checkMisses);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleKeyPress = (pressedNote) => {
    if (!lineRef.current) return;

    const lineRect = lineRef.current.getBoundingClientRect();
    const keyName = `${pressedNote.toLowerCase()}note`;
    const noteEl = noteRefs.current[keyName];

    if (!noteEl) return;

    const noteRect = noteEl.getBoundingClientRect();
    const lineCenterX = lineRect.left + lineRect.width / 2;
    const noteCenterX = noteRect.left + noteRect.width / 2;

    const distance = Math.abs(lineCenterX - noteCenterX);
    const HIT_TOLERANCE = 30; // 30px window around line

    // If pressed while inside target hit window and not already processed
    if (distance <= HIT_TOLERANCE && !processedNotes.current.has(noteEl)) {
      processedNotes.current.add(noteEl);
      setScore((prev) => prev + 100);
      setFeedback(`PERFECT! (${pressedNote})`);

      // Hide note briefly on hit
      noteEl.style.visibility = 'hidden';
      setTimeout(() => {
        noteEl.style.visibility = 'visible';
      }, 1000);
    } else {
      setFeedback('MISS!');
    }
  };

  return (
    <main>
      <div className="pianoman-page">
        <div className="healthbar"></div>
        <div className="score-board">Score: {score} | {feedback}</div>

        <div className="container">
          <div ref={(el) => (noteRefs.current['cnote'] = el)} className="cnote"></div>
          <div ref={(el) => (noteRefs.current['dnote'] = el)} className="dnote"></div>
          <div ref={(el) => (noteRefs.current['enote'] = el)} className="enote"></div>
          <div ref={(el) => (noteRefs.current['fnote'] = el)} className="fnote"></div>
          <div ref={(el) => (noteRefs.current['gnote'] = el)} className="gnote"></div>
          <div ref={(el) => (noteRefs.current['anote'] = el)} className="anote"></div>
          <div ref={(el) => (noteRefs.current['bnote'] = el)} className="bnote"></div>

          <img src="/assets/pmannotes.png" alt="notes" className="staff" />
          <div ref={lineRef} className="line"></div>
        </div>

        <div className="containerlogo">
          <img src="/assets/logo.png" alt="logo" className="logo" />
        </div>

        <div className="containernotes">
          <Keyboard ilawNote="C" Press={(note) => handleKeyPress(note)} />
        </div>
      </div>
    </main>
  );
}

export default PianoMan;