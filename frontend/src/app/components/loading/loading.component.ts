import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  state: Observable<boolean> | undefined;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.state = this.loadingService.getState;
    this.loadingService.hide();
  }

}
