import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';


const Perfil = ()=>{
    return (
        <SafeAreaView > 
          <ScrollView 
          contentContainerStyle={styles.svContenedor}
          contentInsetAdjustmentBehavior="automatic">
            
          <Image 
          style={styles.fotoPerfil}
            source={require('../imagenes/fotop.jpg')} 
            />
            <Text style={styles.encabezado}>Leonardo Ruben Ordonez Rivera</Text>
            <View style={styles.seccion}>
            <Text style={styles.seccionHeder}>Fecha de nacimiento:</Text>  
            <Text style={styles.seccionContent}>29 de abril del 2003</Text> 
              </View>
              
            <Text style={styles.seccionH}>Pasatiempos:</Text>  
            <Text style={styles.seccionContent}>Me gustan los videojuegos en especial los simuladores o indies. Disfruto escuchar música y estar al pendiente de nuevas canciones de mis artistas. En tiempo libre me gusta ver series de TV. </Text> 
            <Text style={styles.seccionH}>Otros:</Text>  
            <Text style={styles.seccionContent}>
            Nacido en Tegucigalpa, estudiando en la UJCV en el campus de Comayagua.
</Text> 
             
               
          </ScrollView>
        </SafeAreaView>
      );
    
}
    const styles = StyleSheet.create({
      encabezado: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
      },
    
      svContenedor: {
        alignItems: 'center',
      },
      fotoPerfil:{
        width: 200,
        height: 220,
      },
      seccion:{
        flexDirection: 'row',
        marginTop: 10,
      },
      seccionHeder:{
        fontSize: 18,
        fontWeight: 'bold',
      },
      seccionH:{
        fontSize: 18,
        marginTop: 15,
        fontWeight: 'bold',
      },
      seccionContent:{
        fontSize: 17,
        marginStart: 5,
      }
      
    });

 export default Perfil;

