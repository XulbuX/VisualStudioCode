import * as vscode from 'vscode';
import { PythonFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext) {
  const formatter = new PythonFormatter();

  // REGISTER THE FORMATTER
  const disposable = vscode.languages.registerDocumentFormattingEditProvider('python', {
    provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
      return formatter.format(document);
    },
  });

  // REGISTER FORMAT ON PASTE IF ENABLED
  if (vscode.workspace.getConfiguration('customPythonFormatter').get('formatOnPaste')) {
    context.subscriptions.push(
      vscode.workspace.onDidChangeTextDocument(async (e) => {
        if (e.document.languageId === 'python' && e.contentChanges.some(change => change.text.length > 1)) {
          await vscode.commands.executeCommand('editor.action.formatDocument');
        }
      }),
    );
  }

  // REGISTER FORMAT ON SAVE IF ENABLED
  if (vscode.workspace.getConfiguration('customPythonFormatter').get('formatOnSave')) {
    context.subscriptions.push(
      vscode.workspace.onWillSaveTextDocument((event) => {
        if (event.document.languageId === 'python') {
          event.waitUntil(
            vscode.commands.executeCommand('editor.action.formatDocument'),
          );
        }
      }),
    );
  }

  context.subscriptions.push(disposable);
}

export function deactivate() {}
