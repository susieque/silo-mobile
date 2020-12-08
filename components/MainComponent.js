import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import { SafeAreaView } from 'react-native';
import PackageInfo from './PackageInfoComponent';
import { View } from 'react-native';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS,
            selectedPackage: null
        };
    }

    //Handle package select for Directory ListItem
    onPackageSelect(packageId){
        this.setState({selectedPackage: packageId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <PackageInfo 
                    item={this.state.packages.filter(
                        p => p.id === this.state.selectedPackage)[0]}
                />           
                <Directory 
                    packages={this.state.packages}
                    onPress={packageId => this.onPackageSelect(packageId)}
                />
            </View>
        );
    }
}

export default Main;
