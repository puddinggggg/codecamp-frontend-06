import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
export default function OpenApiPage() {
  const [dogUrl, setDogUrl] = useState("");
  const Image = styled.img`
    object-fit: cover;
    max-width: 800px;
  `;

  useEffect(() => {
    const forAsync = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    forAsync();
  }, []);

  return (
    <div>
      <div>강아지</div>
      <Image src={dogUrl} />
    </div>
  );
}
