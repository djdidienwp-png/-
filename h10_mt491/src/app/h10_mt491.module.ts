import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { H10_MT491Component } from './h10_mt491.component';
import {
  GroupSelectDirective,
  InputSelectDirective,
} from '@systex/platform/modules';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LazyElementsModule } from '@angular-extensions/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    H10_MT491Component,
    GroupSelectDirective,
    InputSelectDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    LazyElementsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TransactionsH10Mt491Module {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    this.registerTransactionsH10Mt491Component();
  }

  registerTransactionsH10Mt491Component() {
    const customElement = createCustomElement(H10_MT491Component, {
      injector: this.injector,
    });
    customElements.define('transactions-h10_mt491', customElement);
  }
}
