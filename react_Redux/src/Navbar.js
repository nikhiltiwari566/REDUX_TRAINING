

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const amount = useSelector(state => state.amount)
	return (
		<ImageBackground style={styles.container}
			source={require("./images/two.jpeg")}>
			<View >
				<TouchableOpacity
					activeOpacity={1}
					style={styles.subContainer}
				>
					<Text style={styles.textStyle}>Your Balance: ${amount}</Text>
				</TouchableOpacity>
			</View >
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.4,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	subContainer: {
		backgroundColor: 'skyblue',
		padding: 20,
		activeOpacity: 1,
		borderRadius: 10,
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'darkblue',
		textDecorationLine: 'underline'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: "80%",
		justifyContent: 'space-evenly',
		paddingTop: 40
	}

});

export default Navbar;
