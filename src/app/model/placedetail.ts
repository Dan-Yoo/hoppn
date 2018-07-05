import { Place } from './place';

export interface PlaceDetail extends Place {
    address_components: any;
    adr_address: string;
    formatted_address: string;
    formatted_phone_number: string;
    reviews: object[];
    url: string;
}