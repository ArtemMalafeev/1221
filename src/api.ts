export const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts() {
    return await fetch(`${API_URL}/posts`).then((data) => data.json());
};

export async function fetchUser(userId: string) {
    return await fetch(`${API_URL}/users/${userId}`).then((data) => data.json());
};

export async function fetchPost(postId: string) {
    return await fetch(`${API_URL}/posts/${postId}`).then((data) => data.json());
};