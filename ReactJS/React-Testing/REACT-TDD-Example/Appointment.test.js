
import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment } from "./Appointment"; // Adjust import if needed

it("renders the customer first name", () => {
  const customer = { firstName: "Ashley" };

  const component = <Appointment customer={customer} />;

  const container = document.createElement("div");
  document.body.appendChild(container);

 ReactDOM.createRoot(container).render(component)

  expect(document.body.textContent).toContain("Ashley");
});
