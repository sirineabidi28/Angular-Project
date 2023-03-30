import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
title!:String;

test!:boolean;

name = "Ali";

test1 : any;
name2 = "world";

status ="activée";
  
getStatus(){
  return this.status;
}
save(){
  console.log("hello groupe 3");

}
namelist = ['Ali',"Ahmed","Imen"]

condition=true;

msg: any;
date = new Date();

items!: MenuItem[];
activeItem!: MenuItem;


  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];





    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];

  this.activeItem = this.items[0];


      this.items = [
          {
              label:'File',
              icon:'pi pi-fw pi-file',
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-plus',
                      items:[
                      {
                          label:'Bookmark',
                          icon:'pi pi-fw pi-bookmark'
                      },
                      {
                          label:'Video',
                          icon:'pi pi-fw pi-video'
                      },

                      ]
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-trash'
                  },
                  {
                      separator:true
                  },
                  {
                      label:'Export',
                      icon:'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
              label:'Edit',
              icon:'pi pi-fw pi-pencil',
              items:[
                  {
                      label:'Left',
                      icon:'pi pi-fw pi-align-left'
                  },
                  {
                      label:'Right',
                      icon:'pi pi-fw pi-align-right'
                  },
                  {
                      label:'Center',
                      icon:'pi pi-fw pi-align-center'
                  },
                  {
                      label:'Justify',
                      icon:'pi pi-fw pi-align-justify'
                  },

              ]
          },
          {
              label:'Users',
              icon:'pi pi-fw pi-user',
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-user-plus',

                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-user-minus',

                  },
                  {
                      label:'Search',
                      icon:'pi pi-fw pi-users',
                      items:[
                      {
                          label:'Filter',
                          icon:'pi pi-fw pi-filter',
                          items:[
                              {
                                  label:'Print',
                                  icon:'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon:'pi pi-fw pi-bars',
                          label:'List'
                      }
                      ]
                  }
              ]
          },
          {
              label:'Events',
              icon:'pi pi-fw pi-calendar',
              items:[
                  {
                      label:'Edit',
                      icon:'pi pi-fw pi-pencil',
                      items:[
                      {
                          label:'Save',
                          icon:'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label:'Delete',
                          icon:'pi pi-fw pi-calendar-minus'
                      },

                      ]
                  },
                  {
                      label:'Archieve',
                      icon:'pi pi-fw pi-calendar-times',
                      items:[
                      {
                          label:'Remove',
                          icon:'pi pi-fw pi-calendar-minus'
                      }
                      ]
                  }
              ]
          },
          {
              label:'Quit',
              icon:'pi pi-fw pi-power-off'
          }
      ];
  }





}
