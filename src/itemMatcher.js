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

export const itemSlots = [
  // Row 1
  [94, 956, 143, 1005],
  [150, 956, 199, 1005],
  [206, 956, 255, 1005],
  [262, 956, 311, 1005],
  [318, 956, 367, 1005],
  [374, 956, 423, 1005],
  // Row 2
  [94, 1012, 143, 1061],
  [150, 1012, 199, 1061],
  [206, 1012, 255, 1061],
  [262, 1012, 311, 1061],
  [318, 1012, 367, 1061],
  [374, 1012, 423, 1061],
]

onmessage = (e) => {
  if (!e.data || !Array.isArray(e.data)) {
    return;
  }

  console.log(e);
  
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
