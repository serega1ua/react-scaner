import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import './UserInfo.css';
import logo from './logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import Counter from "./Counter/Counter";

const URL = 'https://api.github.com/users/';
var takenStr = "serega1ua";

let defaultObjForEmptyProfile = {
    avatar_url: logo1,
    bio: null,
    blog: "",
    company: null,
    created_at: "no data",
    email: null,
    events_url: "no data",
    followers: 0,
    followers_url: "no data",
    following: 0,
    following_url: "no data",
    gists_url: "no data",
    gravatar_id: "no data",
    hireable: null,
    html_url: "no data",
    id: "no data",
    location: null,
    login: ` login does not created yet. 
        So, it's unused login.`,
    name: "no data",
    node_id: "no data",
    organizations_url: "no data",
    public_gists: 0,
    public_repos: 0,
    received_events_url: "no data",
    repos_url: "no data",
    site_admin: false,
    starred_url: "no data",
    subscriptions_url: "no data",
    twitter_username: null,
    type: "no data",
    updated_at: "It has no updates",
    url: "It has no Url",
}

function UserInfo() {
    const [user, setUser] = useState(null);
    //так работает: const setUser = (newUser) => { user = newUser }

    let [login, setLogin] = React.useState("serega1ua");


    const inputValue = (event) => {
        console.log("===");
        console.log(event.target.value);
        takenStr = event.target.value;
        console.log("внутри inputValue");
    }

    const changeV = () => {
        console.log("takenText");
        (setLogin(takenStr))
    };


    useEffect(() => {
        axios.get(`${URL}${login}`).then((res) => {
            console.log("внутри useEffect");
            console.log(`${URL}${login}`);
            setUser(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err.code + " НЕ ПОЛУЧЕНО ИЗОБРАЖЕНИЕ");
            login = `Login ${login} does not exist on GitHub.`
            setUser({...defaultObjForEmptyProfile, login});
            console.log(user.login);
        });
    }, [login]);

    return (
        <>
  {/*      <div className="wrapper">
            <img className="card__picture" src={logo} style={{
                 width: "90px", height: "90px", clear: "both"
            }} alt="logo"/>
            <h1 className="header--level1">Info regarding the user</h1>

            <div className="form">
                <input type={"text"}
                       id={"fname"}
                       name={"fname"}
                       onChange={inputValue}
                       placeholder={"Ввведите git-логин"}
                       className="form__input"/>
                <button onClick={changeV}
                        className="form__button"
                >Check
                </button>
            </div>

            <div className="card--graphics">
                <h2 className="card__header header--level2">avatar </h2>
                <img className="card__picture" src={user?.avatar_url} alt=""/>
                <p className="card__text">Это фото юзера</p>
            </div>


            <form onSubmit={changeV}>
                    <input type={"text"}
                           id={"fname"}
                           name={"fname"}
                           onChange={inputValue}
                           placeholder={"Ввведите git-логин"}/><br />
                <input type="submit" value="Отправить" />
            </form>


            <div className="info">
                <div className="card">
                    <h2 className="card__header header--level2">login</h2>
                    <p className="card__text">login: {user?.login}</p>
                </div>

                <div className="card">
                    <h2 className="header--level2">created_at</h2>
                    <p className="card__text">created_at: {user?.created_at
                        .replace(/[T]/g, " on ")
                         .replace(/[Z]/g, "")}</p>
                </div>

                <div className="card">
                    <h2 className="header--level2">updated_at</h2>
                    <p className="card__text">updated_at: {user?.updated_at
                        .replace(/[T]/g, " on ")
                        .replace(/[Z]/g, "")}</p>
                </div>



                <Counter created_at={user? user.created_at: ""}/>
                почему здесь undefined иногда



                <div className="card">
                    <h2 className="header--level2">public_repos</h2>
                    <p className="card__text">public_repos: {user?.public_repos}</p>
                </div>

                <div className="card">
                    <h2 className="header--level2">html_url</h2>
                    <p className="card__text">html_url{user?.html_url}</p>
                </div>
            </div>

        </div>*/}

            <div className="container">
{/*search field*/}
                <div className="card">

                    <div className="pic"></div>
                    <div className="input-container">
                        <input type="text"
                               placeholder="Type Git-login here"
                               required=""
                               onChange={inputValue}
                               className="form__input"/>
                        <label>Git-Login</label>
                    </div>
                    <button onClick={changeV}
                            className="form__button btn">Check</button>


                    <p>Scanned  Login</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button>
                    </button>
                </div>



{/*field to render login*/}
                <div className="card">
                    <h2>{user?.login}</h2>
                    <p>Scanned  Login</p>
                    <div className="pic">
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render image of the user*/}
                <div className="card">
                    <h2></h2>
                    <p>Image of the User</p>
                    <div className="pic">
                        <img className="pic__image" src={user?.avatar_url} alt=""/>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render date of creation*/}
                <div className="card">
                    <h2>{user?.created_at
                        .replace(/[T]/g, " on ")
                        .replace(/[Z]/g, "")}</h2>
                    <p>Date of Creation</p>
                    <div className="pic"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render date of update*/}
                <div className="card card3">
                    <h2>{user?.updated_at
                        .replace(/[T]/g, " on ")
                        .replace(/[Z]/g, "")}</h2>
                    <p>Last Updated</p>
                    <div className="pic"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render Git Experience*/}
                <div className="card">
                    <h2><Counter created_at={user? user.created_at: ""}/></h2>
                    <p>Git Experience</p>
                    <div className="pic"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render Number of Public Repos*/}
                <div className="card card5">
                    <h2>{user?.public_repos}</h2>
                    <p>Number of Repos</p>
                    <div className="pic"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render id*/}
                <div className="card card5">
                    <h2>{user?.id}</h2>
                    <p>id</p>
                    <div className="pic"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

                {/*field to render followers*/}
                <div className="card card5">
                    <h2>{user?.followers}</h2>
                    <p>Followers</p>
                    <div className="pic"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <button className="button">
                    </button>
                </div>

            </div>


            </>
    );
}

export default UserInfo;
