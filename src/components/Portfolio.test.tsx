import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projects } from "@/data/projects";
import Portfolio from "./Portfolio";

const preferences = vi.hoisted(() => ({ reducedMotion: false }));

vi.mock("framer-motion", async (importOriginal) => {
  const original = await importOriginal<typeof import("framer-motion")>();
  return {
    ...original,
    useInView: () => true,
    useReducedMotion: () => preferences.reducedMotion,
  };
});

const renderPortfolio = () => render(<MemoryRouter><Portfolio /></MemoryRouter>);
const activeImage = (title: string) => within(
  screen.getByRole("link", { name: `View ${title} project` }),
).getByRole("img");

beforeEach(() => {
  vi.useFakeTimers();
  preferences.reducedMotion = false;
  vi.stubGlobal("IntersectionObserver", class {
    observe() {}
    unobserve() {}
    disconnect() {}
  });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("portfolio slideshow", () => {
  it("shows the carousel and grid together with independent pause controls", () => {
    const { container } = render(
      <MemoryRouter>
        <Portfolio layout="carousel" />
        <Portfolio id="portfolio-grid" />
      </MemoryRouter>,
    );
    const carousel = screen.getByRole("region", { name: "Featured projects carousel" });
    const grid = screen.getByRole("region", { name: "Featured projects" });
    expect(within(carousel).getAllByRole("link")).toHaveLength(projects.length);
    expect(within(grid).getAllByRole("link", { hidden: true })).toHaveLength(projects.length);
    expect(carousel.querySelectorAll('[aria-hidden="true"] a')).toHaveLength(projects.length);
    for (const link of carousel.querySelectorAll('[aria-hidden="true"] a')) {
      expect(link).toHaveAttribute("tabindex", "-1");
    }
    const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
    expect(new Set(ids).size).toBe(ids.length);

    fireEvent.click(screen.getByRole("button", { name: "Pause featured portfolio animation" }));
    act(() => { vi.advanceTimersByTime(4000); });
    const projectLink = { name: `View ${projects[0].title} project` };
    expect(within(within(carousel).getByRole("link", projectLink)).getByRole("img"))
      .toHaveAttribute("src", projects[0].samples[0].image);
    expect(within(within(grid).getByRole("link", projectLink)).getByRole("img"))
      .toHaveAttribute("src", projects[0].samples[1].image);
    expect(carousel).toHaveAttribute("data-playing", "false");
    expect(grid).toHaveAttribute("data-playing", "true");
  });

  it("cycles each project's supplied screenshots and wraps independently", () => {
    renderPortfolio();
    for (const project of projects) {
      expect(activeImage(project.title)).toHaveAttribute("src", project.samples[0].image);
      expect(screen.getByRole("link", { name: `View ${project.title} project` }))
        .toHaveAttribute("href", `/project/${project.id}`);
    }

    act(() => { vi.advanceTimersByTime(4000); });
    for (const project of projects) {
      expect(activeImage(project.title)).toHaveAttribute("src", project.samples[1].image);
    }

    act(() => { vi.advanceTimersByTime(8000); });
    for (const project of projects) {
      expect(activeImage(project.title)).toHaveAttribute("src", project.samples[3 % project.samples.length].image);
    }
    expect(within(screen.getByRole("region", { name: "Featured projects" }))
      .getAllByRole("link", { hidden: true })).toHaveLength(projects.length);
  });

  it("pauses on hover and with the pause control, then resumes", () => {
    renderPortfolio();
    const region = screen.getByRole("region", { name: "Featured projects" });
    fireEvent.mouseEnter(region);
    act(() => { vi.advanceTimersByTime(8000); });
    expect(activeImage(projects[0].title)).toHaveAttribute("src", projects[0].samples[0].image);
    expect(region).toHaveAttribute("data-playing", "false");

    fireEvent.mouseLeave(region);
    act(() => { vi.advanceTimersByTime(4000); });
    expect(activeImage(projects[0].title)).toHaveAttribute("src", projects[0].samples[1].image);

    fireEvent.click(screen.getByRole("button", { name: "Pause portfolio animation" }));
    act(() => { vi.advanceTimersByTime(8000); });
    expect(activeImage(projects[0].title)).toHaveAttribute("src", projects[0].samples[1].image);
    fireEvent.click(screen.getByRole("button", { name: "Resume portfolio animation" }));
    act(() => { vi.advanceTimersByTime(4000); });
    expect(activeImage(projects[0].title)).toHaveAttribute("src", projects[0].samples[2].image);
  });

  it("keeps screenshots still when reduced motion is requested", () => {
    preferences.reducedMotion = true;
    renderPortfolio();
    act(() => { vi.advanceTimersByTime(12000); });
    expect(screen.getByRole("region", { name: "Featured projects" })).toHaveAttribute("data-playing", "false");
    expect(activeImage(projects[0].title)).toHaveAttribute("src", projects[0].samples[0].image);
  });
});
