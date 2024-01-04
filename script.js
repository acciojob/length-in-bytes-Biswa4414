const byteSize = (str) => {
  // write your code here
	 const decoder = new TextEncoder("utf-8");
    const byteLength = decoder.encode(str).length;
    return byteLength;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
