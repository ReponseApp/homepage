import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { useAuth } from "../../contexts/AuthContext"

function Settings(props) {

    let [chosenSetting, setChosenSetting] = useState("User Account"),
        [avatarPrew, setAvatarPrew] = useState(props.user.avatarURL),
        email = props.user.email,
        [isMailVisible, setMailVisibility] = useState(false),
        [copyIdScreen, setCopyIdScreen] = useState(false);

    return (props.settings ?
        <div className="fixed top-0 right-0 bottom-0 left-0 flex w-screen h-screen">
            <button className="fixed right-5 top-3 outline-none" onClick={closeSettings}><i className="far fa-times-circle text-gray-300 text-3xl"></i></button>
            <div id="settings-menu" className="text-gray-300 list-none bg-dark-200 flex flex-col items-end pr-10" style={{ width: "25%" }}>
                <li id="category-list" className="w-48">
                    <p className="select-none pl-2 text-sm font-semibold text-gray-400 pt-2 pb-1">General Settings</p>
                    <button onClick={changeSettingCategory}>
                        User Account
                    </button>
                    <button onClick={changeSettingCategory}>
                        Privacy & Safety
                    </button>
                </li>
            </div>
            <div id="menu-settings" style={{ width: "75%" }} className="bg-dark-50 select-none" draggable="false">
                {chosenSetting === "User Account" &&
                    <div className='ml-6'>
                        <p className='text-2xl text-white font-bold'>My Account</p>

                        <div class="max-w-lg rounded overflow-hidden bg-black mt-2">
                            <div class="px-6 py-4">
                                <div className="text-white mt-10">
                                    <div className='flex items-center'>
                                        <img src={avatarPrew} className="w-18 h-18 rounded-full object-cover" draggable="false" alt="Avatar" />
                                        <p className="font-semibold text-xl ml-2 mr-2">{props.user.username}<span className="text-gray-400">#{props.user.discrim}</span></p>
                                        <i class="fa fa-ellipsis-h text-gray-400 cursor-pointer" onClick={() => setCopyIdScreen(!copyIdScreen)} aria-hidden="true"></i>

                                        {copyIdScreen === true &&
                                            (<div className='relative top-5 right-5 bg-gray-800 text-white hover:bg-green-400 cursor-pointer' onClick={(e) => copyId(e)}>
                                                <span className='m-2'>Copy ID</span>
                                            </div>
                                            )}
                                    </div>
                                    <div class="max-w-lg rounded overflow-hidden bg-gray-700 mt-4 text-white">
                                        <div class="px-6 py-4">
                                            <div id='usernameField' className="flex items-center">
                                                <div>
                                                    <span className='block text-sm font-bold uppercase'>Username</span>
                                                    <span>{props.user.username}<span className="text-gray-400">#{props.user.discrim}</span></span>
                                                </div>
                                                <div className='flex flex-col ml-auto'>
                                                    <button className='btn btn-secondary'>Edit</button>
                                                </div>
                                            </div>

                                            <div id='emailField' className='flex items-center mt-3'>
                                                <div>
                                                    <span className='block text-sm font-bold uppercase'>E-mail</span>
                                                    <span>{getEmail()} <span className='text-sm hover:underline cursor-pointer' onClick={() => setMailVisibility(!isMailVisible)} style={{ color: 'hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%)' }}>{(isMailVisible === false) ? ('Show') : ('Hide')}</span></span>
                                                </div>
                                                <div className='flex flex-col ml-auto'>
                                                    <button className='btn btn-secondary'>Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        :
        ""
    )

    function closeSettings() {
        if (avatarPrew !== props.user.avatarURL) {
            setAvatarPrew(props.user.avatarURL)
        }

        props.settingsEditing(false)
    }

    function getEmail() {
        let words = email.split('@')[0].split('');

        if (!isMailVisible) {
            for (let word of words) {
                words = words.join('').replace(word, '*').split('');
            }
        }
        return words.join('') + '@' + email.split('@')[1];
    }

    function copyId(e) {
        navigator.clipboard.writeText('props.user.id');
        setCopyIdScreen(false);
    }

    function changeSettingCategory(e) {
        setChosenSetting(e.target.innerText);
    }

    /* function previewAvatar(e) {
        const avatar = URL.createObjectURL(e.target.files[0]);
        setAvatarPrew(avatar);

        document.getElementById("save-user-btn").classList.remove("disabled");
    } */

    /* function resetAvatar() {
        if(props.user.avatarURL === "https://i.imgur.com/r2myvam.png") {
            return
        } else {
            setAvatarPrew("https://i.imgur.com/r2myvam.png");

            document.getElementById("save-user-btn").classList.remove("disabled");
        }
    } */

    /* function saveChanges() {
        props.changeUserData({
            username: props.user.username,
            avatarURL: avatarPrew
        })

        document.getElementById("save-user-btn").classList.add("disabled")
    } */
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Settings)