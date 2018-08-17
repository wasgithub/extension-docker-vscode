import vscode = require('vscode');
import { ext } from "../extensionVariables";

export type OS = 'Windows' | 'Linux';

/**
 * Prompts for a port number
 * @throws `UserCancelledError` if the user cancels.
 */
export async function promptForPort(port: number): Promise<string> {
    let opt: vscode.InputBoxOptions = {
        placeHolder: `${port}`,
        prompt: 'What port do you want for the WebApp Protheus on?',
        value: `${port}`
    }

    return ext.ui.showInputBox(opt);
}

/**
 * Prompts for an OS
 * @throws `UserCancelledError` if the user cancels.
 */
export async function quickPickOS(): Promise<OS> {
    return 'Linux';
}
