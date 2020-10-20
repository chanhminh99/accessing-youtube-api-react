import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit= (e) => {
        e.preventDefault();

        //TODO: Make sure we call
        // callback from parent componet
        this.props.onFormSubmit(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Searching video</label>
                        <input onChange={this.onInputChange} type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;