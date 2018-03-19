import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  userdata: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userdata = this.navParams.get("testdata");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  popView(){
    this.navCtrl.pop();

  }
}
