import React from "react";


const Body = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Andrii Pielievan",
      position: "Software engineer",
      photo: "/Andrii.jpg",
    },
    {
      id: 2,
      name: "Hloriia Tsizdyn Balabanova",
      position: "UI/UX Designer",
      photo: "/Hloriia.jpg",
    },
    {
      id: 3,
      name: "Turyk Ruslan",
      position: "BA",
      photo: "/Turyk.jpg",
    },
    {
      id: 4,
      name: "Holets Roman",
      position: "Just a guy",
      photo: "/Holets.jpg",
    },
    {
      id: 5,
      name: "Hrechko Khrystyna",
      position: "Team Lead",
      photo: "/Skarb.jpg",
    },


  ];


return (
    <main style={styles.body}>
      {teamMembers.map((member) => (
        <div key={member.id} style={styles.card}>
          <img src={member.photo} alt={member.name} style={styles.photo} />
          <div style={styles.textContainer}>
            <h2 style={styles.name}>{member.name}</h2>
            <p style={styles.position}>{member.position}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
