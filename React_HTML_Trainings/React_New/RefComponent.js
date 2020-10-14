class RefComponent extends React.Component {
  constructor(props) {
    super(props); 

    this.inputRef = React.createRef();
  }

  render() {
    return 
	<div><input type="text" ref={this.inputRef} /><div>;
  }

  componentDidMount() {
    this.inputRef.current.value = "Reference Component for React Ref";
  }
}