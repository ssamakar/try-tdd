function filter(list, conditionFn){
	var filtered = []
	if (list && list.length > 0){
		list.forEach(function(el){
			if (conditionFn(el)){
				filtered.push(el);
			}
		})
		}
	return filtered;
};

module.exports = filter;