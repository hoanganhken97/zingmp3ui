/**
<View style={wrapProductList} >
 <View style={wrapperAll}>
     <View style={wrapHeader}>
         <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
             <Image source={backList} style={iconBack} />
         </TouchableOpacity>
         <Text style={titleStyle}>{category.name}</Text>
         <View style={iconBack} />
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
         <View style={productContainer}>
             <Image style={productImg} source={imgSp1} />
             <View style={productInfo}>
                 <Text style={textName}>Lace Sleeve Si</Text>
                 <Text style={textPrice}>100$</Text>
                 <Text style={textMaterial}>Material Silk</Text>
                 <View style={lastRowInfo}>
                     <Text style={textColor}>Color RoyalBlue</Text>
                     <View style={productColor} />
                     <TouchableOpacity>
                         <Text style={textShowDetail}>SHOW DETAILS</Text>
                     </TouchableOpacity>
                 </View>
             </View>
         </View>
     </ScrollView>
 </View>
</View>
 */
