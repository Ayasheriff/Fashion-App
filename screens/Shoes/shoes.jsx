import React from 'react';

import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import {Card} from 'react-native-paper';
import {View, Text, Image, ScrollView} from 'react-native';

const Shoes = () => {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <Navbar />
      <Header />
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
              style={{width: '85%', alignSelf: 'center', marginTop: 10}}
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
              source={require('../../assets/images/shoes.jpg')}
            />

            <Card.Content>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'rgba(99, 132, 106, 1)'}}>
                  Straight Dresses
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../../assets/images/heart.png')}
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
export default Shoes;
