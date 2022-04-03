import { Game } from "../../lib/gameStore"
import * as dateUtils from '../dateUtils';


describe("getTimeFromNow", () => {
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date("2022-01-01T00:00:01").getTime());
    })

    it("should return 'less than a mintute' if time is in the range 0-30 seconds", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-01T00:00:01"));
        expect(result).toBe("less than a minute");
    });

    it("should return '1 mintute' if time is in the range 30-90 seconds", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-01T00:00:45"));
        expect(result).toBe("1 minute");
    });

    it("should return 'x mintutes' if time is in the range 2-44 minutes", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-01T00:05:45"));
        expect(result).toBe("6 minutes");
    });

    it("should return 'about 1 hour' if time is in the range 44-89 minutes", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-01T00:45:45"));
        expect(result).toBe("about 1 hour");
    });

    it("should return 'about x hours' if time is in the range 89min-23hrs59mins30secs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-01T02:45:45"));
        expect(result).toBe("about 3 hours");
    });

    it("should return 'about 1 day' if time is in the range 23hrs59mins30secs-41hrs59mins30secs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-02T02:45:45"));
        expect(result).toBe("1 day");
    });

    it("should return 'x days' if time is in the range 41hrs59mins30secs-29days23hrs59mins30secs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-01-11T02:45:45"));
        expect(result).toBe("10 days");
    });

    it("should return 'about 1 month' if time is in the range 29days23hrs59mins30secs-44days23hrs59mins30secs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-02-01T02:45:45"));
        expect(result).toBe("about 1 month");
    });

    it("should return 'about 2 month' if time is in the range 44days23hrs59mins30secs-59days23hrs59mins30secs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-03-01T02:45:45"));
        expect(result).toBe("about 2 months");
    });

    it("should return 'x months' if time is in the range 59days23hrs59mins30secs-1 yr", () => {
        let result = dateUtils.getTimeFromNow(new Date("2022-06-01T02:45:45"));
        expect(result).toBe("5 months");
    });

    it("should return 'about 1 year' if time is in the range 1yr-1yr3months", () => {
        let result = dateUtils.getTimeFromNow(new Date("2023-01-01T02:45:45"));
        expect(result).toBe("about 1 year");
    });

    it("should return 'over 1 year' if time is in the range 1yr3months-1yr9months", () => {
        let result = dateUtils.getTimeFromNow(new Date("2023-05-01T02:45:45"));
        expect(result).toBe("over 1 year");
    });

    it("should return 'almost 2 years' if time is in the range 1yr9months-2yrs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2023-12-01T02:45:45"));
        expect(result).toBe("almost 2 years");
    });

    it("should return 'about x years' if time is in the range Xyrs-Xyrs3months", () => {
        let result = dateUtils.getTimeFromNow(new Date("2025-01-01T02:45:45"));
        expect(result).toBe("about 3 years");
    });

    it("should return 'over x years' if time is in the range Xyrs3months-Xyears9months", () => {
        let result = dateUtils.getTimeFromNow(new Date("2025-06-01T02:45:45"));
        expect(result).toBe("over 3 years");
    });

    it("should return 'almost x+1 years' if time is in the range Xyrs9months-X+1yrs", () => {
        let result = dateUtils.getTimeFromNow(new Date("2025-12-01T02:45:45"));
        expect(result).toBe("almost 4 years");
    });
  });