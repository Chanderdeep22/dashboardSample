import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/retrospection', title: 'Retrospection',  icon:'person', class: '' },
    { path: '/capacityPlanning', title: 'Capacity Planning',  icon:'content_paste', class: '' },
    { path: '/sprintBacklogs', title: 'Sprint Backlog',  icon:'library_books', class: '' },
    { path: '/productBacklog', title: 'Product Backlog',  icon:'bubble_chart', class: '' },
    { path: '/refferenceData', title: 'Refference Data',  icon:'bubble_chart', class: '' },
    { path: '/standUpMeet', title: 'Stand Up Meet',  icon:'bubble_chart', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
