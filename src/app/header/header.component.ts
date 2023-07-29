import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menuItems = [
  //{linkId: 1, linkName: 'Home', linkUrl: 'home'},
  {linkId: 2, linkName: 'Accounts', linkUrl: 'account'},
  {linkId: 3, linkName: 'Stocks', linkUrl: 'stock'},
  {linkId: 4, linkName: 'Trades', linkUrl: 'trade'},
  {linkId: 5, linkName: 'Dividends', linkUrl: 'dividend'}

];


  ngOnInit(): void {
    
  }

}
