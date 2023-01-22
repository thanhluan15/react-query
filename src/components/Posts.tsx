import { useQuery } from "@tanstack/react-query";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function Posts() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());
      return data;
    },
  });

  console.log(data?.map((p) => p));

  return (
    <div>
      {data?.map((post: Post) => {
        return <div key={post?.id}>{post?.id} : { post?.title}</div>;
      })}
    </div>
  );
}

export default Posts;
