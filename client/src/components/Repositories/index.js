import React, {useState, useEffect} from "react";
import axios from "axios";

const Repository = () => {
    const [allRepos, setRepos] = useState([]);
    
      useEffect(() => {
        axios.get('https://api.github.com/users/Anthony2428/repos')
          .then((users) => {
              console.log(users)
            setRepos(users.data)
          })
          .catch((err) => {
            console.log(err)
          })
    
      }, []);

    const allJsx = allRepos.map(repo => {
        return(
            <div class="column is-4 mb-5 box">        
                <div class="mb-4 is-flex">
                    <img class="image is-128x128" src="https://github.com/Anthony2428/Ant-s-Code-Quiz/blob/e8d29d8670056850d96688c5578a0b0bf958d843/assets/Code-Quiz-Screenshot.png" alt=""/>
                </div>
                <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">{repo.name}</h2>
                <p class="subtitle has-text-grey">{repo.description}</p>
                <a href={repo.url}>Github Link</a>
            </div>
        );
    })
    return (
        <div class="columns is-multiline p-4">
            {allJsx}
        </div>
    )
};
export default Repository;