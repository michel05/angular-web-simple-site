import { NossaVisaoComponent } from './nossa-visao.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path : 'nossa-visao', component: NossaVisaoComponent}
          ])
    ],
    exports: [
        RouterModule
    ]
})

export class NossaVisaoRoutingModule {

}
