import { ToastOptions } from 'ng2-toastr';

export class CustomToastOptions extends ToastOptions {
  animate = 'flyRight';
  positionClass = 'toast-bottom-right';
  showCloseButton = true;
}

export const CustomToastOptionsProvider = { provide: ToastOptions, useClass: CustomToastOptions };