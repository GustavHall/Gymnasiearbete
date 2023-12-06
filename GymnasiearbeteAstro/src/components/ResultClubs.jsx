import React from "react";
import clubs from "../../public/clubs.json";
import { useStore } from "@nanostores/preact";
import { form } from "../formStore";

const ResultsClubs = () => {
  const allClubs = clubs.clubs;
  const $form = useStore(form);
  const [filteredClubs, setfilteredClubs] = React.useState([]);


  
  React.useEffect(() => {
    const filteredClubsArray = allClubs.map((club) => {
      if (club.gender !== $form.gender) return;
      if (club.hcp !== $form.hcp) return;
      if (!Object.values($form.brand).includes(club.brand)) return;
      if (!club.swingDirection.includes($form.hold)) return;

      return club;
    });

    setfilteredClubs(filteredClubsArray);
  }, []);

  return (
    <div>
      {filteredClubs.map((club) => {
        return (
          <>
            {club.clubName}
            {club.hcp}
          </>
        );
      })}
    </div>
  );
};

export default ResultsClubs;
