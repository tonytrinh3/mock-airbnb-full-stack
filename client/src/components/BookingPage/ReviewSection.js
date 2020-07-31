import React from 'react';
import moment from "moment";
import {avgReview} from '../avgReview';


// const avgReview = (reviews,type) =>{
//     //this could be in a separate function file
//         //console.log(reviews);
//         let sum = 0;
//         reviews.map((review)=>{
//             return sum += eval("review." + type)
//         });
//       return sum/reviews.length;  
// };

const renderReviewDescription =(reviews) =>{

    return reviews.map(review =>{
        const {
            date,
            description,
            name
        } = review;


        return (
            <div className="review-section__reviews" key = {description}>
                <h3 className="header-small">{name}</h3>
                <h3 className="header-small">{moment(date).format('MMMM YYYY')}</h3>
                <p className="">{description}</p>
                <hr className="review-section__hr hr"/>
            </div>
        )

    })

}


const ReviewSection = ({reviews}) => {
    return(
    <div className="review-section">
        <h2 className="review-section__header header-big margin-bottom-medium">Reviews</h2>
        <div className="review-section__preview">
            <p className="review-section__preview--review margin-bottom-medium">{avgReview(reviews,"overall")}</p>
            <p className="review-section__preview--count margin-bottom-medium">{reviews.length} reviews</p>
            <p className="review-section__preview--search margin-bottom-medium">Search Review</p>
        </div>
        <ul className="review-section__breakdown margin-bottom-large">
            <li className="review-section__breakdown--item">Communication</li>
            <li className="review-section__breakdown--review">{avgReview(reviews,"communication")}</li>
            <li className="review-section__breakdown--item">Check-in</li>
            <li className="review-section__breakdown--review">{avgReview(reviews,'check_in')}</li>
            <li className="review-section__breakdown--item">Cleanliness</li>
            <li className="review-section__breakdown--review">{avgReview(reviews,"cleanliness")}</li>
            <li className="review-section__breakdown--item">Location</li>
            <li className="review-section__breakdown--review">{avgReview(reviews,"location")}</li>
            <li className="review-section__breakdown--item">Accuracy</li>
            <li className="review-section__breakdown--review">{avgReview(reviews,"accuracy")}</li>
            <li className="review-section__breakdown--item">Value</li>
            <li className="review-section__breakdown--review">{avgReview(reviews,"value")}</li>
        </ul>

        {renderReviewDescription(reviews)}

    </div>
    )

};

export default ReviewSection;