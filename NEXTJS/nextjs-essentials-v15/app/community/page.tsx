import React from "react";

const members = [
  { name: "Alice", role: "Moderator" },
  { name: "Bob", role: "Member" },
  { name: "Charlie", role: "Member" },
];

export default function CommunityPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Community</h1>
      <p>Welcome to our community! Meet our members:</p>
      <ul>
        {members.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong> – {member.role}
          </li>
        ))}
      </ul>
    </main>
  );
}