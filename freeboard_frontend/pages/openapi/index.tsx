// import { useQuery } from "@apollo/client";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");
  const Image = styled.img`
    object-fit: cover;
    max-width: 800px;
  `;
  //   const {} = useQuery();
  useEffect(() => {
    const forAsync = async () => {
      const result = await axios.get("https://random.dog/woof.json");
      console.log(result);
      setDogUrl(result.data.url);
    };
    forAsync();
  }, []);

  return (
    <div>
      <div>귀여운 강아지</div>
      <Image src={dogUrl} />
    </div>
  );
}
