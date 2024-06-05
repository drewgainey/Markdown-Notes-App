import { contextBridge } from 'electron';

if (!process.contextIsolated) {
  throw new Error('Context Isolation Must be Enabled in the BrowserWindow');
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  });
} catch (e) {
  console.log(e);
}
