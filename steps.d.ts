/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type BrowserHelpers = import('./homework6/helpers/browser').BrowserHelpers;

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
interface Methods extends CodeceptJS.Puppeteer {}
interface I extends ReturnType<steps_file>, BrowserHelpers {}
