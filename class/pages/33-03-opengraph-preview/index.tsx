import axios from "axios";

export default function OpenGraphPreviewPage() {
  const onClickPreview = async () => {
    const result = await axios.get("https://www.gmarket.co.kr");
    console.log(result);
    console.log(result.split("<meta"));
    console.log(result.split("<meta").filter((el) => el.includes("og:")));
  };
  return (
    <div>
      <h1>OpenGraphPreviewPage</h1>
      <button onClick={onClickPreview}>Preview</button>
    </div>
  );
}
