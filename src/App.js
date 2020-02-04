import React from 'react';

function Food({ name,picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodIlike = [
  {
    name: "kimchi",
    image: 
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAxNzA4MTZfNDIg%2FMDAxNTAyODQyNDg0MzE0.67vxDK4BwFMtJkfEuNZQnaqqh0LQH9--P0KQxsQi7fcg.Jhml3483o9iDgK-v6ZQRDfUFjRc2ErkhZVXYKvN5SGEg.JPEG%2FGettyImages-a10328421.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fm.post.naver.com%2Fviewer%2FpostView.nhn%3FvolumeNo%3D9132794%26memberNo%3D3600238&docid=NuLwMjfH0rgirM&tbnid=h-8PRTR6ZujbOM%3A&vet=10ahUKEwj_3YbzirjnAhVSFogKHcjyAI4QMwj5ASgDMAM..i&w=1200&h=800&bih=917&biw=866&q=rlacl&ved=0ahUKEwj_3YbzirjnAhVSFogKHcjyAI4QMwj5ASgDMAM&iact=mrc&uact=8"
  },
  {
    name: "bibimbab",
    image: 
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F44%2FDolsot-bibimbap.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25B9%2584%25EB%25B9%2594%25EB%25B0%25A5&docid=LLx6Fq5KFqTvRM&tbnid=QhFN1PI4Gi3m0M%3A&vet=10ahUKEwiG7K-Pi7jnAhUHHXAKHRxPAsIQMwjmASgAMAA..i&w=6748&h=4503&bih=917&biw=866&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=0ahUKEwiG7K-Pi7jnAhUHHXAKHRxPAsIQMwjmASgAMAA&iact=mrc&uact=8"
  },
  {
    name: "bulgogi",
    image: 
    "https://www.google.com/imgres?imgurl=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2017%2F01%2F28%2F1af73efa160ca79311629ecdf20ad7071.jpg&imgrefurl=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6864449&docid=vAUvF1RaCNHOmM&tbnid=uZxB6eijXyRO8M%3A&vet=10ahUKEwjSqLOji7jnAhWRA4gKHUqsAYUQMwjJASgCMAI..i&w=900&h=600&bih=910&biw=852&q=%EB%B6%88%EA%B3%A0%EA%B8%B0&ved=0ahUKEwjSqLOji7jnAhWRA4gKHUqsAYUQMwjJASgCMAI&iact=mrc&uact=8"
  }
];

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
