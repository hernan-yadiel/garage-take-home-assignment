export async function simulateNetworkDelay(delayInMilliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Request completed after ' + delayInMilliseconds + 'ms');
    }, delayInMilliseconds);
  });
}
