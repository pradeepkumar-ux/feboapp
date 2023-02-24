import React, { useState } from "react";
import GuestSection from "./GuestSection";
import '../src/App.css';

function GuestListPage() {
  const [guests, setGuests] = useState([
    { section: "Husbands Fammily", count: 0 },
    { section: "Wifes Family", count: 0 },
    { section: "Husbands Colleagues", count: 0 },
    { section: "wifes colleagues", count: 0 },
    { section: "General Friends", count: 0 }
  ]);

  const handleAddGuest = (sectionIndex) => {
    const newGuests = [...guests];
    newGuests[sectionIndex].count++;
    setGuests(newGuests);
  };

  return (
    <div className="categories">
      {guests.map((guest, index) => (
        <GuestSection
          key={index}
          section={guest.section}
          count={guest.count}
          onAddGuest={() => handleAddGuest(index)}
        />
      ))}
    </div>
  );
}

export default GuestListPage;
