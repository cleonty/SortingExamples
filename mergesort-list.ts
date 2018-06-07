interface List {
    x: number;
    next: List;
};

function split(list: List): List {
    let secondList: List = null;
    if (list == null) {
        return null;
    } else if (list.next == null) {
        return null;
    } else {
        secondList = list.next;
        list.next = secondList.next;
        secondList.next = split(secondList.next);
        return secondList;
    }
}

function merge(list1, list2: List): List {
    if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    } else if (list1.x < list2.x) {
        list1.next = merge(list1.next, list2);
        return list1;
    } else {
        list2.next = merge(list1, list2.next);
        return list2;
    }
}

function mergeSort(list: List): List {
    if (list == null) {
        return null;
    } else if (list.next == null) {
        return list;
    } else {
        const second = split(list);
        return merge(mergeSort(list), mergeSort(second));
    }
}

function listFromDigitString(digits: string): List {
    const digitsArray = digits.split('').map(c => +c);
    let list: List;
    let last: List;
    for (let i = 0; i < digitsArray.length; i++) {
        const element: List = {
            x: digitsArray[i],
            next: null
        };
        if (list == null) {
            list = element;
            last = element;
        } else {
            last.next = element;
            last = element;
        }
    }
    return list;
}

function listToDigitString(list: List): string {
    let s = '';
    while (list) {
        s += list.x;
        list = list.next;
    }
    return s;
}

const digits = '8069743512';
let list = listFromDigitString(digits);
list = mergeSort(list);
document.title = listToDigitString(list);
