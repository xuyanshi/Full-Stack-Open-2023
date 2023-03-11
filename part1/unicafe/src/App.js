import {useState} from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Feedback = (props) => {
    return (
        <p>{props.title} {props.data}</p>
    )
}

// a proper place to define a component
const Statistics = (props) => {

    const countAll = (g, n, b) => {
        return g + n + b
    }

    const calAverage = (g, n, b) => {
        return (g - b) / (g + n + b)
    }

    const calPositive = (g, n, b) => {
        return (100 * g / (g + n + b)) + ' %'
    }

    return (
        <>
            <Feedback title={'good'} data={props.good}/>
            <Feedback title={'neutral'} data={props.neutral}/>
            <Feedback title={'bad'} data={props.bad}/>
            <Feedback title={'all'} data={countAll(props.good, props.neutral, props.bad)}/>
            <Feedback title={'average'} data={calAverage(props.good, props.neutral, props.bad)}/>
            <Feedback title={'positive'} data={calPositive(props.good, props.neutral, props.bad)}/>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [voted, setVoted] = useState(false)

    const voteForGood = () => {
        setGood(good + 1)
        setVoted(true)
    }

    const voteForNeutral = () => {
        setNeutral(neutral + 1)
        setVoted(true)
    }

    const voteForBad = () => {
        setBad(bad + 1)
        setVoted(true)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={voteForGood} text="good"/>
            <Button handleClick={voteForNeutral} text="neutral"/>
            <Button handleClick={voteForBad} text="bad"/>
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App