"use strict";
function kgToGs(weight) {
    if (typeof weight === 'number')
        return weight * 1000;
    else
        return parseInt(weight) * 1000;
}
kgToGs(10);
kgToGs('10kg');
//# sourceMappingURL=index.js.map