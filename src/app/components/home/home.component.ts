import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { jwtDecode } from 'jwt-decode';
import { AZURE_AD_SCOPES } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tokenInfo: any = null;
  token = '';
  claims: { key: string; value: string }[] = [];

  constructor(private msalService: MsalService) {}

  ngOnInit() {
    const accounts = this.msalService.instance.getAllAccounts();
    if (accounts.length > 0) {
      this.msalService
        .acquireTokenSilent({
          scopes: AZURE_AD_SCOPES,
          account: accounts[0],
        })
        .toPromise()
        .then((response) => {
          this.token = response?.accessToken ?? '';
          this.tokenInfo = jwtDecode(response?.accessToken ?? '');
        })
        .catch((error) => {
          console.error('Token acquisition failed:', error);
        });
    }
  }

  logout() {
    this.msalService.logoutRedirect();
  }
}
