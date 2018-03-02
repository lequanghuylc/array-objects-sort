const isArray = val => {
    return typeof val === "object" && val.constructor === Array
}
  
const deepIndex = (array, element) => {
    // array = [ 'string', 'string', ['string', 'string'], 'string']
    // element = 'string';
  
    let length = array.length;
    for(let i=0; i<length; i++) {
        if(array[i] === element ) return i;
        if(isArray(array[i]) && array[i].indexOf(element) !== -1) return i;
    }
    return -1;
}
  
class SortArray {
    
    constructor(options) {

        this._setup(options);
    }   

    settings = [];
  
    _setup = options => {

        this.settings = options;
    };
  
    getSortSettings = () => {

        return this.settings;
    };
  
    _sortWithOneOption = (listData, option) => {
        
        let { key, priority } = option;
        let otherList = [];
        let listPriority = [];
        let sortedList = [];
        if (key === "fileSize") {
            let isDesc = priority[0] === "desc";
            return listData.sort((a, b) => {
            let orderNumber = isDesc ? -1 : 1;
            return a.fileSize > b.fileSize ? orderNumber : orderNumber * -1;
            });
        }
        for (let i = 0; i < priority.length; i++) {
            listPriority[i] = [];
        }
        let length = listData.length;
        for (let i = 0; i < length; i++) {
            //
            let index = deepIndex(priority, listData[i][key]);
            if (index === -1) otherList.push(listData[i]);
            else listPriority[index].push(listData[i]);
        }
        for (let i = 0; i < listPriority.length; i++) {
            sortedList = [...sortedList, ...listPriority[i]];
        }
        return [...sortedList, ...otherList];
    };
  
    sort = listData => {
        
        if (this.settings === undefined)
            throw new Error("setup sort validation fail");
        if (this.settings.length === 0) return listData;
        let sortedList = listData.slice();
        for (let i = this.settings.length - 1; i >= 0; i--) {
            sortedList = this._sortWithOneOption(sortedList, this.settings[i]);
        }
        return sortedList;
    };
}
  

module.exports = exports.SortArray = exports.default = SortArray;
  