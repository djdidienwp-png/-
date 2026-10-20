import { Component, OnInit } from '@angular/core';

import { SharemtComponent } from '@systex/txn/SW';
import { SWValidateService } from '@systex/txn/SW';
import { SWErrormsgService } from '@systex/txn/SW';
import { SWControlService } from '@systex/txn/SW';

// production
// import { SWValidateService, SWControlService, SWErrormsgService } from 'platform';

@Component({
  selector: 'app-mt491',
  templateUrl: './h10_mt491.component.html', standalone: false,
  styleUrls: ['./h10_mt491.component.css']})
export class H10_MT491Component implements OnInit {

  constructor(
    private swiftval: SWValidateService, // 檢核規格欄位值(不為CODEWORD及TABLE值)
    private swifterr: SWErrormsgService, // 抓取錯誤訊息代碼
    public con: SWControlService,        //
    

  ) { }

  public smt: SharemtComponent = new SharemtComponent(this.swiftval, this.swifterr, this.con);

  ngOnInit() {
    this.smt.ngOnInit();
    this.con.SetAttrUppercase();
  }
}
