import moment from "moment";

export function getTimeFromNow(createdAt: Date | undefined){
    return moment(createdAt).fromNow()
}