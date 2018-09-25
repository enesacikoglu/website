import { NgModule } from '@angular/core';

import { SocisWebSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SocisWebSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SocisWebSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SocisWebSharedCommonModule {}
