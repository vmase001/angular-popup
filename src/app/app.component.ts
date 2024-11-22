import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/services/alert.service';
import { AlertTypeEnum } from './alert/types/alert.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alertType = AlertTypeEnum;
  constructor(private alertService: AlertService) {}

  showAlert(type: AlertTypeEnum): void {
    this.alertService.setAlert({
      type,
      text: 'This is a test Alert',
    });
  }
}
