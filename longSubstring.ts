function longSubString( s: string): number {

    const newString = new Set<String>();

    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++) {
        while(newString.has(s[right])) {
            newString.delete(s[left]);
            left++;
        }
        newString.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longSubString("abcabcbb"));

const a = [1,2,3,4,5];

// const b = a.map((nums, index)=> { console.log(nums*2, index)})
let c = a.filter((num)=> {return num % 2 === 0})
console.log(c);
let d = a.reduce((sum, each) => {
    return sum + each;
},0);
console.log(d);
let e =a.join('.');
console.log(e);
console.log(a.includes(c[1]));