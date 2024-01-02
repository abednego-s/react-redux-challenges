export const fakeUser = {
  id: 1,
  name: "Alex",
  email: "alex@example.com",
};

export type User = typeof fakeUser;

export type ApiResponse = {
  data: User | null;
  status: "idle" | "error" | "success";
  error: string | null;
};

export function fakeFetch(id: number) {
  return new Promise<{ json: () => Promise<User> }>((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ json: () => Promise.resolve(fakeUser) });
      }
      reject("Error");
    }, 1000);
  });
}

export async function fetchUserById(id: number) {
  const request = await fakeFetch(id);
  return await request.json();
}
