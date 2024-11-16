import * as tf from '@tensorflow/tfjs';

import classNames from "./data/class_names.json";

function displayTensorAsImage(tensor) {
  const [batch, height, width, channels] = tensor.shape;

  const canvas = new OffscreenCanvas(width, height);

  tf.browser.toPixels(tensor.squeeze(), canvas).then(() => {
    const base64Data = canvas.convertToBlob()
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log(reader.result);
        };
        reader.readAsDataURL(blob);
      });
  });
}

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
    [30, 987, 60, 1017],
    [68, 987, 98, 1017],
    [30, 1025, 60, 1055],
    [68, 1025, 98, 1055]
  ],
  "green": [
    [117, 987, 147, 1017],
    [155, 987, 185, 1017],
    [117, 1025, 147, 1055],
    [155, 1025, 185, 1055]
  ],
  "purple": [
    [205, 987, 235, 1017],
    [243, 987, 273, 1017],
    [205, 1025, 235, 1055],
    [243, 1025, 273, 1055]
  ],
  "flex": [
    [292, 987, 322, 1017],
    [330, 987, 360, 1017],
    [292, 1025, 322, 1055],
    [330, 1025, 360, 1055]
  ]
}

onmessage = (e) => {
  const [image] = e.data;

  const items = {};

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

      // Uncomment to debug image cropping
      // displayTensorAsImage(croppedTensor);

      const predictions = model.predict(croppedTensor);
      const probabilities = tf.softmax(predictions);
      const predictedIndex = probabilities.argMax(-1).dataSync()[0];
      const predictedClass = classNames[predictedIndex];

      probabilities.dispose();
      croppedTensor.dispose();

      items[color].push(predictedClass);
    }
  }

  tensor.dispose();

  postMessage({ items: items });
}
