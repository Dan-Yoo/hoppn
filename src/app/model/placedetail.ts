import { Place } from './place';

export class PlaceDetail extends Place {
    private addressComponents: any;
    private formattedAddress: string;
    private url: string;

    constructor(data) {
        super(data);
        this.addressComponents = data.address_components;
        this.formattedAddress = data.formatted_address;
        this.url = data.url;
    }
}