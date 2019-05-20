import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import '../App.scss'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './Panel.scss';

// see https://react-bootstrap.github.io/utilities/transitions/#collapse-props
class Panel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      openTab: [true,...Array(this.props.content.length-1).fill(false)],
      clearChoices: Array(this.props.content.length).fill(false)
    }
    this.props.content.forEach(()=>{
      this.setState({openTab: [...this.state.openTab,false]})

    })
  }
  handleTabChange =(index)=>{
    const openTab = [...this.state.clearChoices]
    openTab[index] = !openTab[index]
    this.setState({
      openTab
    })
  }

  render() {
    return (
      <div>
        <Row>
          {this.props.content.map((item,index)=>
            <Col className="tabs" onClick={()=>this.handleTabChange(index)}>
              <span>
                {item.title}
              </span>
              <hr style={{
                backgroundColor: "#44687D",  
                height: "3px",
                opacity: this.state.openTab[index] ? 1:0,
                transition: ".3s ease-in-out",

                }}>
              </hr>
            </Col>
          )}
        </Row>
        <hr className="lightDivider lineUnderLabels"></hr>
        {this.props.content.map((item,index)=>
          <div>{this.state.openTab[index] ? item.content+' ' : ''}</div>
        )}        
      </div>
    );
  }
}
export default Panel
