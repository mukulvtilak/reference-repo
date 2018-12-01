import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';


const routes: Routes = [
    { path:'', redirectTo: 'compnent4' },
    { path: 'component4', component: Component4Component },
    { path: 'component5', component: Component5Component }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes), CommonModule],
        declarations: [ Component4Component, Component5Component]
    }
)
export class Lazymodule2Module {
    constructor() {
        
    }
}