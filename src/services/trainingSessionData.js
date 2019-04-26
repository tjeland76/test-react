const poolMapData = {
  orford : {
      center: {lat: 53.404941, lng: -2.587984},
      zoom: 14
    },
  woolston: {
      center: {lat: 53.399685, lng: -2.534278},
      zoom: 14
    },
  sankey: {
      center: {lat: 53.4011585, lng: -2.6617699},
      zoom: 14
  }
};

const trainingSessionData = [
  {
    day:0,
    label:'Sunday',
    location:'Orford Jubilee',
    time: '6 - 8pm',
    coach: 'Rob',
    map: poolMapData.orford
  },
  {
    day:1,
    label:'Monday',
    location:'Great Sankey Neighbourhood Hub',
    time: '9 - 10pm',
    coach: 'Rob',
    map: poolMapData.sankey
  },
  {
    day:2,
    label:'Tuesday',
    location:'Woolston Neighbourhood Hub',
    time: '9 - 10pm',
    coach: 'Tim',
    map: poolMapData.woolston
  },
  {
    day:3,
    label:'Wednesday',
    location:'Orford Jubilee',
    time: '9 - 10pm',
    coach: 'Rob',
    map: poolMapData.orford
  },
  {
    day:5,
    label:'Friday',
    location:'Orford Jubilee',
    time: '8 - 10pm',
    coach: 'Rob',
    map: poolMapData.orford
  }
];

export {trainingSessionData};
