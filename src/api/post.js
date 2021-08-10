export const getPosts = async() => {
   const response = await window.fetch("https://gorest.co.in/public-api/posts");

   if (!response.ok) {
      throw new Error("Problemas con el servidor");
   }
   else {
      return response.json();
   }
};