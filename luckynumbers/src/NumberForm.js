import React from 'react';

class NumberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: '',
            min: '',
            max: ''
        };

        this.handleCountChange = this.handleCountChange.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCountChange(event) {
        this.setState({ count: event.target.value });
    }

    handleMinChange(event) {
        this.setState({ min: event.target.value });
    }

    handleMaxChange(event) {
        this.setState({ max: event.target.value });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.count + ',' + this.state.min + ',' + this.state.max);
        event.preventDefault();
        this.props.handleFormSubmission(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        How many numbers do you want?
          <input type="text" value={this.state.count} onChange={this.handleCountChange} />
                    </label>
                    <label>
                        What is your minimum number?
          <input type="text" value={this.state.min} onChange={this.handleMinChange} />
                    </label>
                    <label>
                        What is your maximum number?
          <input type="text" value={this.state.max} onChange={this.handleMaxChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default NumberForm;