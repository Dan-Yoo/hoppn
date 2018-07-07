import { TestBed, inject } from '@angular/core/testing';

import { UserPlacesService } from './user-places.service';

describe('UserPlacesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserPlacesService]
        });
    });

    it('should be created', inject([UserPlacesService], (service: UserPlacesService) => {
        expect(service).toBeTruthy();
    }));
});
