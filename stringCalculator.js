//numbers: numbers
export function add(numbers) {
    if (numbers == '') 
        return 0
    
    if (numbers.startsWith('//')) {
        const delimiter = numbers[2] // extrait le séparateur (ex: ";")
        const numbersOnly = numbers.split('\n')[1] // extrait la partie avec les nombres (ex: "1;2")
        const nums = numbersOnly.split(delimiter).map(Number) // découpe et convertit en tableau de nombres
        nums.forEach(n => { if (n < 0) throw new Error(`Negatives not allowed. ${n}`) }) // vérifie les négatifs
        return nums.reduce((acc, n) => acc + n) // additionne tous les nombres
    }

    else {
        const nums = numbers.split(/,|\n/).map(Number) // découpe et convertit en tableau de nombres
        nums.forEach(n => { if (n < 0) throw new Error(`Negatives not allowed. ${n}`) }) // vérifie les négatifs
        return nums.reduce((acc, n) => acc + n)
    }
}