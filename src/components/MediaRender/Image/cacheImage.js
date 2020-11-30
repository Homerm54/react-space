


export default function cacheImage(src) {

  return new Promise((resolve, reject) => {

    const image = new Image();
    image.src = src;

    image.onload = () => resolve();
    image.onerror = event => reject(event); 
    
  });

}


