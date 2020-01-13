import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from 'src/app/editor/editor/editor.component';
import { Template1Component } from './views/template1/template1.component';
import { DesignComponent } from 'src/app/editor/design/design.component';
import { PreviewComponent } from 'src/app/editor/preview/preview.component';
import { UserAuthentication } from '../user-authentication/user-authentication';

const routes: Routes = [
    {
        path: '',
        component: EditorComponent,
        children: [
            {
                path: 'basic/:id',
                component: Template1Component,
                canActivate: [ UserAuthentication ]
            },
            {
                path: 'design',
                component: DesignComponent,
                canActivate: [ UserAuthentication ],
                data: { screen: 'design' }
            }
        ],
        canActivate: [ UserAuthentication ]
    },
    {
        path: 'preview/:id',
        component: PreviewComponent,
        canActivate: [ UserAuthentication ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class EditorRoutingModule { }
