import React, { FormEvent } from 'react'
import { render } from '@testing-library/react';

type MyProps = { first: boolean, id: number };
type MyState = { childComponents: number};

export default class WhyComponent extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props)
        this.state = {
            childComponents: 0,
        }
    }

    private handleSubmit(event: FormEvent) {
        event.preventDefault();

        this.setState({
            childComponents: this.state.childComponents + 1
        })
        var target = event.target;
        this.forceUpdate(() => {
            this.focusNextElement(target as Element)
        })
    }

    private focusNextElement(element: Element | null) {
        if(element == null) return
        if(element.tagName.toLowerCase() === "input") {
            (element as HTMLElement).focus()
            return
        }

        const inputs = document.getElementsByTagName('input');
        for (let index = 0; index < inputs.length; ++index) {
            if(inputs[index].isEqualNode(element.children[0])) {
                inputs[index + 1].focus()
                return
            }
        }
    }

    render() {
        const awef = this.props.first === true ? 'Enter a problem' : 'Because ...'
        const items = []
        for(let i=0; i<this.state.childComponents; i++) {
            const childId = this.props.id + i * 100 + 1
            items.push(<WhyComponent first={false} id={childId}/>)
        }

        return (
            <div>
                <form className="Why-component" onSubmit={(e) => (this.handleSubmit(e))}>
                    <input type="text" name="name" placeholder={awef} id={String(this.props.id)}/>
                    <button>Why</button>
                </form>
                <div className="Why-component-children">
                    {items}
                </div>
            </div>
            
        );
    }
  }