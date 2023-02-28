import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Card} from 'react-native-paper';

import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';

const Favourite = () => {
  return (
    <View style={Styles.favContainer}>
      <Navbar />
      <ScrollView horizontal={false}>
        <View style={{flexDirection: 'row'}}>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 15,
            }}>
            <Card.Cover
              style={{
                width: '85%',
                alignSelf: 'center',
                marginTop: 10,
              }}
              source={require('../../assets/images/dress1.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 10,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/suit2.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 15,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/suit1.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 10,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/dress2.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 15,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/dress3.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 10,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/dress4.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 15,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/dress5.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
          <Card
            style={{
              width: 165,
              height: 288,
              borderColor: 'rgba(255, 204, 156, 1)',
              borderWidth: 2,
              margin: 10,
            }}>
            <Card.Cover
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/dress6.png')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/redHeart.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Rent</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$250</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'black'}}>For Sale</Text>
                <Text style={{fontSize: 10, color: 'black'}}>$350</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};
const Styles = StyleSheet.create({
  favContainer: {
    justifyContent: 'space-between',
    height: '100%',
  },
});
export default Favourite;
