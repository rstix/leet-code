/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  try {
    const results = await Promise.all([promise1, promise2]);
    return results.reduce((acc, item) => acc + item, 0);
  } catch (error) {
    console.error(error);
  }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));

const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((result) => {
  console.log(result);
});
