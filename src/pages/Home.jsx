export default function Home({ setPage }) {
  const nickname = localStorage.getItem("nickname");
  const level = localStorage.getItem("level");

  return (
    <div>
     <h1>🚀 我是新的 Home</h1>

      <h2>Hi {nickname} 👋</h2>

      <p>你的程度：{level}</p>

      <hr />

      <h3>📖 今日單字</h3>
      <p>每天學一個新單字</p>
      <button onClick={() => setPage("vocabulary")}>
  開始學習
</button>

      <hr />

      <h3>📰 今日新聞</h3>
      <p>閱讀一篇簡單日文新聞</p>
      <button>開始</button>

      <hr />

      <h3>🤖 AI 助教</h3>
      <p>有問題就來問我</p>
      <button>開始</button>

      <hr />

      <h3>⭐ 我的收藏</h3>

      <h3>⚙️ 設定</h3>
    </div>
  );
}