import React, {useState} from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Image,
    StatusBar,
    useColorScheme,
    View,
  } from 'react-native';



const Inicio = ({navigation}) => {

    const handlepress = ()=>{
        navigation.navigate('Perfil_VG');
     };


     
    

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Text style={styles.encabezado}>Inicio</Text>
                <Image 
                style={styles.fotoperfilp}
                source={require('../imagenes/joji.jpeg')} 
                />
            <Text style={styles.seccionHeaderp}> George Miller joji</Text>
    
            <View 
            style= {styles.seccionp}>
             <Text style={styles.seccionHeaderp}> Fecha de Nacimiento: </Text>
             <Text style={styles.seccionContentp}> 18 de septiembre de 1992 </Text>
             </View>
    
             
             <Text style={styles.seccionmargentopp}> Pasatiempos: </Text>
             <Text style={styles.seccionmargenp}>Cantante, compositor, rapero, productor discografico y ex comediante.</Text>
             
             <Text style={styles.seccionmargentopp}> Otros </Text>
             <Text style={styles.seccionmargenp}>A pesar de haber nacido en Osaka, Japón y hablar japonés, su repertorio de canciones y proyectos discográficos son todos en inglés. Actualmente vive en Manhattan, Nueva York, Estados Unidos.

</Text>
    
                <Button 
                    title='Mi perfil'
                    onPress={handlepress}
                />
     
            </ScrollView>
        </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    encabezadop: {
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#blue',
    },
    
    svContenedorp:{
      alignItems: 'center',
    },
    
    fotoperfilp:{
    width: 200,
    height: 220,
    marginTop: 30,
    },
    
    seccionp: {
      flexDirection: 'row',
      marginTop: 25,
    },
    
    seccionmargentopp: {
      fontSize: 21,
      fontWeight: 'bold',
      marginTop: 34,
    },
    
    seccionHeaderp: {
      fontSize: 21,
      fontWeight: 'bold',
    },
    
    seccionContentp: {
      fontSize: 20,
      marginStart: 1,
    },
    
    seccionmargenp: {
      fontSize: 20,
      marginStart: 15,
      marginEnd: 20,
      
    },
    contenedor:{
            alignItems:'center',
        },

        encabezado:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
        },

        margen:{
        marginTop: 34,

        },

    });
            

export default Inicio;

