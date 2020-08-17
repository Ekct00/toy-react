import { Component, render, createElement } from './toy-react'
 
class MyComponent extends Component {
    render(){
        return <div>
            <h1>Hello</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>a</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);