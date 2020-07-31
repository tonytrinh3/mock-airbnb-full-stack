export const avgReview = (reviews,type) =>{
    //this could be in a separate function file
        //console.log(reviews);
        let sum = 0;
        reviews.map((review)=>{
            return sum += eval("review." + type)
        });
      return Math.round((sum/reviews.length)*10)/10;  
};

