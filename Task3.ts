const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type Comments = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}[]

const getData = async (url: string): Promise<Comments> => {
  const response = await fetch(url)
  return await response.json()
}

getData(COMMENTS_URL)
  .then((data: Comments ): void => {
    data.forEach(element => {
      console.log(`ID: ${element.id}, Email: ${element.email}`)
    })
  })

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */




