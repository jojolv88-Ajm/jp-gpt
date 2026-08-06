export default function Home() {
  const nickname = localStorage.getItem("nickname");
  const level = localStorage.getItem("level");

  return (
    <div>
      <h1>🏠 Home</h1>

      <h2>Hi {nickname} 👋</h2>

      <p>你的程度：{level}</p>

      <p>今天開始學日文吧！🌸</p>
    </div>
  );
}