import { LitElement, html } from '@polymer/lit-element'

// Should I rename this to XApp?
class App extends LitElement {
  static get properties() {
    return {
      name: {
        type: String
      }
    }
  }

  constructor() {
    super()

    // This is a default value for "name" prop.
    this.name = 'World'
  }

  render() {
    return html`
      <style>
        :host {
          /* We should always specify "display" for :host, IMO */
          display: block;
          padding: 0.5em 1em;
          background-color: #dedede;
          transition: background-color 0.3s ease;
        }
      </style>

      <div>
        <h1 @click="${ev => this.sayBye()}">Hello, ${this.name}!</h1>

        <!-- <slot> is same as React's props.children -->
        <slot/>
      </div>
    `
  }

  sayBye() {
    this.dispatchEvent(
      new CustomEvent('bye', {
        detail: {
          message: `Bye, ${this.name}.`
        }
      })
    )
  }
}

customElements.define('x-app', App)
