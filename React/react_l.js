function Check(props){
    const removetag =  () => {
        props.func(props.id)
    }
    return <input type = "checkbox" onChange = {removetag}/>
}

function Task(props){
    // console.log(props.name)
    return (<li>{props.name} &nbsp; {props.duedate.toLocaleString()} &nbsp;
            <Check  id = {props.id} func = {props.removetask} />
        </li>)
}




class Inputtype extends React.Component{
    constructor(props) {
        super(props)
        this.handleChangevalue = this.handleChangevalue.bind(this);
    }
    handleChangevalue(e) {
        this.props.onChangevalue(e.target.value);
    }

    render (){
        const today = new Date()
        const cd = function string(today) {
            let str = today.getFullYear()
            console.log
            if ((today.getMonth()+1) < 10){
                str += '-0'+(today.getMonth()+1)
            }else {
                str += '-'+(today.getMonth()+1)
            }
            if(today.getDate() <10){
                str += '-0'+today.getDate();
            }else{
                str += '-'+today.getDate();
            }
            return str
        }
        if (this.props.type === 'text'){
            return <input type = {this.props.type}  value = {this.props.value} onChange = {this.handleChangevalue} />
        }else{
            return <input type = {this.props.type}  value = {this.props.value} onChange = {this.handleChangevalue} min = {cd (today)}/>
        }
    }
}

class Input extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value :' ',
            duedate : ''
        }
        this.handleChangetext = this.handleChangetext.bind(this)
        this.handleSubmbit = this.handleSubmbit.bind(this)
        this.handleChangedate = this.handleChangedate.bind(this)
    }   
    handleChangetext (val) {
        this.setState({
            value : val
        })   
    }
    handleChangedate (val) {
        // console.log(event.target.value)
        this.setState({
            duedate : val
        }) 

    }

    handleSubmbit(event){
        event.preventDefault();
        const t = {name : this.state.value,
            date : Date.now(),
            duedate : this.state.duedate
        }
        console.log(t)
        this.props.gettask(t)
        this.setState({
            value:'',
            duedate : ''
        })
        
    }
   render() {
       return (
           <div>
               <form onSubmit = {this.handleSubmbit}>
                   <Inputtype type = 'text'  value = {this.state.value} onChangevalue = {this.handleChangetext}/>
                   &nbsp;
                   <Inputtype type = 'date' value = {this.state.duedate}  onChangevalue = {this.handleChangedate} />
                   <input type = 'Submit'/>
               </form>
           </div>
       )
   }
}
class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            task_l:  [],
        } 
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }
    removeTask (date){
        const obj = this.state.task_l.filter((obj) => {
            console.log(obj,date)
            return obj.date != date
        })
        this.setState({
            task_l : obj
        })
    }
    addTask (task){
        this.state.task_l.push(task)
        this.setState({
            task_l : this.state.task_l
        })
        
    }
    render (){
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <ol>
                        {this.state.task_l.map((each) =>
                            <Task  key = {each.date} id = {each.date} name = {each.name} duedate = { each.duedate}  removetask ={this.removeTask} />
                    
                        )}
                        
                    </ol>
                </div>
                
                <Input gettask = {this.addTask}/>
            </div>
        )
    }
};

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
)
