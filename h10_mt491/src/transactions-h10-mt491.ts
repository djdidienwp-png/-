import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TransactionsH10Mt491Module } from './app/h10_mt491.module';
platformBrowserDynamic()
  .bootstrapModule(TransactionsH10Mt491Module)
  .catch((err) => console.error(err));
