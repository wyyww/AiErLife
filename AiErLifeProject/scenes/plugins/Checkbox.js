


var Icon=require('react-native-vector-icons/FontAwesome'); 
export default class CheckBox extends React.Component{
   static defaultProps = {
      checked: false
   }; 
  static propTypes={
     checked: React.PropTypes.bool,
     onChange: React.PropTypes.func
  };
  constructor(props){
     super(props);
     this.state = {
        checked: props.checked,
     };
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
        checked: nextProps.checked
      });
  }
  onChange() {
     this.setState({checked:!this.state.checked});
  }
  toggle(){
     console.log("checkbox被点击了");
     this.setState({checked:!this.state.checked});
     this.props.onChange(this.state.checked);    
  }
  render() {
    var source = "square-o";
    if(this.state.checked){
      source = "check-square-o";
    }
    var container = (
      <View style={styles.container}>
        <Icon name={source} size={16} style={styles.checkbox} color="#00B4F7" ></Icon>
      </View>
    );
    return (
      <TouchableHighlight ref="checkbox" onPress={this.toggle.bind(this)} underlayColor='white'>
        {container}
      </TouchableHighlight>
    )
  }
}