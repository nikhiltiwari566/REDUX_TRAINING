import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
	const dispatch = useDispatch();
	const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
	const balance = useSelector(state => state.amount);
	return (
		<ImageBackground style={styles.container}
			source={require("./images/one.jpeg")}>


			<View  >
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 26,
						textDecorationLine: 'underline',
						color: "darkblue"
					}}>Deposit/Withdraw Money</Text>
				<View style={styles.buttonContainer}>
					{/* <TouchableOpacity
					style={styles.subContainer}
					onPress={() => { dispatch(actionCreators.withdrawMoney(100)) }}
				>
					<Text style={styles.textStyle}>-</Text>
				</TouchableOpacity>
				<Text style={styles.subText}>Update Balance</Text>
				<TouchableOpacity
					style={styles.subContainer}
					onPress={() => { dispatch(actionCreators.depositMoney(100)) }}
				>
					<Text style={styles.textStyle}>+</Text>
				</TouchableOpacity> */}
					<TouchableOpacity
						style={styles.subContainer}
						onPress={() => { withdrawMoney(100) }}
					>
						<Text style={styles.textStyle}>- </Text>
					</TouchableOpacity>
					<View>

						<Text style={styles.subText}>Update Balance </Text>
						<Text style={[styles.subText, { fontSize: 25, fontWeight: 'bold', color: 'darkblue' }]}>${balance} </Text>

					</View>

					<TouchableOpacity
						style={styles.subContainer}
						onPress={() => { depositMoney(100) }}
					>
						<Text style={styles.textStyle}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	subContainer: {
		backgroundColor: 'skyblue',
		paddingVertical: 20,
		paddingHorizontal: 25,
		activeOpacity: 1,
		borderRadius: 10,
		borderWidth: 4,
		borderColor: "darkblue"
	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: "darkblue"
	},
	buttonContainer: {
		flexDirection: 'row',
		width: "80%",
		justifyContent: 'space-evenly',
		paddingTop: 40,
		alignItems: 'center'
	},
	subText: {
		fontSize: 20,
		fontWeight: '400',
		color: 'black',
		textAlign: 'center',
		textDecorationLine: 'underline'

	}
});

export default Shop;
