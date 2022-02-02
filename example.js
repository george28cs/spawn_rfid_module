// Using as RFID reader

import * as process from 'process';

// Keys for use as numeric RFID reader 
// Remove the NUMERIC_CODES variable (line 9) and update line 55 if you need to use other characters
const KEYS =
  'X^1234567890XXXXqwertzuiopXXXXasdfghjklXXXXXyxcvbnmXXXXXXXXXXXXXXXXXXXXXXX';
const NUMERIC_CODES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let pid = null;
let aux_pid = null;

export const readRfid = () => {
  return new Promise((resolve, reject) => {
    // Keeps a single instance
    if (pid) {
      process.kill(pid, 'SIGINT');
      pid = null;
      if (aux_pid) process.kill(aux_pid, 'SIGINT');
    }

    let string = '';

    //const InputEvent = require('spawn_rfid_module'); Local example
    const InputEvent = require('./index');
    const input = new InputEvent('/dev/input/event0');
    const keyboard = new InputEvent.Keyboard(input);

    // Set process ID
    pid = keyboard.getPid();
    aux_pid = input.getPid();

    // Wait 10 seconds
    const timer = setTimeout(() => {
      pid = null;
      // Optional -- Kill the instance
      input.destroy();
      keyboard.destroy();
      reject('rfidTimeout');
    }, 10000);
    input.on('error', (error) => {
      pid = null;
      reject(error);
    });

    // Returns the rfid string when the ENTER key is pressed
    keyboard.on('keyup', function (event) {
      if (event.code == 28) {
        pid = null;
        resolve(string);
        clearTimeout(timer);
        string = '';
        input.destroy();
        keyboard.destroy();
      } else if (NUMERIC_CODES.includes(event.code)) {
        string += KEYS[event.code];
      }
    });
    keyboard.on('error', (error) => {
      pid = null;
      input.destroy();
      keyboard.destroy();
      reject(error);
    });
  });
};
