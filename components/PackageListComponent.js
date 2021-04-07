import React, { Component } from "react";
import { FlatList, StyleSheet, SafeAreaView, Alert, View, Text } from "react-native";
import { Avatar, ListItem, Badge, CheckBox } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import LinearGradient from "react-native-linear-gradient";
import Header from "./ui-blocks/HeaderComponent";
import { JOBS } from "../shared/jobs";

//COMPONENTS
import Loading from "./ui-blocks/LoadingComponent";

//REDUX-RELATED
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
	// console.log("state:")
	// console.log(state.packages);
	return {
		packages: state.packages,
	};
};

class PackageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDispatchChecked: false,
			displayData: {},
			//packages: PACKAGES,
			// jobs: JOBS,
			// selectedPackage: null
		};
	}

	static navigationOptions = {
		title: "Packages",
	};

	render() {
		//console.log(JSON.stringify(this.props.packages.packages));
		const { navigate } = this.props.navigation;

		const renderPackageListItem = ({ item }) => {
			if (item.location === "Dispatched") {
				return (
					<ListItem
						onPress={() => navigate("PackageInfo", { packageId: item.id })}
						//onPress={() => console.log(item.id)}
						Component={TouchableScale}
						friction={90} //
						tension={100} // These props are passed to the parent component (here TouchableScale)
						activeScale={0.95}
						containerStyle={styles.listItemContainer} //
						linearGradientProps={{
							//   colors: ['#FFA262', '#DA620B'],
							//   colors: ['#239f03', '#1a7d00'],
							//   colors: ['#239f03', '#1a7d00'],
							// colors: ['#587db9', '#3662a6'],
							// colors: ['#f39f0c', '#fbb741'],
							colors: ["#9BEE85", "#60D840"], //GREEN
							start: { x: 1, y: 0 },
							end: { x: 0.2, y: 0 },
						}}
					>
						<Avatar size="large" rounded source={require("./images/green-avatar-white-bg.png")} />
						<ListItem.Content>
							<ListItem.Title style={styles.listItemTitle}>{item.number}</ListItem.Title>
							<ListItem.Subtitle style={styles.listItemSubtitle}>
								{item.job} {"\n"}
								{item.description}
							</ListItem.Subtitle>
						</ListItem.Content>
					</ListItem>
				);
			} 
      
      else if(item.location === "Delivered"){
        return (
					<ListItem
						onPress={() => navigate("PackageInfo", { packageId: item.id })}
						//onPress={() => console.log(item.id)}
						Component={TouchableScale}
						friction={90} //
						tension={100} // These props are passed to the parent component (here TouchableScale)
						activeScale={0.95}
						containerStyle={styles.listItemContainer} //
						linearGradientProps={{
							//   colors: ['#FFA262', '#DA620B'],
							//   colors: ['#239f03', '#1a7d00'],
							//   colors: ['#239f03', '#1a7d00'],
							// colors: ['#587db9', '#3662a6'],
							// colors: ['#f39f0c', '#fbb741'],
							colors: ["#E1011C", "#900818"], //RED
							start: { x: 1, y: 0 },
							end: { x: 0.2, y: 0 },
						}}
					>
						<Avatar size="large" rounded source={require("./images/red-avatar-white-bg.png")} />
						<ListItem.Content>
							<ListItem.Title style={styles.listItemTitle}>{item.number}</ListItem.Title>
							<ListItem.Subtitle style={styles.listItemSubtitle}>
								{item.job} {"\n"}
								{item.description}
							</ListItem.Subtitle>
						</ListItem.Content>
					</ListItem>
				);
      }

      else {
				return (
					<ListItem
						onPress={() => navigate("PackageInfo", { packageId: item.id })}
						//onPress={() => console.log(item.id)}
						Component={TouchableScale}
						friction={90} //
						tension={100} // These props are passed to the parent component (here TouchableScale)
						activeScale={0.95}
						containerStyle={styles.listItemContainer} //
						linearGradientProps={{
							//   colors: ['#FFA262', '#DA620B'],
							//   colors: ['#239f03', '#1a7d00'],
							//   colors: ['#239f03', '#1a7d00'],
							// colors: ['#587db9', '#3662a6'],
							// colors: ['#f39f0c', '#fbb741'],
							colors: ["#ffa262", "#eca06c"],
							start: { x: 1, y: 0 },
							end: { x: 0.2, y: 0 },
						}}
					>
						<Avatar size="large" rounded source={require("./images/orange-avatar-white-bg.png")} />
						<ListItem.Content>
							<ListItem.Title style={styles.listItemTitle}>{item.number}</ListItem.Title>
							<ListItem.Subtitle style={styles.listItemSubtitle}>
								{item.job} {"\n"}
								{item.description}
							</ListItem.Subtitle>
						</ListItem.Content>
					</ListItem>
				);
			}
		};

		if (this.props.packages.isLoading) {
			return <Loading />;
			console.log("Still fucking loading");
		}
		if (this.props.packages.errMess) {
			return (
				<View>
					<Text>{this.props.packages.errMess}</Text>
				</View>
			);
		}

		const packagesData = this.props.packages.packages;
		if (this.state.isDispatchChecked) {
			this.state.displayData = packagesData.filter((item) => item.location === "Dispatched");
		} else {
			this.state.displayData = packagesData;
		}

		return (
			<SafeAreaView>
				<CheckBox
					title="Show dispatched packages"
					checked={this.state.isDispatchChecked}
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					onPress={() => this.setState({ isDispatchChecked: !this.state.isDispatchChecked })}
				/>
				<FlatList
					data={this.state.displayData}
					// data={this.props.packages.packages}

					renderItem={renderPackageListItem}
					style={styles.flatlistOverview}
					keyExtractor={(item) => item.id.toString()}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	flatlistOverview: {
		margin: 5,
	},

	// listItemRegularAvatar: {
	//   size:"large",
	//   // rounded,
	//   source:require("./images/orange-avatar-white-bg.png"),
	// },

	listItemTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 28,
	},

	listItemContainer: {
		margin: 5,
		borderRadius: 15,
	},
	listItemSubtitle: {
		color: "white",
		fontSize: 14,
	},
});

export default connect(mapStateToProps)(PackageList);
