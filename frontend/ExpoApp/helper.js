// Definition of some helper functions (SHOULD CHANGE TO CONSTANTS.JS!!!!!!!!!!!!)

export const ImageButton = ({ onPress, source }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                <Image source={source} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};