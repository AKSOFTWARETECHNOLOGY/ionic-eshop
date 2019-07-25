import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryLists: any = [];
  
  constructor(public navCtrl: NavController, public http: Http, private route: ActivatedRoute) { }

  showPage(pageName: string) {
    console.log(pageName);
    this.navCtrl.navigateForward(pageName);
  }

  showCategoryPage(pageName: string, CategoryId: string) {
    console.log(pageName+' '+CategoryId);
    this.navCtrl.navigateForward(pageName+'/'+CategoryId);
  }

  showProductPage(pageName: string, ProductId: string) {
    console.log(pageName+' '+ProductId);
    this.navCtrl.navigateForward(pageName+'/'+ProductId);
  }
  

  ngOnInit() {
    this.getCategoryListsData();
  }

  
  getCategoryListsData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/home_slider.php').subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const listData = dt.data;
      //console.log(listData);
      this.categoryLists = listData;
    });
  }


}
