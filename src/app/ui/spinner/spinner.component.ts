import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../service/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  showSpinner$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) { 
    this.showSpinner$ = this.spinnerService.showSpinner$;
  }

  ngOnInit() {
  }

}
