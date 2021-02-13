var events = [
  {'Date': new Date(2020, 10, 7), 'Title': 'Webinar prevención de incendios 3:25pm.'},
  {'Date': new Date(2020, 10, 18), 'Title': 'Día del bombero', 'Link': '#'},
  {'Date': new Date(2020, 11, 31), 'Title': 'Año viejo', 'Link': '#'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
