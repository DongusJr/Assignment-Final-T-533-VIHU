import * as datefns from "date-fns";
import moment from "moment";

export function getTimeFromNow(createdAt: Date){
    return datefns.formatDistanceToNow(createdAt)
}