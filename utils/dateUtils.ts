import * as datefns from "date-fns";
import moment from "moment";

export function getTimeFromNow(createdAt: Date) : string{
    return datefns.formatDistance(new Date(createdAt),new Date(Date.now()));
}