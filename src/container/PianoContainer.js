import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import PianoWrapper from "../components/PianoWrapper";
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import PosCircle from '../components/PosCircle';

class PianoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            xPos: 0,
            yPos: 0,
            xStartPos: 5200,
            xEndPos: 15200,
            yStartPos: 1040,
            yEndPos: 6440
        };
    }

    componentDidMount() {
        let connection = new MQTTConnection();
        let tag = "3249431515";
        let coords = {};
        connection.connect();
        setInterval(() => {
            if (connection.isConnected) {
                coords = connection.getCoordsFromTag(tag);
                console.log("Coords", coords);
                this.setState({
                    xPos: coords.x - 5600,
                    yPos: -(coords.y - 5800)
                });
                console.log("mapped coords", this.state.xPos, this.state.yPos);
            }
        }, 30);
    }

    render() {
        return (
            <div className="piano-container">
                {/*<PianoWrapper firstNote={'c3'} lastNote={'c3'}/>
                  <PianoWrapper firstNote={'d3'} lastNote={'d3'}/>
                  <PianoWrapper firstNote={'e3'} lastNote={'e3'}/>
                  <PianoWrapper firstNote={'f3'} lastNote={'f3'}/>
                  <PianoWrapper firstNote={'g3'} lastNote={'g3'}/>
                  <PianoWrapper firstNote={'a3'} lastNote={'a3'}/>
                  <PianoWrapper firstNote={'b3'} lastNote={'b3'}/>
                  <PianoWrapper firstNote={'c4'} lastNote={'c4'}/>
                  <PianoWrapper firstNote={'d4'} lastNote={'d4'}/>
                  <PianoWrapper firstNote={'e4'} lastNote={'e4'}/>
                  <PianoWrapper firstNote={'f4'} lastNote={'f4'}/>
                  <PianoWrapper firstNote={'g4'} lastNote={'g4'}/>
                  <PianoWrapper firstNote={'a4'} lastNote={'a4'}/>
                  <PianoWrapper firstNote={'b4'} lastNote={'b4'}/>
                  <PianoWrapper firstNote={'c5'} lastNote={'c5'}/>
                  */}


                {/* Setting stage for react konva */}
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <PosCircle xPos={this.state.xPos} yPos={this.state.yPos}/>
                    </Layer>
                </Stage>

                {/*<Tangent note="C" xstart="5200" xend="5866" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="D" xstart="5866" xend="6532" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="E" xstart="6532" xend="7198" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="F" xstart="7198" xend="7198" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="G" xstart="7864" xend="8530" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="A" xstart="8530" xend="9196" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="H" xstart="9196" xend="9862" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="C" xstart="9862" xend="10528" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="D" xstart="10528" xend="11194" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="E" xstart="11194" xend="11860" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="F" xstart="11860" xend="12526" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="G" xstart="12526" xend="13192" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="A" xstart="13192" xend="13858" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="H" xstart="13858" xend="14525" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="C" xstart="14525" xend="15190" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
                */}
            </div>
        );
    }
}

export default PianoContainer;