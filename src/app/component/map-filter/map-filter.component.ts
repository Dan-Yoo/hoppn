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

    // confirmed working
    types = [
        { value: 'clothing_store', viewValue: 'Clothing Store' },
        { value: 'museum', viewValue: 'Museum' },
        { value: 'shopping_mall', viewValue: 'Shopping Mall' },
        { value: 'cafe', viewValue: 'Cafe' },
        { value: 'bar', viewValue: 'Bar' },
        { value: 'spa', viewValue: 'Spa' },
        { value: 'restaurant', viewValue: 'Restaurant' },
        { value: 'store', viewValue: 'Store' },
        { value: 'park', viewValue: 'Park' },
        { value: 'night_club', viewValue: 'Night Club' }
    ];

    // for food related types, forward to yelp api in the future
    placeSearchForm: FormGroup;

    constructor(private placesService: PlacesService,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        this.placeSearchForm = this.fb.group({
            long: [this.long, null],
            lat: [this.lat, null],
            radius: [this.radius, null],
            type: [''],
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
