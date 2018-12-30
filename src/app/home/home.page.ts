import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: Array<{title: string, subtitle: string}> = [];
  search: boolean = false;
  constructor(){
    for (let i = 0; i < 10; i++){
      this.cards.push({title: `Card ${i}`, subtitle: `Subtitle ${i^2}`})
    }
  }

  showSearch(){
    if (this.search == false){
      this.search = true
    }else{
      this.search = false
    }
  }
}
