import React from 'react';
import Split from './composition/Split';
import './App.css'
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
// import TheDate from './state/TheDate';
import Counter from './Counter';

const firstTooltip = (
  <Tooltip  color='hotpink' message='tooltip message'>
    ahahahahaha
  </Tooltip>
)
const secondTooltip = (
  <Tooltip  color='red' message='another tooltip message'>
    blablalalba
  </Tooltip>

)

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={4}>
      This is the content for the left `Split`. Lorem {firstTooltip} ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia? <br />
      <Tooltip message='yet another tooltip message'>
        hihsihihihhi
      </Tooltip>
      </Split>
      <Split className='right' flexBasis={1}>
      This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat {secondTooltip} quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
      {/* <TheDate /> */}
      <Counter count={123}></Counter>
    </main>
  );
}

export default App;