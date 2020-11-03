import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import "@/components/spinner/Spinner";
import { html } from "lit-element";
import { Spinner } from "@/components/spinner/Spinner";

describe("Spinner component", () => {
  afterEach(fixtureCleanup);
  
  test("should render correctly", async () => {
    const element = await fixture<Spinner>(`<md-spinner></md-spinner>`);
    expect(element).toBeDefined();
  });
  
  test("should render size", async () => {
    const element = await fixture<Spinner>(html`<md-spinner size="20"></md-spinner>`);
    expect(element.size).toEqual(20);
  });
});
