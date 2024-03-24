export const generateMeetingId = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 9; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    // Split the string into 3 parts and add hyphens
    return result?.match(/.{1,3}/g)?.join("-");
};
