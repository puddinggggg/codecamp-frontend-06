import { useQuery } from "@apollo/client";
import axios from "axios";
import { useEffect, useState } from "react";
export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  //   const {} = useQuery();
  useEffect(() => {
    const forAsync = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    forAsync();
  }, []);

  return (
    <div>
      <div>오픈API</div>
      <img src={dogUrl} />
    </div>
  );
}
