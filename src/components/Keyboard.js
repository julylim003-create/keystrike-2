import React, { useRef } from 'react';
import Keynote from "./Keynote";

// 1. Keep this as an array so .map() works perfectly
const NOTES = ["C", "D", "E", "F", "G", "A", "B"];

function Keyboard({ ilawNote, Press }) {
    // 2. Persistent cache to hold audio instances so notes don't lag
    const audioCache = useRef({});

    const handleKeyClick = (note) => {
        // 3. Play the audio file instantly
        if (!audioCache.current[note]) {
            // Assumes your mp3 files are inside the 'public/sounds/' folder
            audioCache.current[note] = new Audio(`/sounds/${note}.mp3`);
        }
        
        const audio = audioCache.current[note];
        audio.currentTime = 0; // Instantly rewinds for rapid clicking
        audio.play();

        // 4. Call the parent's Press function so the light ('ilaw') still works
        if (Press) {
            Press(note);
        }
    };

    return (
        <div className="keyboard">
            {NOTES.map((note) => (
                <Keynote 
                    key={note} 
                    note={note} 
                    ilaw={note === ilawNote} 
                    pindot={handleKeyClick} // 5. Use our new sound-playing function here
                />
            ))}
        </div>
    );
}

export default Keyboard;
