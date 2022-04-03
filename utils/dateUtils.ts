import * as datefns from "date-fns";
import moment from "moment";

export function getTimeFromNow(createdAt?: Date) : string{
    if (createdAt != undefined) {
        // return datefns.formatDistanceToNow(createdAt);
        return moment(createdAt).fromNow();
    }
    return "";
}