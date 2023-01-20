function findsElementInArray(array: string[], matchElement: string): string {
  for (let i = 0; i < array.length; i++) {
    const element: string = array[i];
    if (element === matchElement) {
      return element;
    }
  }

  //we make it here if we could NOT find the elemnt in the array.
  throw Error("could not find");
}

export default findsElementInArray;
