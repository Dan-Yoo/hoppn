import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlacesService } from '../../service/places.service';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';

@Component({
    selector: 'app-map-filter',
    templateUrl: './map-filter.component.html',
    styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {

    @Input() long: number;
    @Input() lat: number;
    @Input() radius: number;

    filters = [
        { value: 'airport', viewValue: 'Airport' },
        { value: 'aquarium', viewValue: 'Aquarium' },
        { value: 'bank', viewValue: 'Bank' },
        { value: 'cafe', viewValue: 'Cafe' },
        { value: 'bar', viewValue: 'Bar' },
        { value: 'bus_station', viewValue: 'Bus Station' },
        { value: 'embassy', viewValue: 'Embassy' }
    ];

    placeSearchForm: FormGroup;

    constructor(private placesService: PlacesService,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        this.placeSearchForm = this.fb.group({
            long: [this.long, null],
            lat: [this.lat, null],
            radius: [this.radius, null],
            filter: [''],
            isOpen: [false]
        });
    }

    radiusChange(event) {
        this.placeSearchForm.patchValue({ radius: event.value });
    }

    patchLocation(long, lat) {
        this.placeSearchForm.patchValue({
            lat: lat,
            long: long
        });
    }

}
