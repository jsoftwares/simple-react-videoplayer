import React from 'react';

class SearchBar extends React.Component {

    state = { search: ''};

    onInputChange = event => {
        this.setState({ search: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.search); //we invoke this method which is in the parent component.
    }
    render(){
        return(
            <div className="ui segment">              
                <form className="ui form" onSubmit={ this.onFormSubmit}>
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" onChange={ this.onInputChange } value={this.state.search} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;