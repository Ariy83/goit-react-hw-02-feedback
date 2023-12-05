import React from "react"
import { ButtonsStyled } from "./Buttons/ButtonsStyled"
import { Statistics } from "./Statistics/Statistics"

const Section = ({title,children}) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
const Notification = ({message}) => {
  return (
    <section>
      <p>{message}</p>
    </section>
  )
}

export class App extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  getStateKeys = () => {
    return Object.keys(this.state)
  }
  getStateValues = () => {
    return Object.values(this.state)
  }

  handleClickBtn = (item) => {
    this.setState((prevState) => ({ [item]: prevState[item] + 1 }));
    // this.countTotalFeedback()
  }

  countTotalFeedback = () => {
    return this.getStateValues().reduce((total,item)=>(total+=item))
  }

  countPositiveFeedbackPercentage = () => {
    if (this.state.good===0){return}
    return this.state.good*100/this.countTotalFeedback()
  }

  render() {
   return <div
      style={{
        height: '100vh',
       display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
   >
    <Section title="Please leave feedback">
      <ButtonsStyled keysArr={this.getStateKeys()} handleClickBtn={this.handleClickBtn} />
     </Section>
     
     <Section title="Statistics">
       {!this.state.good && !this.state.neutral && !this.state.bad ?
         (<Notification message="There is no feedback" />) :
         (<><Statistics keysArr={this.getStateKeys()} valuesArr={this.getStateValues()} />
         <p>Total: { this.countTotalFeedback()}</p>
         <p>Positive feedback: { Math.round(this.countPositiveFeedbackPercentage())}%</p></>)}
     </Section>
     
    </div>
  };
};
