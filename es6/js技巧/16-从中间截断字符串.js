const truncateStringMiddle = (string, length, start, end) => {
    return `${string.slice(0, start)}...${string.slice(string.length - end)}`;
};

console.log(
    truncateStringMiddle(
        'A long story goes here but then eventually ends!', // string
        25, // total size needed
        13, // chars to keep from start
        17 // chars to keep from end
    )
);
// A long story ... eventually ends!
