/**
 * Omit Type
 */

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

//? Omit 유티리티를 사용해서 '생략'하고 싶은 프러로퍼티 제외 할수 있다.
function createPost(post: Omit<Post, 'createdAt'>): Post {
  return {
      ...post,
      createdAt: new Date(),
  };
}

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});