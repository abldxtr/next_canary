"use cache";

async function Users() {
  type usr = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const users = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  const tt = await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      {users.map((item: usr, index: number) => {
        return (
          <div key={index}>
            {" "}
            {item.title} {index}{" "}
          </div>
        );
      })}
    </>
  );
}

export default async function Page() {
  return (
    <main>
      <Users />
    </main>
  );
}
