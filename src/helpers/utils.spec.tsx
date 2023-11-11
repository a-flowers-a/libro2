import { shuffleArray } from "./utils";

describe("all Utils tests", () => {
  describe("All shuffleArray tests", () => {
    test("Shuffle emtpy aarray", () => {
      expect(shuffleArray<string>([])).toEqual([]);
    });

    test("Shuffle string aarray", () => {
      expect(
        shuffleArray<string>([
          "wow",
          "foo",
          "bar",
          "crazy",
          "alle",
          "gute",
          "dinge",
          "sind",
          "frei",
        ])
      ).not.toEqual([
        "wow",
        "foo",
        "bar",
        "crazy",
        "alle",
        "gute",
        "dinge",
        "sind",
        "frei",
      ]);
    });
  });
});
