import React from 'react';

export const Discover = () => {
    return (
        <div className = "profilePage">

            <div className = "search-box">
                <input className = "search-txt" type = "text" name = "" placeholder = "Search"></input>
                <a className = "search-btn" href = "#">
                    <i className ="fas fa-search"></i>
                </a>
            </div>

            <h3>Results:</h3>

            <div className = "profileAbout">
                <h4 className = "companyname">Google</h4>
                <p className = "description">
                    Google LLC is an American multinational technology company
                    that specializes in Internet-related services and products,
                    which include online advertising technologies, a search engine,
                    cloud computing, software, and hardware
                </p>
            </div>

            <div className = "profileAbout">
                <h4 className = "companyname">Facebook</h4>
                <p className = "description">
                    Facebook is defined as an online social networking website
                    where people can create profiles, share information such as
                    photos and quotes about themselves,
                    and respond or link to the information posted by others
                </p>
            </div>

            <div className = "profileAbout">
                <h4 className = "companyname">Amazon</h4>
                <p className = "description">
                    Amazon (Amazon.com) is the world's largest online retailer and a
                    prominent cloud services provider.
                    Amazon is headquartered in Seattle, Washington.
                </p>
            </div>
        
            <div className = "profileAbout">
                <h4 className = "companyname">Ally Bank</h4>
                <p className = "description">
                    (NYSE: ALLY) is a leading digital financial services company.
                    Ally Bank, the company's direct banking subsidiary,
                    offers an array of deposit, 
                    personal lending and mortgage products and services.
                </p>
            </div>
        </div>
    );
}

export default Discover;
