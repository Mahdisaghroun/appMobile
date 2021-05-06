import {
      AppRegistry,
      StyleSheet,
      Text,
      TouchableOpacity,
      Linking
} from 'react-native';
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class ScanScreen extends React.Component {
      onSuccess = e => {
            Linking.openURL(e.data).catch(err =>
                  console.error('An error occured', err)
            );
      };

      render() {
            return (
                  <QRCodeScanner
                        onRead={this.onSuccess}
                        flashMode={RNCamera.Constants.FlashMode.torch}
                        topContent={
                              <Text style={styles.centerText}>
                                    Scanner votre QR code{' '}
                                    <Text style={styles.textBold}>La detection est automatique</Text>
                              </Text>
                        }
                        bottomContent={
                              <TouchableOpacity style={styles.buttonTouchable}>
                                    <Text style={styles.buttonText}>Annuler</Text>
                              </TouchableOpacity>
                        }
                  />
            );
      }
}

const styles = StyleSheet.create({
      centerText: {
            flex: 1,
            fontSize: 18,
            padding: 32,
            color: '#777'
      },
      textBold: {
            fontWeight: '500',
            color: '#000'
      },
      buttonText: {
            fontSize: 21,
            color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
            padding: 16
      }
});