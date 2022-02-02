## spawn_rfid_module

Read and parse input device(like mouse, keyboard, RFID scanner and IR-Remote)'s event data.  
Forked from  [input-event](https://www.npmjs.com/package/input-event).

**NOTE: This module only runs on Linux based systems**

This module uses the child_process.spawn() method instead of openSync.

see also: https://www.kernel.org/doc/Documentation/input

### Installation

```
$ npm install spawn_rfid_module --save
```

### Example

```javascript
const InputEvent = require('spawn-input-event');

const input = new InputEvent('/dev/input/event0');

const keyboard = new InputEvent.Keyboard(input);

keyboard.on('keyup', console.log);
keyboard.on('keydown', console.log);
keyboard.on('keypress', console.log);
```

**See the [example.js](example.js) file for use with an rfid reader**

### Utils

Kill the current instance

```javascript
input.destroy();
keyboard.destroy();
```

Get the process PID 

```javascript
input.getPid()
```

### TODO

- [x] Keyboard
- [x] Mouse
- [x] IR-Remote
- [x] JoyStick
- [x] Rotary (eg. KY040)

### API

check this file: `index.js`

### Contributing

- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy.

### MIT license

Copyright (c) 2016 lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
