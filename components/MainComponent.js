import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import { SafeAreaView } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS
        };
    }

    render() {
        return <Directory packages={this.state.packages} />;
    }
}

export default Main;
