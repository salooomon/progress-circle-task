 function inputValues(value) {
    let newValue = String(value).replace(/^0+/g, '');
    if (newValue === '') {
        newValue = 0;
    }
    if (newValue > 100) {
        newValue = 100;
    } else if (newValue < 0) {
        newValue = 0;
    }
    return newValue
}
 export default inputValues