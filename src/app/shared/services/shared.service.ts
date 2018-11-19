import { Injectable } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';
import { FormGroup, AbstractControl } from '@angular/forms';

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private toastrService: ToastService
  ) { }


  showSuccess(title: string, bodyMessage: string) {
    const options = { closeButton: true, tapToDismiss: false, toastClass: 'toastSuccess' };
    this.toastrService.success(bodyMessage, title, options);
  }

  showError(title: string, bodyMessage: string) {
    const options = { closeButton: true, tapToDismiss: false, toastClass: 'toastError' };
    this.toastrService.error(bodyMessage, title, options);
  }

  showWarning(title: string, bodyMessage: string) {
    const options = { closeButton: true, tapToDismiss: false, toastClass: 'toastWarning' };
    this.toastrService.warning(bodyMessage, title, options);
  }

  showInfo(title: string, bodyMessage: string) {
    const options = { closeButton: true, tapToDismiss: false, toastClass: 'toastWarning' };
    this.toastrService.info(bodyMessage, title, options);
  }

  removeItemFromArr(arr, item) {
    const i = arr.indexOf(item);
    arr.splice(i, 1);
    return arr;
  }

}
