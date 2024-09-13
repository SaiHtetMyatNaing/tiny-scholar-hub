import { Container } from "@mui/material";

import CardComponent, { CharProps } from "../Components/FlashCard/card-section";
import { supabase } from "../utils/supabase-client";

const Page = async () => {
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("character");
      if (error) {
        console.log(error.message);
        return null;
      }
      return data;
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      return null;
    }
  };

  const FlashcardsData : CharProps[] | null = await fetchData();
  
  return (
    <Container>
      {FlashcardsData && <CardComponent data={FlashcardsData} />}
    </Container>
  );
};

export default Page;
