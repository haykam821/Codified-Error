module.exports = class CodifiedError extends Error {
	constructor(code = "", params...) {
		super(...params);
		this.code = code; 
	}
}
