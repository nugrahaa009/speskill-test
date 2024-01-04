const errorHandler = (status) => async () => {
  if (status) {
    console.log('Status');
  } else {
    console.log('Error');
  }
}

export default errorHandler