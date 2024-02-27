/**
 * Pick Type
 */
interface Post {
  title: string;
  content: string;
  //? 생설 날짜는 자동으로 생성함
  createdAt: Date;
}

//? pick 유틸리티를 사용하여 입력하고 싶은 값만 "골라서" 넣을수 있다.
function createPost(post: Pick<Post, 'title' | 'content'>): Post {
  return {
      ...post,
      createdAt: new Date(),
  };
}

createPost2({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});


//* Omit으로 변경 해서 테스트
function createPost2(post: Omit<Post, 'createdAt'>): Post {
  return {
      ...post,
      createdAt: new Date(),
  };
}

const a = createPost2({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});

console.log(a)