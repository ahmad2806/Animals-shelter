import { VolunteerModel } from "../volunteer/volunteer.model";

export class EventModel{
    constructor(public name: string, public type: string,
                public date: DateTimeFormatPartTypes,public description: string,
                public relativeTo: VolunteerModel[]){

    }
}