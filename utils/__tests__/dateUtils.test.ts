import { Game } from "../../lib/gameStore"
import * as dateUtils from '../dateUtils';


describe("getTimeFromNow", () => {

    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date("2022-01-01T00:00:01").getTime());
    })

    it("should return 'less than a mintute' if time is in the range 0-30 seconds", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-01T00:00:01"));
        expect(result).toBe("less than a minute")
    });
  });