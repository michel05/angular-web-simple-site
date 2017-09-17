import { QuemSomosComponent } from './quem-somos.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path : 'quem-somos', component: QuemSomosComponent}
          ])
    ],
    exports: [
        RouterModule
    ]
})

export class QuemSomosRoutingModule {

}
