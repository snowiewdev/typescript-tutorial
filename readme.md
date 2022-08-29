Install typescript globally

```
npm i -g typescript
```

check typescript version

```
tsc --version
tsc -v
```

TSC(typescript compiler) compile ts file to js file

```
tsc xxx.ts
tsc --watch xxx.ts
```

Create tsconfig.json file

```
tsc --init
```

Why use typescript?

- JS is dynamically typed, it doesn't know the variable type. While TS is statically typed, you explicitly assign types to variables / function parameters / return values
- Advantages: produce less error code, easier to debug due to alert in IDE, higher predictability & readability, more popular
- Disadvantages: more code to write, more thing to learn, require compilation
