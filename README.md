# is-42

This module exposes a boolean function that returns whether or not a given
parameter is the number 42.

## Installation

In Node:

```bash
npm install @lambtron/is-42
```

In Deno, there is no separate install step. You can use `import` it directly:

```js
import { is42 } from "https://raw.githubusercontent.com/lambtron/is-42/main/mod.ts";
```

Or if you want to use `npm` specifier:

```js
import { is42 } from "npm:@lambtron/is-42";
```

## Usage

```js
is42(42); // true
is42(123); // false
is42('hello'); // false
```

## MIT License

Copyright 2023 @lambtron

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.