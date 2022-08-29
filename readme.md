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

Why use TypeScript?

- JS is dynamically typed, it doesn't know the variable type. While TS is statically typed, you explicitly assign types to variables / function parameters / return values
- Advantages: produce less error code, easier to debug due to alert in IDE, higher predictability & readability, more popular, client compliance (better security)
- Disadvantages: more code to write, more thing to learn, require compilation

React with TypeScript

```
npx create-react-app . --template typescript
```

Example use of TS in react component

Header.tsx

```
export interface Props {
  title: string,
  color?: string    // optional prop
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{color: props.color ? props.color : 'blue'}}> {props.title}</h1>
    </header>
  )
}

export default Header;
```

App.tsx

```
import './App.css'
import Header from './components/Header'

function App() {
  return(
    <div className="App">
      <Header title="Hello TypeScript" color="red" />
    </div>
  )
}


export default App;
```
