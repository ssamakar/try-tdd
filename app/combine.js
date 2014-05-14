/**
 * Transforms an array of objects into a single object.
 *
 * Sample input:
 *
 * [{ 'course-id': 123 }, { title: 'Dev Mountain' }, { start_date: new Date(2014, 2, 14) }]
 *
 * Sample output:
 *
 * {
 *   'course-id': 123,
 *   title: 'Dev Mountain',
 *   start_date: new Date(2014, 2, 14)
 * }
 *
 * @param {Array} fields array of single-property objects
 * @returns {Object} object with all fields included
 */
module.exports = function (fields) {
	if (!Array.isArray(fields)){
		return false;
	} 

	for (var j = 0; j<fields.length; j++){
		if ((typeof fields[j]) != "object"){
			return false;
			}
		}
	
	if (fields.length == 0){
		return false;
	}


		// for (var i = 0; i<array.length; i++){
  // 		for(key in object){
  			
  // 		}
  // 	}
	return {};
}