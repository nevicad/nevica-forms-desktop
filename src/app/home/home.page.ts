import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  forms: Array<{title: string, subtitle: string}> = [];
  filteredForms: Array<{title: string, subtitle: string}>;
  search: boolean = false;
  searchTerm: string;
  constructor(private router: Router){
    for (let i = 0; i < 10; i++){
      this.forms.push({title: `Card ${i}`, subtitle: `Subtitle ${i^2}`})
    }
    console.log(this.forms);
    this.filterForms('');
  }

  showSearch(){
    if (this.search == false){
      this.search = true
    }else{
      this.search = false
    }
  }

  filterForms(filter: string = this.searchTerm){
    this.filteredForms = this.forms.filter((item)=>{
      return item.title.toLowerCase().includes(filter.toLowerCase())
    })
  }

  pushPage(page: string, data: any){
    this.router.navigate([page,data])
  }

  newForm(){
    this.pushPage('/form',{})
  }
}
