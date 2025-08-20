import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  
  TouchableOpacity,
} from 'react-native';
import UserProfile from './profile';
import Api from "./Product";

function Drawer ()  {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View>
    <View style={[ styles.navigationContainer]}>
      <Text style={styles.paragraph}><UserProfile/></Text>
    </View>
      <View style={styles.list}>
    <TouchableOpacity>
      <Text>• Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>• Account</Text>
      </TouchableOpacity>
    <TouchableOpacity>
      <Text>• Help!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>• Setting</Text>
      </TouchableOpacity>
      </View>
      </View>
      
    
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}> <Api/></Text>
        
        
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
    textAlign:"left",
    marginTop:20,
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'left',
  },
  list:{
    fontWeight:"400",
    padding:10,
    backgroundColor:"#a9a9a9",
    borderRadius: 3,
    elevation: 3,
    flexDirection:"column",
    gap:20,
  },
  
});

export default Drawer;