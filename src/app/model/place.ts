export class Place {
    private geometry: any;
    private icon: string;
    private id: string;
    private name: string;
    private photos: any[];
    private place_id: string;
    private reference: string;
    private scope: string;
    private types: string[];
    private vicinity: string;

    constructor(data) {
        this.geometry = data.geometry;
        this.icon = data.icon;
        this.id = data.id;
        this.name = data.name;
        this.photos = data.photos;
        this.place_id = data.place_id;
        this.reference = data.reference;
        this.scope = data.scope;
        this.types = data.types;
        this.vicinity = data.vicinity;
    }

    getName(): string { return this.name }
    getIcon(): string { return this.icon }
    getTypes(): string[] { return this.types }
    getPhotoRef(): string {
        // return this.photos[0].photo_reference;
        if (!this.photos) return "NO PHOTOS";

        for (let i = 0; i < this.photos.length; i++) {
            return this.photos[i].photo_reference;
        }
    }
}
