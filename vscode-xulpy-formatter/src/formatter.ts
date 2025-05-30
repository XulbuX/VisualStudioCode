import * as vscode from 'vscode';

export class PythonFormatter {
  private config: vscode.WorkspaceConfiguration;

  constructor() {
    this.config = vscode.workspace.getConfiguration('customPythonFormatter');
  }

  format(document: vscode.TextDocument): vscode.TextEdit[] {
    const edits: vscode.TextEdit[] = [];
    const maxLineLength = this.config.get<number>('maxLineLength') || 88;

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const formatted = this.formatLine(line.text, maxLineLength);

      if (formatted !== line.text) {
        edits.push(vscode.TextEdit.replace(line.range, formatted));
      }
    }

    return edits;
  }

  private formatLine(line: string, maxLength: number): string {
    let formatted = line;
    // REMOVE TRAILING WHITESPACE
    formatted = formatted.trimEnd();
    // ADD SPACE AFTER COMMA
    formatted = formatted.replace(/,(\S)/g, ', $1');
    // ADD SPACES AROUND OPERATORS
    formatted = formatted.replace(/([^\s=!<>])([=!<>]+)([^\s=])/g, '$1 $2 $3');
    // HANDLE LONG LINES
    if (formatted.length > maxLength) {
      formatted = this.breakLongLine(formatted, maxLength);
    }
    return formatted;
  }

  private breakLongLine(line: string, maxLen: number): string {
    if (line.length > maxLen) {
      if (line.includes('(')) {
        // BREAK AFTER OPENING PARENTHESIS
        const parts = line.split('(');
        return `${parts[0]}(\n    ${parts[1]}`;
      }
    }
    return line;
  }
}
