import React from 'react';
import Shuffle from '@material-ui/icons/Shuffle';
import Save from '@material-ui/icons/Save';
import { Button } from '../elements';
import FileSaver from 'file-saver';

// import ShowcaseButton from '../showcase-components/showcase-button';
import { FlexibleXYPlot, XYPlot, ArcSeries, XAxis, YAxis } from 'react-vis';

// import { EXTENDED_DISCRETE_COLOR_RANGE as COLORS } from 'theme';
const COLORS = [
  '#4FC3F7',
  '#03A9F4',
  '#0288D1',
  '#0288D1',
  '#80DEEA',
  '#26C6DA',
  '#00BCD4',
  '#FFEE58',
  '#FDD835',
  '#FFB300',
  '#FF8F00',
  '#FFA726',
  '#FB8C00',
  '#E65100',
  '#2196F3',
  '#1976D2',
  '#E91E63',
  '#D81B60',
  '#C2185B',
  '#F50057',
];

const PI = Math.PI;

function updateData() {
  const divider = Math.floor(Math.random() * 8 + 3);
  const newData = [...new Array(16)].map((row, index) => {
    return {
      color: index + 5,
      radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
      radius: Math.random() * 3 + 1,
      angle: ((index + 1) * PI) / divider,
      angle0: (index * PI) / divider,
    };
  });
  return newData.concat([
    { angle0: 0, angle: PI * 2 * Math.random(), radius: 1.1, radius0: 0.8 },
  ]);
}

function updateLittleData() {
  const portion = Math.random();
  return [
    {
      angle0: 0,
      angle: portion * PI * 2,
      radius0: 0,
      radius: 10,
      color: COLORS[19],
    },
    {
      angle0: portion * PI * 2,
      angle: 2 * PI,
      radius0: 0,
      radius: 10,
      color: COLORS[9],
    },
  ];
}

export default class Example extends React.Component {
  state = { data: updateData(), littleData: updateLittleData(), value: false };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  getSVG = () => {
    console.log(this.myRef.current);
    const node = this.myRef.current;
    const svg = node.querySelector('.rv-xy-plot__inner').outerHTML;
    // this.setState({ svg });

    // -----------------------------
    let svgURL = new Blob([svg], {
      type: 'text/plain',
    });
    let svgBlob = new Blob([svgURL], {
      type: 'image/svg+xml;charset=utf-8',
    });
    FileSaver.saveAs(svgBlob, 'test.svg');
  };
  render() {
    return (
      <div ref={this.myRef}>
        <FlexibleXYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} height={360}>
          <XAxis />
          <YAxis />
          <ArcSeries
            animation
            radiusDomain={[0, 4]}
            data={this.state.data.map(row => {
              if (this.state.value && this.state.value.color === row.color) {
                return {
                  ...row,
                  style: {
                    stroke: 'white',
                    strokeWidth: '1px',
                  },
                };
              }
              return row;
            })}
            colorRange={COLORS}
            onValueMouseOver={row =>
              this.setState({
                value: row,
              })
            }
            onSeriesMouseOut={() =>
              this.setState({
                value: false,
              })
            }
            colorType={'category'}
          />
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{ x: -2, y: 2 }}
            data={this.state.littleData}
            colorType={'literal'}
          />
        </FlexibleXYPlot>
        <Button
          size="sm"
          onClick={() =>
            this.setState({
              data: updateData(),
              littleData: updateLittleData(),
            })
          }
          circle
        >
          <Shuffle />
        </Button>
        <Button size="sm" onClick={this.getSVG} circle>
          <Save />
        </Button>
      </div>
    );
  }
}
