import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	useColorScheme,
	Modal,
	TextInput,
	Button,
	Alert,
} from "react-native";
import { Card, Avatar, Icon, Input } from "react-native-elements";
import { receivePackage, requestDispatch, addComment } from "../redux/ActionCreators";

import * as DesignColors from "../components/style-resources/ColorSchemes";

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		packages: state.packages,
	};
};

//This is an arrow function which takes a single parameter.  The parameter it takes is the dispatch method.
//All the keys returned by this function will dispatch an action.
const mapDispatchToProps = (dispatch) => {
	return {
		receivePackage: (item) => {
			dispatch(receivePackage(item));
		},
		requestDispatch: (item) => {
			dispatch(requestDispatch(item));
		},
		addComment: (item) => {
			dispatch(addComment(item));
		},
	};
};

class PackageInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			userComment: "",
		};
	}

	//method to change showModal state in order for Modal element to display
	toggleModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	static navigationOptions = {
		title: "Details",
	};

	//USE-CASE HANDLERS
	requestDispatch(item) {
		//Debug line
		Alert.alert(`package: ${item.number} will be dispatched`);
		//Perform validation

		//Invoke the Action
		this.props.requestDispatch(item);
	}

	markAsReceived(item) {
		Alert.alert(`package: ${item.number} will be received`);
		//Perform validation

		//Invoke the Action
		this.props.receivePackage(item);
	}

	addComment(item) {
		Alert.alert(`comment will be added to package: ${item.number}`);
		//Perform validation
		let newPackageObject = item;
		// let newPackageObject = { ...item };
		// item.notes = item.notes + `\n${this.state.userComment}`;
		let date = new Date().getDate();
		let month = new Date().getMonth() + 1;
		let year = new Date().getFullYear();
		let timeHour = new Date().getHours();
		let timeMinute = new Date().getMinutes();
		let standardTime = "";
		if (timeHour > 12) {
			standardTime = "PM";
			timeHour = timeHour - 12;
		} else {
			standardTime = "AM";
		}
		newPackageObject.notes =
			newPackageObject.notes +
			`\n( ${month}/${date}/${year} ${timeHour}:${timeMinute} ${standardTime} )` +
			`\n${this.state.userComment}\n\n`;
		console.log("*******************************************************************************");
		console.log(newPackageObject);
		console.log("*******************************************************************************");
		//Invoke the Action
		this.props.addComment(newPackageObject);
	}

	render() {
		// console.log(this.props.navigation.getParam('packageId'));
		const packageId = this.props.navigation.getParam("packageId");
		//alert('Retrieving item: ' + packageId);
		const item = this.props.packages.packages.filter((p) => p.id === packageId)[0];

		const RenderPackageDetails = (props) => {
			const { item } = props;

			if (item) {
				return (
					<SafeAreaView>
						<View
							style={{
								backgroundColor: DesignColors.designGrey,
								borderRadius: 10,
								marginTop: 10,
								marginLeft: 10,
								marginRight: 10,
								marginBottom: 5,
								padding: 10,
							}}
						>
							<Text style={styles.listItemTitle}>{item.number}</Text>
							<Text style={styles.listItemSubtitle}>{item.job}</Text>
							<Text style={styles.listItemSubtitle}>{item.description}</Text>
						</View>

						<View style={styles.cardRow}>
							<Icon
								name={props.dispatched ? "paper-plane-o" : "paper-plane-o"}
								onPress={() => this.requestDispatch(item)}
								type="font-awesome"
								color={DesignColors.requestIcon}
								raised
                size={35}
								reverse
							/>
							<Icon
								name={"pencil"}
								type="font-awesome"
								color={DesignColors.commentIcon}
								onPress={() => this.toggleModal()}
								// onPress={() => this.addComment(item)}
								raised
                size={35}
								reverse
							/>
							<Icon
								name={"check"}
								type="font-awesome"
								color={DesignColors.receiveIcon}
								onPress={() => this.markAsReceived(item)}
								raised
                size={35}
								reverse
							/>
						</View>
						<View>
							<Text style={styles.cardHeader}>LOCATION</Text>
							<Text style={styles.cardBody}>
								{item.location}
								{"\n"}
							</Text>
							<Text style={styles.cardHeader}>STATUS</Text>
							<Text style={styles.cardBody}>
								{item.remaining} out of {item.ordered} units remaining{"\n"}
							</Text>
							<Text style={styles.cardHeader}>NOTES</Text>
							<Text style={styles.cardBody}>{item.notes}</Text>
						</View>
					</SafeAreaView>
				);
			}
			return <View />;
		};

		return (
			<ScrollView>
				<RenderPackageDetails item={item} />

				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.showModal}
					onRequestClose={() => this.toggleModal()}
				>
					<View style={styles.modal}>
						<View
							style={{
								backgroundColor: DesignColors.designGrey,
								borderRadius: 10,
								marginTop: 10,
								marginLeft: 10,
								marginRight: 10,
								marginBottom: 5,
								padding: 10,
							}}
						>
							<Text style={styles.listItemTitle}>{item.number}</Text>
							<Text style={styles.listItemSubtitle}>{item.job}</Text>
							<Text style={styles.listItemSubtitle}>{item.description}</Text>
						</View>
						<Text style={{ fontSize: 17, marginLeft: 10, borderRadius: 10, padding: 10 }}>
							COMMENT{" "}
						</Text>
						<View
							style={{
								borderTopColor: "#000000",
								borderTopWidth: 1,
							}}
						>
							<TextInput
								style={styles.commentInput}
								textAlignVertical={"top"}
								multiline
								numberOfLines={5}
								placeholder="Enter Comment..."
								leftIcon={{ type: "font-awesome", name: "comment-o" }}
								leftIconContainerStyle={{ paddingRight: 10 }}
								// onChangeText make sure user input assigned userComment
								onChangeText={(userComment) => this.setState({ userComment: userComment })}
								value={this.state.userComment}
							/>
						</View>
						{/* <Input
              style={styles.commentInput}
							placeholder="Comment"
							leftIcon={{ type: "font-awesome", name: "comment-o" }}
              leftIconContainerStyle={{ paddingRight: 10 }}
							// onChangeText make sure user input assigned userComment
							onChangeText={(userComment) => this.setState({ userComment: userComment })}
							value={this.state.userComment}
						/> */}
						<View style={{ margin: 10 }}>
							<Button
								onPress={() => {
									// this.handleComment(campsiteId);
									this.addComment(item);
									this.toggleModal();
								}}
								color="#5637DD"
								title="Submit"
							/>
						</View>
						<View style={{ margin: 10 }}>
							<Button
								onPress={() => {
									this.toggleModal();
									// this.resetForm();
								}}
								color="#808080"
								title="Cancel"
							/>
						</View>
					</View>
				</Modal>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	cardImage: {
		resizeMode: "cover",
	},

	cardTitle: {
		fontSize: 28,
		textAlign: "left",
		padding: 10,
		// backgroundColor: '#ffc59d'
	},
	cardSubtitle: {
		fontSize: 18,
		paddingLeft: 10,
		paddingRight: 10,
	},
	cardHeader: {
		fontSize: 18,
		fontWeight: "bold",
		paddingLeft: 10,
		paddingRight: 10,
	},
	cardBody: {
		fontSize: 16,
		fontStyle: "italic",
		paddingLeft: 10,
		paddingRight: 10,
	},
	cardContainer: {
		marginTop: 0,
		marginBottom: 0,
		borderRadius: 6,
		flex: 1,
	},
	viewContainer: {
		//backgroundColor: '#ffc59d',
		flex: 2,
	},
	cardRow: {
		alignItems: "flex-start",
		// alignItems: "center",
		// justifyContent: "flex-start",
		justifyContent: "center",
		flex: 1,
		flexDirection: "row",
		marginTop: 0,
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	listItemTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 28,
	},

	listContainer: {
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 0,
		padding: 5,
		borderRadius: 15,
	},
	listItemSubtitle: {
		color: "white",
		fontSize: 20,
	},
	modal: {
		justifyContent: "center",
		margin: 20,
	},
	commentInput: {
		borderRadius: 10,
		borderColor: "black",
		// marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 5,
		padding: 10,
		fontSize: 20,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PackageInfo);
