import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  activeMenuBar: string = 'home';

  constructor(public router: Router, public route: ActivatedRoute) {
    this.getMenuList();
    this.router.events.subscribe(value => {
      if(this.router.url){
        let urlList =this.router.url?.toString().split('/');
        if(urlList.length > 1 && urlList[1]){
          this.activeMenuBar = urlList[1];
        }
      }
    });
  }

  ngOnInit() {}

  menuList: any[] = [];

  getMenuList() {
    this.menuList = [
      { label: 'Home', icon: 'home', routeLink: 'home' },
      { label: 'Customers', icon: 'person', routeLink: 'customer' },
      { label: 'Employee', icon: 'group', routeLink: 'employee' },
      { label: 'Schedule', icon: 'event', routeLink: 'schedule' },
      { label: 'History', icon: 'history', routeLink: 'history' },
      { label: 'Services', icon: 'engineering', routeLink: 'service-list' },
      { label: 'Invoice', icon: 'description', routeLink: 'invoice' },
    ];
  }
  onTabClick(routeLink){
    this.activeMenuBar = routeLink;
    this.router.navigate([routeLink])
  }
}
