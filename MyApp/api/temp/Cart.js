<View style={wrapElement}>
    <Image source={imgSp1} style={imgStyle} />
    <View style={wrapContent}>
        <View style={header}>
            <Text style={titleStyle}>{toTitleCase('lace sleeve si')}</Text>
            <TouchableOpacity>
                <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
            </TouchableOpacity>
        </View>
        <Text style={priceStyle}>117$</Text>
        <View style={footer}>
            <View style={numberOfProduct}>
                <TouchableOpacity>
                    <Text style={{ color: 'black' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ color: 'black' }}>3</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'black' }}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={showDetailContainer}>
                <Text style={textDetail}>SHOW DETAILS</Text>
            </TouchableOpacity>
        </View>
    </View>
</View>




<ScrollView showsVerticalScrollIndicator={false}>
    { cartArray.map(product => (
        <View style={wrapElement} key={product}>
            <Image source={imgSp1} style={imgStyle} />
            <View style={wrapContent}>
                <View style={header}>
                    <Text style={titleStyle}>{toTitleCase('lace sleeve si')}</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={priceStyle}>117$</Text>
                <View style={footer}>
                    <View style={numberOfProduct}>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'black' }}>3</Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'black' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={showDetailContainer}>
                        <Text style={textDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    ))}
</ScrollView>
