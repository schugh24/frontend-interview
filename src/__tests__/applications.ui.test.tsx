import { render, screen } from "@testing-library/react";
import SingleApplication from "../SingleApplication";
import { describe, it, expect } from "vitest";

const application = {
  company: "Qnekt",
  first_name: "Miles",
  last_name: "Espinoza",
  email: "milesespinoza@qnekt.com",
  loan_amount: 10300,
  date_created: "2021-08-10T00:00:00.000Z",
  expiry_date: "2021-12-10T00:00:00.000Z",
};

describe("SingleApplication UI", () => {
  it("renders all column headings", () => {
    render(<SingleApplication application={application} />);
    expect(screen.getByText(/Company/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Loan Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/Application Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Expiry date/i)).toBeInTheDocument();
  });

  it("renders correct application data", () => {
    render(<SingleApplication application={application} />);
    expect(screen.getByText("Qnekt")).toBeInTheDocument();
    expect(screen.getByText("Miles Espinoza")).toBeInTheDocument();
    expect(screen.getByText("milesespinoza@qnekt.com")).toBeInTheDocument();
    expect(screen.getByText("£10,300")).toBeInTheDocument();
    expect(screen.getByText("10-08-2021")).toBeInTheDocument();
    expect(screen.getByText("10-12-2021")).toBeInTheDocument();
  });
});
