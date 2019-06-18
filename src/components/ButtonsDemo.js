import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import './componentStyles/ButtonsDemo.scss';
import IconLock from '../svgs/IconLock' 
import ButtonSDLC from './ButtonSDLC'
import Prism from 'prismjs';


class ButtonsDemo extends React.Component {
  constructor ( props ) {
    super( props );
  }
  render () {
    return(
      <div>
        <h2>Buttons</h2>
        <h4>Primary Action</h4>
        <div>The primary action should be the most important action on the page, typically indicating next likely action the user will take (e.g. Continue, Checkout, Sign In). It is advised to have a single primary action button on each screen for emphasis. On interfaces where there are multiple next likely actions it is at the product owner’s discretion which styles to use.
When combined within button sets, the primary button should appear at the top when vertically stacked and furthest right when horizontal.
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding">Large</div>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="largeButton" 
                      buttonStyle="primaryButton" 
                      text="Primary" 
              />
            </span>
            <span className="buttonDemoPadding">
              <ButtonSDLC disabled={true} size="largeButton" buttonStyle="primaryButton" text="Disabled"></ButtonSDLC>
            </span>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="largeButton" 
                    icon={<IconLock width="15px" fill="white" />} 
                    buttonStyle="primaryButton" 
                    text="Primary"
              />
            </span>
            <ButtonSDLC disabled={true}
                  size="largeButton" 
                  icon={<IconLock width="15px" fill="white" />} 
                  buttonStyle="primaryButton" 
                  text="Disabled"
            />
          </div>
        </div>
        <br></br>
        Large, Primary (First Button):
        <pre><code className="language-jsx">
          {`
            import ButtonSDLC from './ButtonSDLC'
            
            ...
            
            <ButtonSDLC 
              size="largeButton" 
              buttonStyle="primaryButton" 
              text="Primary" 
              OnClick={...}
            />
          `}
        </code></pre>
        <br></br>
        Large, Primary, Disabled, with Icon (Fourth Button):<br />
        *Note: Any icon component can be added - just don't forget to import it.
        <pre><code className="language-jsx">
          {`
          import ButtonSDLC from './ButtonSDLC'
          import IconLock from '../svgs/IconLock' 
          ...
                    
          <ButtonSDLC 
            disabled={true}
            size="largeButton" 
            icon={<IconLock width="15px" fill="white" />} 
            buttonStyle="primaryButton" 
            text="Disabled"
            OnClick={...}
          />
          `} 
        </code></pre>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding">Medium</div>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="mediumButton" 
                    buttonStyle="primaryButton" 
                    text="Primary"
              />
            </span>
            <ButtonSDLC disabled={true} size="mediumButton" buttonStyle="primaryButton" text="Disabled"></ButtonSDLC>
            
          </div>
        </div>
        <br/>
        Medium, Primary (First Button):
        <pre><code className="language-jsx">
          {`
            import ButtonSDLC from './ButtonSDLC'
            
            ...
            
            <ButtonSDLC 
              size="mediumButton" 
              buttonStyle="primaryButton" 
              text="Primary" 
              OnClick={...}
            />
          `}
        </code></pre>
        <br />

        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding">Small</div>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="smallButton" 
                      buttonStyle="primaryButton" 
                      text="Primary" 
              />
            </span>
            <ButtonSDLC disabled={true} size="smallButton" buttonStyle="primaryButton" text="Disabled"></ButtonSDLC>
            
          </div>
        </div>
        <br/>
        Small, Primary (First Button):
        <pre><code className="language-jsx">
          {`
            import ButtonSDLC from './ButtonSDLC'
            
            ...
            
            <ButtonSDLC 
              size="smallButton" 
              buttonStyle="primaryButton" 
              text="Primary" 
              OnClick={...}
            />
          `}
        </code></pre>
        <br></br>

        <h4>Secondary Action</h4>
        <div>
          Use a secondary action for non-primary actions. The secondary action treatment allows for multiple actions within a set and on a page without creating a large cognitive load. This treatment is ideal for actions that occur multiple times within a page (e.g. Product Panes). 
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding">Large</div>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="largeButton" 
                      buttonStyle="secondaryButton" 
                      text="Secondary" 
              />
            </span>
            <ButtonSDLC disabled={true} size="largeButton" buttonStyle="secondaryButton" text="Disabled"></ButtonSDLC>
            
          </div>
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding">Medium</div>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="mediumButton" 
                      buttonStyle="secondaryButton" 
                      text="Secondary" 
              />
            </span>
            <ButtonSDLC disabled={true} size="mediumButton" buttonStyle="secondaryButton" text="Disabled"></ButtonSDLC>
            
          </div>
        </div>
        <br></br>
        <div className="flexColumnButtonsDemo">
          <div className="flexRowButtonsDemo">
            <div className="caption buttonDemoPadding">Small</div>
            <span className="buttonDemoPadding">
              <ButtonSDLC size="smallButton" 
                      buttonStyle="secondaryButton" 
                      text="Secondary" 
              />
            </span>
            <ButtonSDLC disabled={true} size="smallButton" buttonStyle="secondaryButton" text="Disabled"></ButtonSDLC>
            
          </div>
        </div>
        <br></br>
        Large, Secondary (First Button):
        <pre><code className="language-jsx">
          {`
            import ButtonSDLC from './ButtonSDLC'
            
            ...
            
            <ButtonSDLC 
              size="largeButton" 
              buttonStyle="secondaryButton" 
              text="Secondary" 
              OnClick={...}
            />
          `}
        </code></pre>
        {/* <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-lg btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-sm btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-sm btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-sm btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-lg btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br/>

        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-xs btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle className="btn btn-xs btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-xs btn-primary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle disabled className="btn btn-xs btn-secondary" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row> */}
      </div>
    );
  }
}
export default ButtonsDemo