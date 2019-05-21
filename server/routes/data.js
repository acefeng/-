module.exports = [
  [
      'GET',
      '/data',
      '../controllers/data',
      'getIndex'
  ],
  [
    'POST',
    '/getDataSummary',
    '../controllers/data',
    'getDataSummary'
  ],
];