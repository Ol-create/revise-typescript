function greet(name: string | null | undefined): string {
    if (name)
        return `Hello ${name}!`;
    return 'Hola!';
}

console.log(greet(''))