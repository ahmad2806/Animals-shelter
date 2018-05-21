import { EventModel } from "../event/event.model";


export class DonorModel {
    constructor(
        public name: string,
        public lastName:string,
        public id: string,
        public birthday: Date,
        public address: string,
        public phone: string,
        public homePhone: string,
        public email: string,
        public donorType: string,
        public amount: number,
        public hisEvent: EventModel[],
        public description:string,
    ) { }
}