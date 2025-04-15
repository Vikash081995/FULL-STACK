async function allSettledPromise(){
    const GITHUB_URL = 'https://api.github.com/users';

    let eliteP= fetch(`${GITHUB_URL}/elite`);
    let bestP= fetch(`${GITHUB_URL}/best`);
    let badUrl = fetch('https://api.github.com/users/this-is-a-bad-url');
    let results= await Promise.allSettled([eliteP, bestP, badUrl]);
    const fulfilled = results.filter((result) => result.status === 'fulfilled');
    const rejected = results.filter((result) => result.status === 'rejected');
}