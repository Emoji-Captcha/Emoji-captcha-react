import React, { CSSProperties } from "react";
import "./index.css";

interface IEmojiRes {
  question: string;
  emojis: string[];
  onSelect?: (idx: number) => void;
  questionPrefix?: string;
  align?: CSSProperties["justifyContent"];
}

const EmojiCaptcha = ({
  question,
  emojis,
  onSelect,
  questionPrefix,
  align = "center",
}: IEmojiRes) => {
  return (
    <div className="emoji-box">
      <p className="emoji-question">
        {questionPrefix ?? "Please select"} {question}
      </p>
      <div className="emoji-container" style={{ justifyContent: align }}>
        {emojis.map((emo, idx) => (
          <div className="emoji" key={idx}>
            <input
              onChange={(e) => {
                onSelect ? onSelect(+e.currentTarget.value) : null;
              }}
              type="radio"
              name="selectedEmoji"
              value={idx}
              id={idx + ""}
            />
            <label htmlFor={idx + ""}>
              <img src={emo} alt="Failed to load emoji" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiCaptcha;
