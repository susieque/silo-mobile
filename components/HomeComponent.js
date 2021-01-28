import React, { Component } from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Alert, Text } from "react-native";
import { Avatar, ListItem, Button, Card, Image, Divider, Icon } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import LinearGradient from "react-native-linear-gradient";

import Header from "./ui-blocks/HeaderComponent";
import * as ColorSchemes from "../components/style-resources/ColorSchemes";
//This is Nhan first commit
//This is Susie first commit
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		packages: state.packages,
	};
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// packages: PACKAGES,
			// jobs: JOBS,
			selectedPackage: null,
		};
	}

	static navigationOptions = {
		title: "Home",
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<SafeAreaView style={styles.directoryContainer}>
				<Header />
				<View>
					<Card containerStyle={styles.cardContainer}>
						<Card.Title>
							<View style={styles.titleContainer}>
								<Icon
									name={"bars"}
									type="font-awesome"
									size={15}
									color={ColorSchemes.primaryLight}
									raised
									reverse
								/>
								<Text style={styles.cardTitle}>Package List</Text>
							</View>
						</Card.Title>
						<Text style={styles.cardBody}>
							Manage warehouse order from the package list or receive items that can't be scanned.
						</Text>
						<Button
							title="View List"
							// onPress={() => navigate('PackageList', { packages: this.props.packages.packages})}
							onPress={() => navigate("PackageList", null)}
							type="clear"
							titleStyle={styles.buttonTitle}
							containerStyle={styles.buttonContainer}
						/>
					</Card>

					<Card containerStyle={styles.cardContainer}>
						<Card.Title>
							<View style={styles.titleContainer}>
								<Icon
									name={"qrcode"}
									type="font-awesome"
									size={15}
									color={ColorSchemes.primaryLight}
									raised
									reverse
								/>
								<Text style={styles.cardTitle}>Scanner</Text>
							</View>
						</Card.Title>
						<Text style={styles.cardBody}>
							Use the scanner to receive deliveries made to the jobsite.{" "}
						</Text>
						<Button
							title="Scan"
							onPress={() => navigate("Scanner", { packages: this.props.packages.packages })}
							type="clear"
							titleStyle={styles.buttonTitle}
							containerStyle={styles.buttonContainer}
						/>
					</Card>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	flatlistOverview: {
		margin: 5,
	},
	buttonTitle: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	buttonContainer: {
		marginTop: 15,
		color: "white",
		backgroundColor: ColorSchemes.primaryDark,
		borderColor: "white",
		borderRadius: 10,
		textAlignVertical: "center",
	},
	dividerStyle: {
		backgroundColor: ColorSchemes.designGrey,
		//marginBottom: 10
	},

	headerText: {
		textAlign: "center",
		fontSize: 36,
		fontWeight: "bold",
		color: "gray",
		marginBottom: 10,
		backgroundColor: "white",
	},

	directoryContainer: {
		justifyContent: "flex-start",
		flex: 1,
		margin: 0,
		backgroundColor: ColorSchemes.primaryLight,
	},
	cardContainer: {
		backgroundColor: "white",
		alignContent: "center",
		borderRadius: 0,
		margin: 0,
	},
	cardImage: {
		height: 75,
		width: 75,
		resizeMode: "contain",
	},
	cardTitle: {
		fontSize: 30,
		fontWeight: "bold",
		color: "black",
		textAlign: "left",
		marginLeft: 15,
	},
	cardRow: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		flexDirection: "row",
		backgroundColor: "white",
	},
	cardBody: {
		textAlign: "left",
		fontSize: 16,
		paddingLeft: 0,
		paddingRight: 30,
		marginLeft: 10,
		marginBottom: 10,
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default connect(mapStateToProps)(Home);

