import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivacyPolicyContentComponent() {

    return (
        <div>
            <h3>Purpose</h3>
            <p>
                Film Finder is a website that allows users to find movie details and reviews. It
                allows users to review and comment on movies, and obtain movie reviews from
                other users in the community.
            </p>
            <h3>Data Collection</h3>
            <p>
                Film Finder collects your
                <ul>
                    <li> Email address</li>
                    <li> Account password</li>
                    <li> Profile picture</li>
                    <li> First name</li>
                    <li> Last name</li>

                    <li> Date of birth</li>
                    and
                    <li> Movie ratings</li>
                    <li> Movie comments</li>
                </ul>
                All of the data we collect we be stored in our database, which is provided to us
                by Heroku. We do not plan to share your data beyond the usage of Film Finder.
                However, we do not guarantee the maintenance of this website and its data
                after May 1st, 2020. If you feel uncomfortable sharing any of the data we collect,
                please use alternative data.
            </p>
            <h3>Usage</h3>

            <p>This site is a product of Northeastern University's CS 5610 course.
                All the course staff, including the instructor and teaching assistants will also
                have access to the data you provide.
            </p>

            <p>We collect movie ratings and comments to generate movie recommendations
                for the users.</p>


            <p>We collect your email address and account password for the purpose of
                account creation.</p>

            <p>We collect your first and last name for user experience personalization.</p>

            <p>We also collect your profile picture and birthday to meet the final project
                requirements of the CS5610.
            </p>

            <p>We do not plan to use your data beyond this course.</p>


        </div>
    )
}

export default PrivacyPolicyContentComponent