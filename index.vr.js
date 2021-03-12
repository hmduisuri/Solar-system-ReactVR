import React from 'react';
import {
  AppRegistry,
  asset,
  Model,
  Pano,
  PointLight,
  Sound,
  Text,
  View,
} from 'react-vr';
import Descriptions from './components/DescriptionBox';
export default class solarsystem extends React.Component {
  constructor(){
    super();
    this.state = {
      rotation: 0,
      antirotation: 360,
      angle1: 30,
      angle2: 50,
      angle3: 70,
      angle4: 90,
      angle5: 110,
      angle6: 130,
      angle7: 150,
      angle8: 190,
    }
  }

  componentDidMount(){
    this.rotate();
  };

  rotate(){
    this.setState({
      rotation: this.state.rotation +1,
      antirotation: this.state.antirotation -1,
      angle1: this.state.angle1 + 0.0050,
      angle2: this.state.angle2 + 0.0039,
      angle3: this.state.angle3 + 0.0035,
      angle4: this.state.angle4 + 0.0029,
      angle5: this.state.angle5 + 0.0025,
      angle6: this.state.angle6 + 0.0020,
      angle7: this.state.angle7 + 0.0018,
      angle8: this.state.angle8 + 0.0017
    });

    if(this.rotation > 360){
      this.setState({rotation: 1})
    }
    if(this.antirotation < 1) {
      this.setState({antirotation: 360})
    }
    if(this.angle1 > 360){
      this.setState({angle1: 1})
    }
    if(this.angle2 > 360){
      this.setState({angle2: 1})
    }
    if(this.angle3 > 360){
      this.setState({angle3: 1})
    }
    if(this.angle4 > 360){
      this.setState({angle4: 1})
    }
    if(this.angle5 > 360){
      this.setState({angle5: 1})
    }
    if(this.angle6 > 360){
      this.setState({angle6: 1})
    }
    if(this.angle7 > 360){
      this.setState({angle7: 1})
    }
    if(this.angle8 > 360){
      this.setState({angle8: 1})
    }
      requestAnimationFrame(this.rotate.bind(this));
  }

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Sound
          volumn={200}
          source={{ wav: asset('spacesound.wav') }}
          loop={true}
      />
        <PointLight intensity = {1} style = {{color: 'white', transform: [{ translate:[-40, 0, 0]}]}}/>
        <Model
          texture = {asset('sun.jpg')}
          source = {{
            obj:asset('sphere.obj')
            }}

            style = {{
              transform: [
                {translate: [-40, 0, 0]},
                {scale: [5, 5, 5]},
                {rotateY: this.state.rotation}
              ]
            }}
            >
          </Model>
       
 
        <Model
        texture = {asset('mercury.jpg')}
        lit
          source = {{obj: asset('sphere.obj')}}
          style = {{
            transform: [
              {translate: [70*Math.cos(this.state.angle1), 0, 60*Math.sin(this.state.angle1)]},
              {scale: [.8, .8, .8]},
              {rotateY: this.state.rotation},
            ]
          }}
          />

        <Model
          source = {{obj: asset('sphere.obj')}}
          texture = {asset('venus.jpg')}
          lit
          style = {{
            transform: [
              {translate: [90*Math.cos(this.state.angle2), 0, 70*Math.sin(this.state.angle2)]},
              {scale: [1.1, 1.1, 1.1]},
              {rotateY: this.state.antirotation}
            ]
          }}
        />

      <Model
          source = {{obj: asset('sphere.obj')}}
          texture = {asset('earth.png')}
          lit
          style = {{
            transform: [
              {translate:  [110*Math.cos(this.state.angle3), 0, 90*Math.sin(this.state.angle3)]},
              {scale: [1.4, 1.4, 1.4]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
      <Model
          source = {{obj: asset('sphere.obj')}}
          texture = {asset('mars.jpg')}
          lit
          style = {{
            transform: [
              {translate:  [130*Math.cos(this.state.angle4), 0, 110*Math.sin(this.state.angle4)]},
              {scale: [0.9, 0.9, 0.9]},
              {rotateY: this.state.rotation}
            ]
          }}
        />
        <Model
          source = {{obj: asset('sphere.obj')}}
          texture = {asset('jupiter.jpg')}
          lit
          style = {{
            transform: [
              {translate:  [150*Math.cos(this.state.angle5), 0, 130*Math.sin(this.state.angle5)]},
              {scale: [4.5, 4.5, 4.5]},
              {rotateY: this.state.rotation}
            ]
          }}
        />

        <Model
          source = {{obj: asset('Saturn.obj')}}
          texture = {asset('saturn.jpg')}
          lit
          style = {{
            transform: [
              {translate:  [170*Math.cos(this.state.angle6), 0, 150*Math.sin(this.state.angle6)]},
              {scale: [3.5, 3.5, 3.5]},
              {rotateX: -20},
              {rotateY: this.state.rotation}
            ]
          }}
        />

        <Model
          source = {{obj: asset('sphere.obj')}}
          texture = {asset('uranus.jpg')}
          lit
          style = {{
            transform: [
              {translate:  [190*Math.cos(this.state.angle7), 0, 170*Math.sin(this.state.angle7)]},
              {scale: [2.5, 2.5, 2.5]},
              {rotateZ: this.state.antirotation}
            ]
          }}
        />  

        <Model
          source = {{obj: asset('sphere.obj')}}
          texture = {asset('neptune.jpg')}
          lit
          style = {{
            transform: [
              {translate:  [210*Math.cos(this.state.angle8), 0, 190*Math.sin(this.state.angle8)]},
              {scale: [2, 2, 2]},
              {rotateZ: this.state.rotation}
            ]
          }}
        />  
        <Descriptions/> 
      </View>
    );
  }
};

AppRegistry.registerComponent('solarsystem', () => solarsystem);
