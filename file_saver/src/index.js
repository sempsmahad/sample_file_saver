import ReactDom from 'react-dom';

const Greeting = () => {
  return <h4>this is john</h4>;
};

ReactDom.render(<Greeting />, document.getElementById('root'));
