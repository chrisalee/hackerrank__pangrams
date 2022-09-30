/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    let sSorted = s.toLowerCase().split('').filter(i => i !== ' ');
    let uniqueLets = [... new Set(sSorted)]
    console.log(uniqueLets.length);
    
    if(uniqueLets.length === 26) {
      console.log('pangram');
      return 'pangram'
    }
    console.log('not pangram');
    return 'not pangram';
}
