import React from 'react';
import Switch from './Switch'
import Prism from 'prismjs';

class SwitchDemo extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      switchState:false,
    }
  }
  handleSwitchChange = ()=> {
    this.setState({ switchState: !this.state.switchState })
  }
  render () {
    return(
      <div>
        <h4>Switch</h4>
        <br />
        
        <Switch 
          isChecked={ this.state.switchState }
          handleSwitchChange={this.handleSwitchChange} 
        />
        <div>The switch is {this.state.switchState ? "on":"off"}</div>
        <br />
        <pre><code className="language-jsx">
          {`
          import Switch from './Switch'
 
          ...

          this.state = {
            switchState:false,
          }

          ...
          
          handleSwitchChange = ()=> {
            this.setState({ switchState: !this.state.switchState })
          }    

          ...
           
          <Switch 
            isChecked = { this.state.switchState }
            handleSwitchChange = { this.handleSwitchChange } 
          />
          `} 
        </code></pre>
      </div>
    );
  }
}
export default SwitchDemo