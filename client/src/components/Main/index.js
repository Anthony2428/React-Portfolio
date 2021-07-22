import React from "react";

const Repositories = () => {
    
    return (
        <div className="mb-6 columns is-multiline is-centered">
        <div className="column is-12 is-7-fullhd is-8-desktop has-text-centered">
            <h2 className="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">Anthony Lopez</h2>
            <p className="subtitle has-text-grey">Passionate Web Developer</p>
        </div>

        <div className="columns is-multiline">

        <div className="column is-8 mb-5">
            <div className="mb-4 is-flex">
                <img className="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt=""/>
            </div>
            <span><small className="has-text-grey-dark">My Greatest Accomplishment</small></span>
            <h2 className="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">SportsBox Sports</h2>
            <p className="subtitle has-text-grey">Web Application offering sports entertainment to users, The Right Way.</p>
            <a href="https://github.com/Anthony2428/Sportsbox-v2">Github Link</a><br />
            <a href="https://sportsbox-sports.herokuapp.com/">Live Link</a>
        </div>

        <div className="column is-4 mb-5">
            <div className="mb-4 is-flex">
            <img className="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt=""/>
            </div>
            <h2 className="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Forecast Dashboard</h2>
            <p className="subtitle has-text-grey">Connects to Weather API to present user with a city's 5-day Forecast</p>
            <a href="https://github.com/Anthony2428/Forecast-Dashboard">Github Link</a><br />
        </div>

        <div className="column is-4 mb-5">
            <div className="mb-4 is-flex">
            <img className="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt=""/>
            </div>
            <h2 className="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">The Tech Blog</h2>
            <p className="subtitle has-text-grey">CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.</p>
            <a href="https://github.com/Anthony2428/Tech-Blog">Github Link</a> <br />
            <a href="https://techblogant.herokuapp.com/">Live Link</a>
        </div>

        <div className="column is-4 mb-5">
            <div className="mb-4 is-flex">
            <img className="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt=""/>
            </div>
            <h2 className="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Employee Tracker</h2>
            <p className="subtitle has-text-grey">A solution for managing a company's employees using node, inquirer, and MySQL.</p>
            <a href="https://github.com/Anthony2428/Employee-Tracker">Github Link</a>
        </div>
        <div className="column is-4 mb-5">
            <div className="mb-4 is-flex">
            <img className="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt=""/>
            </div>
            <h2 className="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Password Generator</h2>
            <p className="subtitle has-text-grey">Generates passwords based on user criteria</p>
        <a href="https://github.com/Anthony2428/Ant-s-Password-Generator">Github Link</a> <br />
        <a href="https://anthony2428.github.io/Ant-s-Password-Generator/">Live Link</a>
      </div>
    </div>
    </div>
)
};
export default Repositories;