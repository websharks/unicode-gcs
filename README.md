## Unicode General Categories

Unicode general categories; e.g., L, Ll, Lu, Nd, etc. This library makes it easy to build regular expressions in JavaScript that will consider all unicode scripts.

### NodeJs Acquisition

```bash
$ npm install ws-unicode-gcs --save-dev
```

```js
const u = require('ws-unicode-gcs');
```

### Browser Acquisition

```html
<script src="./dist/index.min.js"></script>
<script>var u = WebSharks.UnicodeGcs;</script>
```

#### CDN Acquisition

_**Tip:** To use a specific release, replace `/1.0.2` in this URL with `/[tag]`_

```html
<script src="https://cdn.rawgit.com/websharks/unicode-gcs/1.0.2/dist/index.min.js"></script>
<script>var u = WebSharks.UnicodeGcs;</script>
```

### Usage / Examples

```js
var u = WebSharks.UnicodeGcs;
// Or: const u = require('ws-unicode-gcs');

var containsLetter = new RegExp('[' + u.L + ']');
var containsAnythingNotALetter = new RegExp('[^' + u.L + ']');
var isAllAlphanumeric = new RegExp('^[' + u.L + u.N + ']$');

if (containsLetter.test('Iñtërnâtiônàlizætiøn☃')) {
  console.log('Contains letter.'); // Yes
}
if (containsAnythingNotALetter.test('Iñtërnâtiônàlizætiøn☃')) {
  console.log('Contains something not a letter.'); // Yes
}
if (isAllAlphanumeric.test('Iñtërnâtiônàlizætiøn☃')) {
  console.log('Is all alphanumeric.'); // No
}
```

### List of All `WebSharks.UnicodeGcs` Properties

```txt
/*
 * General Categories:
 *
 * L - Letter
 *     Ll - Lowercase letter.
 *     Lu - Uppercase letter.
 *     Lt - Titlecase letter.
 *     Lm - Modifier letter.
 *     Lo - Letter without case.
 *
 * M - Mark
 *     Mn - Non-spacing mark.
 *     Mc - Spacing combining mark.
 *     Me - Enclosing mark.
 *
 * N - Number
 *     Nd - Decimal digit.
 *     Nl - Letter number.
 *     No -  Other number.
 *
 * P - Punctuation
 *     Pd - Dash punctuation.
 *     Ps - Open punctuation.
 *     Pe - Close punctuation.
 *     Pi - Initial punctuation.
 *     Pf - Final punctuation.
 *     Pc - Connector punctuation.
 *     Po - Other punctuation.
 *
 * S - Symbol
 *     Sm - Math symbol.
 *     Sc - Currency symbol.
 *     Sk - Modifier symbol.
 *     So - Other symbol.
 *
 * Z - Separator
 *     Zs - Space separator.
 *     Zl - Line separator.
 *     Zp - Paragraph separator.
 *
 * C - Other
 *     Cc - Control.
 *     Cf - Format.
 *     Co - Private use.
 *     Cs - Surrogate.
 *     Cn - Unassigned.
 */
```

```
/*
 * Other Categories:
 *
 *     other.v - All vertical whitespace.
 *     other.h - All horizontal whitespace.
 *     other.s - All whitespace (vertical & horizontal).
 *
 *     other.scWordChars - Characters considered 'part of a word' in many spell checkers.
 *      Same as: L + M + N + Pd + Pc + ' (note: includes apostrophe in contractions).
 *
 *     other.aceWordChars - Word characters in the Ace web-based code/text editor.
 *      Same as: L + Mn + Mc + Nd + Pc + $_ (note: excludes Me, Nl, No, Pd).
 *
 *     other.atomNonWordChars - Non-word characters in the Atom code editor.
 *      Consists of: /\()"':,.;<>~!@#$%^&*|+=[]{}`?-…
 */
```
