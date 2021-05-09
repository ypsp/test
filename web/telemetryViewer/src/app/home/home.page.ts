import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PacketService, PacketType } from '../service/packet.service';

import azel_table from '../utils/azel_table.js'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomePage {

  packetType: PacketType = "uhf"
  
  constructor(private ps: PacketService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() { 
    // setInterval(()=>{
    //   this.cd.detectChanges()
    // }, 100)


    let a=null || 0
    //a["n"] = 1
    console.log(a);
    
    if (a==null) {
      console.log("true");
    } else {
      console.log("false");
    }
    
  }

  segmentChanged() {
    this.ps.packetType = this.packetType
  }


}
