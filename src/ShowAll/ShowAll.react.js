import React from 'react';

import './ShowAll.css';



const ShowAll = (props) => {

    return (
        <div className='showall_wrapper'>
            
             {/* <table> */}
                
                {/* <thead>
                    <tr>
                    <th>Name</th><th>Popularity</th>
                    </tr>
                </thead> */}
                {/* <tbody> */}
                    <div className="row text-center">
                     {
                        props.projectList.map((eachProject,index)=>{
                            return (
                            <div className="col-sm-3" key={index}>
                                <div className="thumbnail">
                                    <a href={eachProject.owner.html_url}><img src={eachProject.owner.avatar_url} alt={eachProject.owner.login} width="200" height="200"></img></a>
                                    <p><strong>{eachProject.name} </strong> </p>
                                    <p>Repository: <a href={eachProject.html_url}>{eachProject.name}</a></p>
                                    <p>Stars: {eachProject.watchers} </p>
                                    <p>Forks: {eachProject.forks} </p>
                                    <p>Issues: {eachProject.open_issues} </p>
                                </div>
                            </div>


                            
                            // <tr key={index}>
                            //     <td>{eachProject.name} </td>
                            //     <td>{eachProject.popularity} </td>
                            // </tr>
                            )
                        })
                    }

                    </div>

                {/* </tbody> */}
            {/* </table> */}
        </div>
    );

}

export default ShowAll;