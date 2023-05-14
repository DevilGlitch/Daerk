// Base64 Encoding
function base64Encode(str) {
	return btoa(unescape(encodeURIComponent(str)));
	
}

export { base64Encode };

// Base64 Decoding
function base64Decode(encodedStr) {
	return decodeURIComponent(escape(atob(encodedStr)));
}

export { base64Decode };