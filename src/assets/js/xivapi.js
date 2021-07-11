const XIVAPI = require('@xivapi/js');

const xiv = new XIVAPI();

try {
    let response = await xiv.search("Shroud Cherry Sapling")
    alert(response);
  } catch(error) {
    alert(error);
  }