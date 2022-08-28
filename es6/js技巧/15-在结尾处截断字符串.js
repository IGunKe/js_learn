const truncateString = (string, length) => {
    return string.length < length
        ? string
        : `${string.slice(0, length - 3)}...`;
};

console.log(
    truncateString('Hi, I should be truncated because I am too loooong!', 36)
);
// Hi, I should be truncated because...
