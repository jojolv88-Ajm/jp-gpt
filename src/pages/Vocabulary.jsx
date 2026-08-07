import { useState } from "react";

export default function Vocabulary() {

  const wordsN5 = [
  {
    jp: "食べる",
    kana: "たべる",
    zh: "吃",
    level: "N5",
    example: "ご飯を食べます。",
    exampleZh: "吃飯。"
  },
  {
    jp: "行く",
    kana: "いく",
    zh: "去",
    level: "N5",
    example: "学校へ行きます。",
    exampleZh: "去學校。"
  },
  {
    jp: "飲む",
    kana: "のむ",
    zh: "喝",
    level: "N5",
    example: "水を飲みます。",
    exampleZh: "喝水。"
  }
];
  
const wordsN3 = [
  {
    jp: "経験",
    kana: "けいけん",
    zh: "經驗",
    level: "N3",
    example: "仕事の経験を積みます。",
    exampleZh: "累積工作的經驗。"
  },
];

  const wordsN4 = [
  {
    jp: "経験",
    kana: "けいけん",
    zh: "經驗",
    level: "N4",
    example: "日本で働いた経験があります。",
    exampleZh: "我有在日本工作的經驗。"
  },

  {
    jp: "改善",
    kana: "かいぜん",
    zh: "改善",
    level: "N4",
    example: "品質を改善します。",
    exampleZh: "改善品質。"
  },

  {
    jp: "必要",
    kana: "ひつよう",
    zh: "必要",
    level: "N4",
    example: "時間が必要です。",
    exampleZh: "需要時間。"
  },

  {
    jp: "連絡",
    kana: "れんらく",
    zh: "聯絡",
    level: "N4",
    example: "後で連絡します。",
    exampleZh: "之後再聯絡。"
  },

  {
    jp: "準備",
    kana: "じゅんび",
    zh: "準備",
    level: "N4",
    example: "旅行の準備をします。",
    exampleZh: "準備旅行。"
  }
];

const level = localStorage.getItem("level");

const words =
  level === "N5" ? wordsN5 :
  level === "N4" ? wordsN4 :
  wordsN3;

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