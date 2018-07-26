import React, { Component } from 'react';
import { render } from 'react-dom'
import EmailEditor from 'react-email-editor'
import styled, { injectGlobal } from 'styled-components'
import logo from './logo.svg';
import './App.css';
import sample from '../src/sample.json'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  #root {
    height: 100%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

const Bar = styled.div`
  flex: 1;
  background-color: #4169E1;
  color: #FFF;
  padding: 10px;
  display: flex;
  max-height: 40px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }
  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #FFF;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`

class App extends Component {
  render() {
    return <Container>
      <Bar>
        <h1>react-email-editor Demo</h1>

        <button onClick={this.saveDesign}>Save Design</button>
        <button onClick={this.exportHtml}>Export HTML</button>
      </Bar>

      <EmailEditor
        ref={editor => this.editor = editor}
        onLoad={this.onLoad}
        onDesignLoad={this.onDesignLoad}
      />
    </Container>
  }

  onLoad = () => {
    // this.editor.addEventListener('onDesignLoad', this.onDesignLoad)
    this.editor.loadDesign(sample)
  }

  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log('saveDesign', JSON.stringify(design))
      alert("Design JSON has been logged in your developer console.")
    })
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const {
        design,
        html
      } = data
      console.log('exportHtml', html)
    })
  }

  onDesignLoad = (data) => {
    console.log('onDesignLoad', data)
  }
}

export default App;