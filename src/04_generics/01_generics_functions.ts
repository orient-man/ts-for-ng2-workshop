// TODO 1: MapIterator interface; gMap function

// TODO 2: FilterIterator interface; gFilter function

// TODO 3: AllIterator interface; gAll function

interface AllIterator<T> { (elem: T): boolean; }

function gAll<T>(list: T[], test: AllIterator<T>): boolean {
    for (let i = 0; i < list.length; i++) {
        if (!test(list[i])) {
            return false;
        }
    }
    return true;
}

// TODO 4: SliceIterator interface; gEachSlice function

interface SliceIterator<T> { (slice: T[], index: number): void; }

function gEachSlice<T>(
    list: T[],
    iteratorFn: SliceIterator<T>,
    sliceSize: number) : void {
    list
        .reduce((slices: T[][], elem: T) => {
            let slice: T[] = slices[slices.length - 1];
            if (slice.length < sliceSize) {
                slice.push(elem);
            }
            else {
                slices.push([elem]);
            }
            return slices;
        }, [[]])
        .forEach(iteratorFn);
}

// TODO 5: ReduceIterator interface; gReduce function

// TODO 6: gPluck function

// TODO 7: interfaces: GroupByIterator & Grouped; gGroupBy function
