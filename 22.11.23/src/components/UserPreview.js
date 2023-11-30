import React from 'react';

class UserPreview extends React.Component {

    render() {
        console.log('user preview is rendering ');
        return(
            <div>
             <h1>{this.props.greet} {this.props.name}</h1>
             <p> Score:  {this.props.score}</p>
             <button onClick={()=>this.props.onScoreChange(this.props.score)}>+</button>
             <button>-</button>
            </div>
        
        )
    }
}

export default UserPreview;