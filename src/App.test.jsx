import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

describe("Todo List", () => {
  test("TODO 1: renders all 3 tasks as list items", () => {
    render(<App />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText(/Learn JSX/)).toBeInTheDocument();
    expect(screen.getByText(/Understand props/)).toBeInTheDocument();
    expect(screen.getByText(/Practice useState/)).toBeInTheDocument();
  });

  test("TODO 2: shows ✅ for done tasks and ⬜ for pending tasks", () => {
    render(<App />);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("✅");
    expect(items[1]).toHaveTextContent("⬜");
    expect(items[2]).toHaveTextContent("⬜");
  });

  test("TODO 3: clicking 'Mark done' toggles only that task", async () => {
    const user = userEvent.setup();
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /mark done/i });
    expect(buttons).toHaveLength(3);

    await user.click(buttons[1]);
    let items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("✅");
    expect(items[1]).toHaveTextContent("✅");
    expect(items[2]).toHaveTextContent("⬜");

    await user.click(screen.getAllByRole("button")[1]);
    items = screen.getAllByRole("listitem");
    expect(items[1]).toHaveTextContent("⬜");
  });

  test.skip("TODO 4 (stretch): heading shows the done count", async () => {
    // Remove `.skip` from this test if you attempt the stretch task.
    const user = userEvent.setup();
    render(<App />);
    expect(document.body).toHaveTextContent(/1\s*of\s*3\s*done/);
    await user.click(screen.getAllByRole("button", { name: /mark done/i })[1]);
    expect(document.body).toHaveTextContent(/2\s*of\s*3\s*done/);
  });
});
