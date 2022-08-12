# Cluck

An expressive, light-weight, assertion module. Inspired by the expressive language features of Chai,
but without the bulk of a full-featured BDD/TDD library. Cluck is a great choice for validating values 
at runtime.

Uncompressed, Cluck weighs in under 2KB.

# Assertions

Cluck uses an expressive API that allows you to write assertions in plain English. For example,

```javascript
expect(123).to.be.a.number;

expect([1, 2, 3]).to.be.an.array;

expect(value).to.be.false;
expect(value).to.be.true;

// Or, if you prefer you can use function calls
expect(123).to.be.a("number");

expect([1, 2, 3]).to.be.an("array");

expect(value).to.be(false);
expect(value).to.be(true);
```

# TypeScript

Cluck was written entirely in TypeScript, so it comes with type definitions in the box.

# Contributing

For issues/bugs, please [file an issue](https://github.com/empereaux/cluck/issues/new).

Pull requests are welcome, but please review the
[contribution guidelines](https://github.com/empereaux/cluck/blob/main/CONTRIBUTING.md)
and [community code of conduct](https://github.com/empereaux/cluck/blob/main/CODE_OF_CONDUCT.md)
before submitting a change. Please keep in mind that Cluck was written to be quick and lightweight,
so changes that introduce a large amount of code or dependencies may be declined.

# License

```
MIT License

Copyright (c) 2022 empereaux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```