import React, { Component } from 'react';

class Counter extends Component { 
    componentDidUpdate(prevProps, prevState)
    {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value)
        {
            //Ajax call and get the data from the server
        }
    }
    // state = { 
    //    // count : 0,
    //     // tags : ['tag1', 'tag2', 'tag3']
    //     count : this.props.counter.value
    // };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    // renderTags()
    // {
    //     if(this.state.tags.length === 0)
    //         return <p>There are no tags!</p>
    //     else
    //         return <u1>
    //             {this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}
    //         </u1>;
    // }
    // handleIncrement = () => {
    //     // console.log('Increment Clicked' ,this);
    //     //console.log(product);
    //     this.setState({count : this.state.count + 1})
    // }
    // doHandleIncrement = () =>{
    //     this.handleIncrement({id:1});
    // }
    render() {   
        //console.log('props', this.props);
        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() =>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            {/* { this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;