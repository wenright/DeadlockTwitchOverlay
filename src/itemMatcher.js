import * as tf from '@tensorflow/tfjs';

import classNames from "./data/class_names.json";

console.log(classNames);

let model = null;
tf.loadLayersModel('/item_classifier_model/model.json')
  .then((data) => {
    model = data;
  })
  .catch(e => {
    console.error(e);
  });

const itemSlots = {
  "orange": [
    [30, 991, 60, 1021],
    [68, 991, 98, 1021],
    [30, 1029, 60, 1059],
    [68, 1029, 98, 1059]
  ],
  "green": [
    [117, 991, 147, 1021],
    [155, 991, 185, 1021],
    [117, 1029, 147, 1059],
    [155, 1029, 185, 1059]
  ],
  "purple": [
    [205, 991, 235, 1021],
    [243, 991, 273, 1021],
    [205, 1029, 235, 1059],
    [243, 1029, 273, 1059]
  ],
  "flex": [
    [292, 991, 322, 1021],
    [330, 991, 360, 1021],
    [292, 1029, 322, 1059],
    [330, 1029, 360, 1059]
  ]
}

onmessage = (e) => {  
  const [ image ] = e.data;
  
  const items = {};
  let averageConfidence = 0;
  let numItems = 0;
  
  const tensor = tf.browser.fromPixels(image)
    .resizeNearestNeighbor([1080, 1920])
    .expandDims();

  for (const [color, slotGroup] of Object.entries(itemSlots)) {
    items[color] = [];
    
    for (const slot of slotGroup) {
      const startX = slot[0];
      const startY = slot[1];
      const cropWidth = slot[2] - startX;
      const cropHeight = slot[3] - startY;

      const croppedTensor = tensor.slice([0, startY, startX, 0], [1, cropHeight, cropWidth, 3]);

      const predictions = model.predict(croppedTensor);
      const probabilities = tf.softmax(predictions);
      const predictedIndex = probabilities.argMax(-1).dataSync()[0];
      const predictedClass = classNames[predictedIndex];

      const confidence = probabilities.dataSync()[predictedIndex] * 100;

      probabilities.dispose();

      items[color].push(confidence > 50 ? predictedClass : 'empty');

      numItems++;
      averageConfidence += confidence;
    }
  }

  averageConfidence /= numItems;

  postMessage({ items: items, averageConfidence: averageConfidence });
}
