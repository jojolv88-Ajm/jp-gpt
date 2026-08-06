import { useState } from "react";

export default function Login({ setPage }) {
  const [nickname, setNickname] = useState("");
  const [level, setLevel] = useState("beginner");

  function handleStart() {
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("level", level);

   setPage("home");
  }

  return (
    <div>
      <h1>🌸 JP-GPT</h1>

      <h2>嗨！日本語</h2>

      <p>輕鬆一下下～～</p>

      <br />

      <p>怎麼稱呼你呢？</p>

      <input
        type="text"
        placeholder="請輸入你的暱稱"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <br />
      <br />

      <p>你的日語程度</p>

      <label>
        <input
          type="radio"
          name="level"
          value="beginner"
          checked={level === "beginner"}
          onChange={(e) => setLevel(e.target.value)}
        />
        我完全不會（從50音開始）
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="level"
          value="N5"
          checked={level === "N5"}
          onChange={(e) => setLevel(e.target.value)}
        />
        N5（初學）
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="level"
          value="N4"
          checked={level === "N4"}
          onChange={(e) => setLevel(e.target.value)}
        />
        N4（已有基礎）
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="level"
          value="N3"
          checked={level === "N3"}
          onChange={(e) => setLevel(e.target.value)}
        />
        N3（日常閱讀）
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="level"
          value="N2"
          checked={level === "N2"}
          onChange={(e) => setLevel(e.target.value)}
        />
        N2（進階）
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="level"
          value="N1"
          checked={level === "N1"}
          onChange={(e) => setLevel(e.target.value)}
        />
        N1（幾乎自由閱讀）
      </label>

      <br />
      <br />

      <button onClick={handleStart}>開始學習</button>
    </div>
  );
}