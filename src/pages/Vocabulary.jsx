import { useState } from "react";

import { wordsN5 as wordsN5Data } from "../data/words";

import { wordsN2 as wordsN2Data } from "../data/words";

import { wordsN1 as wordsN1Data } from "../data/words";

import { wordsN3 as wordsN3Data } from "../data/words";

import { wordsN4 as wordsN4Data } from "../data/words";

export default function Vocabulary() {
  
 const level = localStorage.getItem("level");

const words =
  level === "N5" ? wordsN5Data :
  level === "N4" ? wordsN4Data :
   level === "N3" ? wordsN3Data :
    level === "N2" ? wordsN2Data :
  wordsN1Data;

  const [index, setIndex] = useState(0);

  return (
    <div>

      <h1>📖 今日單字</h1>

      <h2>{words[index].jp}</h2>

      <h3>（{words[index].kana}）</h3>

      <p>{words[index].zh}</p>

      <p>JLPT：{words[index].level}</p>

      <p>例句：</p>

      <p>{words[index].example}</p>

      <p>{words[index].exampleZh}</p>

      <button
        onClick={() =>
          setIndex((index + 1) % words.length)
        }
      >
        下一個單字
      </button>

    </div>
  );
}