import React from 'react';
import './App.css';
// import Split from './composition/Split';
// import Tooltip from './composition/Tooltip';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tabs from './Tabs';
import Accordion from './state-drills/Accordion';

function App(){
  return (
    <main className='App'>

    </main>
  );
}

export default App;

// make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

// function App() {
//   return (
//     <Accordion sections={sections} />
//     // <main className='App'>
//     //   <TheDate />
//     //   <Counter />
//     //   <div>
//     //     <Tabs tabs={tabsProp} />
//     //   </div>
//     //   <hr />
//     //   <Split className='left' flexBasis='2'>
//     //     This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//     //     {/* make another tooltip directly inside the App */}
//     //     <Tooltip message='one more tooltip message'>
//     //       Necessitatibus?
//     //     </Tooltip>
//     //   </Split>
//     //   <Split className='right'>
//     //     This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//     //   </Split>
//     // </main>
//   )
// }

// export default App;