import { useState } from 'react';
import Section from './Feedback/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';


const App = ()=>{

const [goodVote, setGoodVote] = useState(0);
const [badVote, setBadVote] = useState(0);
const [neutralVote, setNeutralVote] = useState(0)

const countTotalFeedback = () => {
      const total = goodVote + neutralVote + badVote;
      return total;
    }

  const countPositiveFeedback = () => {

          const percent = Math.floor((100 / countTotalFeedback()) * goodVote);
          return percent;
        }

          const onLeaveFeedback = option => {
            switch (option) {
              case 'good':
                setGoodVote(prevState => prevState + 1);
                break;

              case 'neutral':
                setNeutralVote(prevState => prevState + 1);
                break;

              case 'bad':
                setBadVote(prevState => prevState + 1);
                break;

              default:
                return;
            }
          };

return(
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() > 0 ? <Statistics
              good={goodVote}
              neutral={neutralVote}
              bad={badVote}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedback()}
            /> : <Notification message="There is no feedback"/> }
      </Section>
    );

        }

export default App;
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   onLeaveFeedback = (option) => {
//       this.setState((prevState) => {
//         console.log(prevState)
//         return {
//           [option]: prevState[option] + 1,
//         }
//         })
//   };

//   countPositiveFeedback= () => {
//     const { good } = this.state;
//     const percent = Math.floor((100 / this.countTotalFeedback()) * good);
//     console.log(percent);
//     return percent;
//   }
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//         {this.countTotalFeedback() > 0 ? <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedback()}
//             /> : <Notification message="There is no feedback"/> }
//       </Section>
//     );
//   }
// }
