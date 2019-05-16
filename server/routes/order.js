module.exports = [
  [
    'GET',
    '/order',
    '../controllers/order',
    'getIndex'
  ],
  [
    'POST',
    '/getAllOrder',
    '../controllers/order',
    'getAllOrder'
  ],
  [
    'POST',
    '/getSelectOrder',
    '../controllers/order',
    'getSelectOrder'
  ],
  [
    'POST',
    '/changeOrderState',
    '../controllers/order',
    'getChangeOrderState'
  ],
  
];