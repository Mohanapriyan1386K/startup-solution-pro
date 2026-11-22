import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BackgroundMotionProvider } from "./BackgroundMotion";
import TechBackground from "./TechBackground";

const motion = vi.hoisted(() => ({ inView: true, reduced: false }));
vi.mock("framer-motion", () => ({
  useInView: () => motion.inView,
  useReducedMotion: () => motion.reduced,
}));

beforeEach(() => {
  motion.inView = true;
  motion.reduced = false;
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

function renderBackgrounds() {
  return render(<BackgroundMotionProvider>
    <TechBackground variant="circuit" />
    <TechBackground variant="network" />
    <TechBackground variant="signal" />
  </BackgroundMotionProvider>);
}

describe("section background motion", () => {
  it("pauses and resumes every section with one control", () => {
    const { container } = renderBackgrounds();
    const backgrounds = container.querySelectorAll(".tech-background");
    backgrounds.forEach((background) => expect(background).toHaveAttribute("data-running", "true"));
    fireEvent.click(screen.getByRole("button", { name: "Pause background animations" }));
    backgrounds.forEach((background) => expect(background).toHaveAttribute("data-running", "false"));
    expect(screen.getByRole("button", { name: "Resume background animations" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("button", { name: "Resume background animations" }));
    backgrounds.forEach((background) => expect(background).toHaveAttribute("data-running", "true"));
  });

  it("keeps offscreen sections still", () => {
    motion.inView = false;
    const { container } = renderBackgrounds();
    container.querySelectorAll(".tech-background").forEach((background) =>
      expect(background).toHaveAttribute("data-running", "false"));
  });

  it("stops in a hidden browser tab and resumes when visible", () => {
    let hidden = false;
    vi.spyOn(document, "hidden", "get").mockImplementation(() => hidden);
    const { container } = renderBackgrounds();
    hidden = true;
    fireEvent(document, new Event("visibilitychange"));
    container.querySelectorAll(".tech-background").forEach((background) =>
      expect(background).toHaveAttribute("data-running", "false"));
    hidden = false;
    fireEvent(document, new Event("visibilitychange"));
    container.querySelectorAll(".tech-background").forEach((background) =>
      expect(background).toHaveAttribute("data-running", "true"));
  });

  it("respects reduced motion and gives each SVG its own gradient", () => {
    motion.reduced = true;
    const { container } = renderBackgrounds();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    container.querySelectorAll(".tech-background").forEach((background) => {
      expect(background).toHaveAttribute("data-running", "false");
      expect(background).toHaveAttribute("aria-hidden", "true");
    });
    const ids = Array.from(container.querySelectorAll("linearGradient"), (gradient) => gradient.id);
    expect(new Set(ids).size).toBe(3);
  });
});
