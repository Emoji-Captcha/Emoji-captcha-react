import React, { useState } from "react";
import "./app.css";
import EmojiCaptcha from "../src/";
import emojiRes from "./emojiRes.json";

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  return (
    <div>
      <h2>Emoji captcha React component demo</h2>
      <EmojiCaptcha
        onSelect={(val) => setSelectedIdx(val)}
        emojis={emojiRes.emojis}
        question={emojiRes.question}
        questionPrefix="Select"
      />
      <h3>You selected {selectedIdx}</h3>
    </div>
  );
};

export default App;
