export const allPostsQuery = () => {
  const query = `*[_type=='post'] | order(_createAt desc) {
    _id,
      caption,
        video{
          assset-> {
            _id,
            url
          }
        },
        userId,
        postedBy->{
          _id,
          userName,
          image
        },
        likes,
        comments[]{
          comment,
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        }
  }`;

  return query;
};
