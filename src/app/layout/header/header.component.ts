import { Component, OnInit } from '@angular/core';

import { ShopProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private shopProfileSvc: ShopProfileService) { }

  ngOnInit() {
  }

}
