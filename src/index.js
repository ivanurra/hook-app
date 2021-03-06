import React from 'react';
import ReactDOM from 'react-dom';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

