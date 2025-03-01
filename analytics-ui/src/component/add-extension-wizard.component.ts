import { Component } from '@angular/core';
import { IManagedObject, IManagedObjectBinary } from '@c8y/client';
import { gettext } from '@c8y/ngx-components';
import { AnalyticsService } from '../shared/analytics.service';

@Component({
    selector: 'analytics-add-extension',
    template: `<extension-add
      [headerText]="headerText"
      [headerIcon]="'upload'"
      [successText]="successText"
      [uploadExtensionHandler]="uploadExtensionHandler"
      [canGoBack]="true"
    ></extension-add>`
  })
  export class AddExtensionWizardComponent {
    headerText: string = gettext('Upload analytics extension');
    successText: string = gettext('Extension created');
  
    constructor(private analyticsService: AnalyticsService) {}
  
    uploadExtensionHandler = (file: File, app: IManagedObject, restart: boolean) => this.uploadExtension(file, app, restart );
  
    async uploadExtension(file: File, app: IManagedObject, restart: boolean): Promise<IManagedObjectBinary> {
      return this.analyticsService.uploadExtension(file, app, restart);
    }

  }